import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  // localStorage.clear();
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex justify-start items-center gap-5 flex-nowrap w-full py-5 mt-10 "
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}></AcceptTask>;
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}></NewTask>;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem}></CompleteTask>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}></FailedTask>;
        }
      })}
    </div>
  );
};

export default TaskList;
