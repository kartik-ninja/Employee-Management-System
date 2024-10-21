import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser}></Header>
      <CreateTask></CreateTask>
      <AllTask></AllTask>
    </div>
  );
};

export default AdminDashboard;
