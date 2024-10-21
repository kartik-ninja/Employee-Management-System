import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const taskTitleElement = useRef();
  const taskDateElement = useRef();
  const assignToElement = useRef();
  const taskCategoryElement = useRef();
  const taskDescriptionElement = useRef();

  const { userData, setUserData } = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const taskTitle = taskTitleElement.current.value;
    const taskDate = taskDateElement.current.value;
    const assignTo = assignToElement.current.value;
    const taskCategory = taskCategoryElement.current.value;
    const taskDescription = taskDescriptionElement.current.value;

    const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      taskCategory,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedEmployees = userData.employees.map((employee) => {
      if (assignTo === employee.firstName) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCount: {
            ...employee.taskCount,
            newTask: employee.taskCount.newTask + 1,
          },
        };
      }
      return employee;
    });

    setUserData({ ...userData, employees: updatedEmployees });
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    taskTitleElement.current.value = "";
    taskDateElement.current.value = "";
    assignToElement.current.value = "";
    taskCategoryElement.current.value = "";
    taskDescriptionElement.current.value = "";
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm textgray-300 mb-0.5">Task Title</h3>
            <input
              ref={taskTitleElement}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm textgray-300 mb-0.5">Date</h3>
            <input
              ref={taskDateElement}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm textgray-300 mb-0.5">Assign To</h3>
            <input
              ref={assignToElement}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Enter the name of Employee"
            />
          </div>
          <div>
            <h3 className="text-sm textgray-300 mb-0.5">Category</h3>
            <input
              ref={taskCategoryElement}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            ref={taskDescriptionElement}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
          ></textarea>

          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
