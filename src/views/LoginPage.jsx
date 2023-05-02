import React from "react";

// Redux
import { setUser } from "../store/user/actions";

// Formik para construir formularios
import { Formik } from "formik";

// Yup para validaciones
import * as Yup from "yup";

// Estilos de material
import { Box, Button, TextField, Card } from "@mui/material";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserDispatch: (user) => {
      dispatch(setUser(user));
    },
  };
};

let LoginPage = ({ user, setUserDispatch }) => {
  // Generamos el valid schema con yup
  const loginSchema = Yup.object().shape({
    username: Yup.string().required("El Usuario es requerido"),
    password: Yup.string().required("La Contraseña es requerida"),
  });

  // Valores iniciales del form
  const initialValues = {
    username: "",
    password: "",
  };

  // Funcion que maneja el submit
  function login(payload) {
    window.api
      .login(payload)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        console.log(user);
        setUserDispatch(res.data.user);
      })
      .catch((error) => {
        console.log(user);
        console.error(error);
      });
  }

  // Validar Form
  function validForm(isInitialValid, dirty, isValid) {
    return (!isInitialValid && !dirty) || !isValid;
  }

  return (
    <div className="loginPage">
      {JSON.stringify(user)}
      <Card className="col-6 p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={loginSchema}
          onSubmit={(payload) => login(payload)}
        >
          {/* Sustraemos lo que necesitamos de formik */}
          {(props) => {
            const {
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              dirty,
              isValid,
              isInitialValid,
            } = props;

            return (
              <Box
                className="row justify-content-center"
                component={"form"}
                onSubmit={handleSubmit}
              >
                <TextField
                  className="mb-3"
                  error={errors.username && touched.username}
                  label="Usuario"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.username}
                ></TextField>
                <TextField
                  className="mb-3"
                  error={errors.password && touched.password}
                  label="Contraseña"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.password}
                ></TextField>
                <Button
                  disabled={validForm(isInitialValid, dirty, isValid)}
                  variant="contained"
                  type="submit"
                >
                  Enviar
                </Button>
              </Box>
            );
          }}
        </Formik>
      </Card>
    </div>
  );
};

LoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginPage;
