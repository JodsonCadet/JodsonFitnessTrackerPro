import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import Error404 from "./Error404.jsx";
import Layout from "./layout/Layout.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router"

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  return (
  <Router>
    <Layout />
    <Routes>
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Activities" element={<ActivitiesPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes> 
  </Router>
  );
}
