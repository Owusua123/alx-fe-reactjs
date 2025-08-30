import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome to your profile! Use the links below to navigate.</p>

      <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      {/* 👇 Nested routes will render here */}
      <Outlet />
    </div>
  );
}
