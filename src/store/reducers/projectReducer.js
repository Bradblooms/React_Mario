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
  return state;
};

export default projectReducer;
