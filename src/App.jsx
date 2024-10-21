import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (!authData || !authData.userData) {
      alert("Authentication data is not available. Please try again later.");
      return;
    }

    const { employees, admin } = authData.userData;

    // Check if the user is an admin
    const adminUser = admin.find(
      (e) => email === e.email && password === e.password
    );
    if (adminUser) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      return;
    }

    // Check if the user is an employee
    const employeeUser = employees.find(
      (e) => email === e.email && password === e.password
    );
    if (employeeUser) {
      setUser("employee");
      setLoggedInUserData(employeeUser);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", data: employeeUser })
      );
      return;
    }

    // If neither admin nor employee is found
    alert("Invalid Credentials");
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin}></Login>}
      {user === "admin" && (
        <AdminDashboard changeUser={setUser}></AdminDashboard>
      )}
      {user === "employee" && (
        <EmployeeDashboard
          changeUser={setUser}
          data={loggedInUserData}
        ></EmployeeDashboard>
      )}
    </div>
  );
};

export default App;
