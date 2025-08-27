import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm";

function App() {
  return (
    <div className="p-6">
      {/* Controlled form */}
      <RegistrationForm />

      <hr className="my-8" />

      {/* Formik form */}
      <FormikForm />
    </div>
  );
}

export default App;
