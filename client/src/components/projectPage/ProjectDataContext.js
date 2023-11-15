import { createContext, useContext, useReducer } from "react";


const initialState = {
    projects: [
        { id: 1, 
            name:'Nyan Cat Project', 
            imageUrl:'NyanCatProject.png', 
            description: 'This is a Space Invaders-like game. As you can see, instead of Aliens attacking, its Nyan Cats! The game starts with 2 Nyan Cats falling. Every few seconds, the numer of Nyan Cats will increase!'},
        { id: 2, 
            name:'ToyStory Webpage', 
            imageUrl:'ToyStoryWebpage.png', 
            description: 'This was my very first webpage. The task was given as a challenge before my Web Development course started. Perhpas I will recreate it with my newly acquired skills after the course is over :) '},
    ],
    selectedProject: null,
}

const SET_SELECTED_PROJECT = 'SET_SELECTED_PROJECT';

const projectReducer = (state, action) => {
    switch (action.type)  {
        case SET_SELECTED_PROJECT:
        return { ...state, selectedProject: action.payload };
        default:
            return state;
    }
};

const ProjectDataContext = createContext();

export const ProjectDataProvider = ({ children }) => {
    const [state, dispatch ] = useReducer(projectReducer, initialState);

    const setSelectedProject = (projectId) => {
        dispatch ({ type: SET_SELECTED_PROJECT, payload: projectId });
    };

    return (
        <ProjectDataContext.Provider value={{ ...state, setSelectedProject }}>
            {children}
        </ProjectDataContext.Provider>
    );
};

export const useProjectData = () => {
    const context = useContext(ProjectDataContext);
    if (!context) {
        throw new Error('useProjectData must be used within a ProjectDataProvider');
    }
    return context;
};