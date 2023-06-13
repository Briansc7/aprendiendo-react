import { useFormik } from "formik";
import * as Yup from "yup";

const LoginFormik = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log("se envio formulario", data);
      //pegamos al endpoint con esa data
    },
    validationSchema: Yup.object({
      email: Yup.string("debe ser un string")
        .email("no corresponde a un email")
        .required("este campo es requerido"),
      password: Yup.string("debe ser un string")
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("este campo es requerido"),
    }),
  });

  console.log(errors);

  return (
    <div>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default LoginFormik;
