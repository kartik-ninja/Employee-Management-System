import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header changeUser={props.changeUser} data={props.data}></Header>
      <TaskListNumbers data={props.data}></TaskListNumbers>
      <TaskList data={props.data}></TaskList>
    </div>
  );
};

export default EmployeeDashboard;
