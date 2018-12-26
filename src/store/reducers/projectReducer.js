const initState = {
  projects: [
    {
      id: "1",
      title: "Help me find peach",
      content: "Culpa incididunt ea nulla id elit adipisicing."
    },
    {
      id: "2",
      title: "Collect all the stars",
      content:
        "Nulla ad cupidatat incididunt sint consectetur voluptate aute et amet laboris aliqua anim Lorem."
    },
    {
      id: "3",
      title: "egg hunt with yoshi",
      content: "Adipisicing velit occaecat esse dolore cillum eiusmod minim."
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
