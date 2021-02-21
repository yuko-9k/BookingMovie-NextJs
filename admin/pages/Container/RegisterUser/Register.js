import React, { useState } from "react";
import { Paper, makeStyles, withStyles } from "@material-ui/core";
import Image from "../../../public/img/bg2.jpg";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CustomizedButtons from "../../component/button";
import Alert from "@material-ui/lab/Alert";
import { Input } from "../../component/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../function/schemaValidation";
import { connect, useSelector } from "react-redux";
import * as act from "./modules/action";
import { DefaultParam } from "../../utils/setDefaultValues/registerForm";

function Register(props) {
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
  const classes = useStyles();
  const onSubmit = (data) => {
    props.UserRegister(DefaultParam(data));
  };
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <Paper className={classes.root}>
      <Container className={classes.content}>
        <Typography variant="h6" gutterBottom>
          ĐĂNG KÝ
        </Typography>
        <form
          className={classes.formLogin}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Tên Tài Khoản"
            ref={register}
            name="taiKhoan"
            error={!!errors.taiKhoan}
            helperText={errors?.taiKhoan?.message}
          />
          <Input
            label="Mật khẩu"
            ref={register}
            name="matKhau"
            type="password"
            error={!!errors.matKhau}
            helperText={errors?.matKhau?.message}
          />
          <Input
            label="Email"
            ref={register}
            name="email"
            error={!!errors.email}
            helperText={errors?.email?.message}
          />
          <Input
            label="Số Điện Thoại"
            ref={register}
            name="soDt"
            error={!!errors.soDt}
            helperText={errors?.soDt?.message}
          />
          <Input
            label="Họ Và Tên"
            ref={register}
            name="hoTen"
            error={!!errors.hoTen}
            helperText={errors?.hoTen?.message}
          />
          {CustomizedButtons("Đăng Ký")}
        </form>
      </Container>
    </Paper>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    UserRegister: (data) => {
      dispatch(act.actRegisterUser(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(Register);
