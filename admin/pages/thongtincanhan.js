import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import { emphasize, withStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import HomeIcon from "@material-ui/icons/Home";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import NewReleasesIcon from "@material-ui/icons/NewReleases";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 20,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);
const useStyles = makeStyles({
  nav: {
    margin: "20px 0",
  },
  ol: {
    justifyContent: "center",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function handleDarkMode() {
  console.log("1");
}

export default function CustomizedBreadcrumbs() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container classes={{ root: classes.content }}>
        <Breadcrumbs
          aria-label="breadcrumb"
          classes={{ root: classes.nav, ol: classes.ol }}
        >
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Trang chủ"
            icon={<HomeIcon fontSize="small" />}
            onClick={handleClick}
          />
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Liên hệ"
            icon={<PermContactCalendarIcon fontSize="small" />}
            onClick={handleClick}
          />
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Tin tức"
            icon={<NewReleasesIcon fontSize="small" />}
            onClick={handleClick}
          />
          <StyledBreadcrumb
            component="a"
            href="#"
            label="Ứng dụng"
            icon={<PhoneIphoneIcon fontSize="small" />}
            onClick={handleClick}
          />
          <StyledBreadcrumb
            label="Accessories"
            deleteIcon={<ExpandMoreIcon />}
            onClick={handleClick}
            onDelete={handleClick}
          />
        </Breadcrumbs>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="button"
            display="block"
            gutterBottom
            style={{ marginRight: "12px" }}
          >
            Xin chào,...
          </Typography>
          <Avatar alt="Cindy Baker" src="https://picsum.photos/200/300" />
          <IconButton
            color="secondary"
            aria-label="changeMode"
            onClick={handleDarkMode}
          >
            <Brightness4Icon />
          </IconButton>
        </div>
      </Container>
    </React.Fragment>
  );
}
