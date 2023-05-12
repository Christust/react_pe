import React from "react";

// Loader
import Loader from "../components/loader/Loader";

// Redux
import { setUser, setToken } from "../store/reducers/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

// Formik para construir formularios
import { Formik } from "formik";

// Yup para validaciones
import * as Yup from "yup";

// Estilos de material
import { MaterialUIContext } from "../providers/MaterialUIContext";

// Router
import { useNavigate } from "react-router-dom";

let LoginPage = () => {
  const components = React.useContext(MaterialUIContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const loader = useSelector((state) => state.loader.count);
  const navigate = useNavigate();
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
    window.api.login(payload).then((res) => {
      dispatch(setUser(res.data.user));
      dispatch(setToken(res.data.token));
      navigate("/");
    });
  }

  // Validar Form
  function validForm(isInitialValid, dirty, isValid) {
    return (!isInitialValid && !dirty) || !isValid;
  }

  return (
    <div className="loginPage">
      <components.Card className="col-6 p-5">
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
              <components.Box
                className="row justify-content-center"
                component={"form"}
                onSubmit={handleSubmit}
              >
                <components.TextField
                  className="mb-3"
                  error={errors.username && touched.username}
                  label="Usuario"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.username}
                ></components.TextField>
                <components.TextField
                  className="mb-3"
                  error={errors.password && touched.password}
                  label="Contraseña"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={errors.password}
                ></components.TextField>
                <components.Button
                  disabled={validForm(isInitialValid, dirty, isValid)}
                  variant="contained"
                  type="submit"
                >
                  Enviar
                </components.Button>
              </components.Box>
            );
          }}
        </Formik>
      </components.Card>
      {loader > 0 && <Loader />}
    </div>
  );
};

export default LoginPage;
