import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("User registered (Formik):", values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className="space-y-4 max-w-md mx-auto p-4 border rounded">
          <h2 className="text-xl font-bold">User Registration (Formik)</h2>

          {/* Username field */}
          <div>
            <label className="block">Username</label>
            <Field
              name="username"
              className={`border p-2 w-full rounded ${
                errors.username && touched.username ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500"
            />
          </div>

          {/* Email field */}
          <div>
            <label className="block">Email</label>
            <Field
              type="email"
              name="email"
              className={`border p-2 w-full rounded ${
                errors.email && touched.email ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500"
            />
          </div>

          {/* Password field */}
          <div>
            <label className="block">Password</label>
            <Field
              type="password"
              name="password"
              className={`border p-2 w-full rounded ${
                errors.password && touched.password ? "border-red-500" : ""
              }`}
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
