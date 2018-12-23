const initState = {
    projects: [
        {
            id: '1', 
            title: 'Help me find peach', 
            content: 'Culpa incididunt ea nulla id elit adipisicing.'
        },
        {
            id: '2', 
            title: 'Collect all the start', 
            content: 'Nulla ad cupidatat incididunt sint consectetur voluptate aute et amet laboris aliqua anim Lorem.'
        },
        {
            id: '3', 
            title: 'egg hunt with yoshi', 
            content: 'Adipisicing velit occaecat esse dolore cillum eiusmod minim.'
        }
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}
 
export default projectReducer;