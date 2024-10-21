const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare monthly report",
        taskDescription: "Compile sales data and generate the monthly report.",
        taskDate: "2024-10-20",
        category: "Reporting",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update client details",
        taskDescription:
          "Ensure that the CRM is updated with the latest client information.",
        taskDate: "2024-10-10",
        category: "Data Management",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix website bugs",
        taskDescription: "Resolve reported issues on the company website.",
        taskDate: "2024-10-15",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Rohan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Client meeting preparation",
        taskDescription:
          "Prepare materials and presentation for the upcoming client meeting.",
        taskDate: "2024-10-21",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Submit project proposal",
        taskDescription:
          "Finalize and submit the project proposal to the client.",
        taskDate: "2024-10-05",
        category: "Proposal",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team training session",
        taskDescription: "Organize a training session for new hires.",
        taskDate: "2024-10-22",
        category: "Training",
      },
    ],
  },
  {
    id: 3,
    firstName: "Vikram",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop new feature",
        taskDescription: "Work on the new feature as per client request.",
        taskDate: "2024-10-25",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Complete documentation",
        taskDescription: "Finish the product documentation for release.",
        taskDate: "2024-10-12",
        category: "Documentation",
      },
    ],
  },
  {
    id: 4,
    firstName: "Anjali",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client feedback analysis",
        taskDescription: "Review and analyze feedback from the client survey.",
        taskDate: "2024-10-18",
        category: "Analysis",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update marketing strategy",
        taskDescription:
          "Revise the marketing strategy based on quarterly data.",
        taskDate: "2024-10-01",
        category: "Marketing",
      },
    ],
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Conduct user testing",
        taskDescription:
          "Oversee the testing of new product features by users.",
        taskDate: "2024-10-28",
        category: "Testing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research new tools",
        taskDescription:
          "Research and evaluate tools to improve team productivity.",
        taskDate: "2024-10-07",
        category: "Research",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
