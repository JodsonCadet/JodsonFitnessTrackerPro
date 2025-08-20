import { useAuth } from "../auth/AuthContext";
import { useNavigate } from "react-router";

/** Navbar with site navigation links */
export default function Navbar() {
  const navigate = useNavigate();
  const { token, logout } = useAuth();

  return (
    <header>
      <p>Fitness Trackr</p>
      <nav>
        <a onClick={() => navigate("activities")}>Activities</a>
        {token ? (
          <a onClick={() => logout()}>Log out</a>
        ) : (
          <>
            <a onClick={() => navigate("register")}>Register</a>
            <a onClick={() => navigate("login")}>Login</a>
          </>
        )}
      </nav>
    </header>
  );
}
