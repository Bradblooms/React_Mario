const initState = {
  projects: [
    {
      id: "1",
      title: "Mock Up for one world marathon",
      content: "blah blah blah"
    },
    { id: "2", title: "What the Fuck should i do", content: "blah blah blah" },
    {
      id: "3",
      title: "Mock Up for one world marathon",
      content: "blah blah blah"
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("create project", action.project);
      return state;

    case "CREATE_PROJECT_ERROR":
      console.log("create project srror ", action.err);
      return state;

    default:
      return state;
  }
};

export default projectReducer;
