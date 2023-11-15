import { useProjectData } from "./ProjectDataContext";
import styled from "styled-components";

const ProjectDetails = () => {
    const { projects, selectedProject, setSelectedProject } = useProjectData();
    
    if (!selectedProject) {
        return null;
    }

    const project = projects.find((p) => p.id === selectedProject);

    return (
    <Overlay onClick={() => setSelectedProject(null)}>
    <ProjectModal>
        <ProjectImage src={project.imageUrl} alt={project.name} />
        <ProjectDescription>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </ProjectDescription>
    </ProjectModal>
    </Overlay>
);
};

const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
display: flex;
justify-content: center;
align-items: center;
`;

const ProjectModal = styled.div`
background-color: aliceblue;
padding: 20px;
max-width: 80%;
max-height: 80%;
overflow: hidden;
text-align: center;
position: relative;
border: 1px solid black;
border-radius: 10px;
`;

const ProjectImage = styled.img`
max-width: 100%;
max-height: 400px;
margin-bottom: 20px;
border: 1px;
border-radius: 5px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

const ProjectDescription = styled.div`
h2 {
margin-bottom: 10px;
}
`;

export default ProjectDetails;