import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Image from "../../../public/img/bg2.jpg";
import Imagetitle from "../../../public/img/group@2x.png";
import { Paper, makeStyles, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import CustomizedButtons from "../../component/button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useForm } from "react-hook-form";
import Alert from "@material-ui/lab/Alert";
import * as act from "./modules/action";
import { connect, useSelector } from "react-redux";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${Image})`,
    width: "100%",
    height: "100vh",
    position: "relative",
  },
  content: {
    maxWidth: "360px",
    padding: "40px 32px 30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    backgroundImage:
      "linear-gradient(to bottom,rgba(20,50,93,.9),rgba(8,22,48,.9))",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 45%)",
    textAlign: "center",
    color: "#fff",
    borderRadius: "6px",
  },
  Imagetitle: {
    width: "209px",
    cursor: "pointer",
    verticalAlign: "middle",
  },
  formLogin: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CssTextField = withStyles({
  root: {
    "& input:-webkit-autofill,input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active ": {
      backgroundColor: "yellow  !important",
      webkitTextFillColor: "yellow  !important",
      color: "#1976d2 !important",
      webkitBoxShadow: "0 0 0px 1000px #000 inset",
      transition: "background-color 5000s ease-in-out 0s",
    },
    "& .MuiInputBase-input": {
      color: "#1976d2 !important",
    },
    "& .MuiOutlinedInput-input": {
      padding: "18.5px 50px",
    },
    "& .MuiInputLabel-outlined": {
      color: "red",
    },
    "& label.Mui-focused": {
      color: "#1976d2",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#1976d2",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#1976d2",
      },
      "&:hover fieldset": {
        borderColor: "#1976d2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1976d2",
      },
    },
  },
})(TextField);

function Login(props) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    props.UserLogin(data);
  };
  const classes = useStyles();

  const { err, loading } = useSelector((state) => state.userLoginReducer);
  console.log(loading);
  return (
    <Paper className={classes.root}>
      <CssBaseline />
      <Container className={classes.content}>
        <Typography variant="h1" component="h2" gutterBottom color="secondary">
          <img src={Imagetitle} className={classes.Imagetitle} />
        </Typography>
        <form
          className={classes.formLogin}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          {err ? (
            <Alert variant="filled" severity="error">
              {err.data}
            </Alert>
          ) : null}
          {loading ? <CircularProgress color="secondary" size="50px" /> : null}

          <CssTextField
            name="taiKhoan"
            variant="outlined"
            required
            id="user"
            label="Tên tài khoản"
            autoComplete="new-user"
            className={classes.margin}
            inputRef={register({ required: true })}
          />
          {errors.taiKhoan && (
            <Alert severity="error" variant="filled">
              Tài khoản không được để trống
            </Alert>
          )}
          <CssTextField
            variant="outlined"
            type="password"
            required
            name="matKhau"
            label="Mật khẩu"
            id="password"
            autoComplete="new-password"
            className={classes.margin}
            inputRef={register({ required: true })}
          />
          {errors.matKhau && (
            <Alert severity="error" variant="filled">
              Mật khẩu không được để trống
            </Alert>
          )}
          {CustomizedButtons("Đăng nhập")}
          <Link href="/Container/RegisterUser/Register">
            {CustomizedButtons("Đăng ký")}
          </Link>
        </form>
      </Container>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserLogin: (user) => {
      dispatch(act.actUserLoginCallApi(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(Login);
