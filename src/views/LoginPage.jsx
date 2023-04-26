import React from "react";

// Formik para construir formularios
import { Formik } from "formik";

// Yup para validaciones
import * as Yup from "yup";

// Estilos de material
import { Box, Button, TextField, Card } from "@mui/material";

// Redux User
import { useDispatch } from "react-redux";
import { setUser, getUser } from "../store/user/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = dispatch(getUser());

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
        dispatch(setUser(res.data.user));
      })
      .catch((error) => {
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

export default LoginPage;
