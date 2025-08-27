import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const [errors, setErrors] = useState({});

  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    const newErrors = {};

    
    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});


    console.log("User registered:", { username, email, password });

    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 border rounded"
    >
      <h2 className="text-xl font-bold">User Registration</h2>

      {/* Username field */}
      <div>
        <label className="block">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full rounded"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      {/* Email field */}
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      {/* Password field */}
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;

