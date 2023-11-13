import { ErrorMessage, Field, Formik, Form } from "formik";
const Login = () => {
  return (
    <div>
      <center>
        <h1>Login</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          //Validation
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          //Submit
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" />
              <Field type="text" name="password" placeholder="Enter password" />
              <ErrorMessage name="password" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </center>
    </div>
  );
};
export default Login;
