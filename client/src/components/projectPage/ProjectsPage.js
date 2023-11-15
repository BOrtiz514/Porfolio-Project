import { useProjectData } from "./ProjectDataContext";
import Header from "../Header";
import styled from "styled-components";
import ProjectDetails from "./ProjectDetails";

const ProjectsPage = () => {
    const { projects, setSelectedProject } = useProjectData();


return (
    <Wrapper>
        <Header/>
        <PageTitle>Projects</PageTitle>
        <p className="SubTitle">Below are some of the many projects that I have worked on. 
            Check out each project in detail by clicking on the images!
            To be updated..
            </p>

        <Grid className="project-grid">
            {projects.map((project) => (
                <ProjectItem key={project.id} onClick={() => setSelectedProject(project.id)}>
                    <ProjectImage src={project.imageUrl} alt={project.name} />
                    <p className="ProjectName">{project.name}</p>
                </ProjectItem>
            ))}
            </Grid>
        <ProjectDetails />
    </Wrapper>
)
}

const Wrapper = styled.div`
font-family: 'Poppins', sans-serif;
background-color: whitesmoke;
height: 100%;

.SubTitle{
    text-align: center;
}
`

const PageTitle = styled.h1`
text-align: center;
text-decoration: underline;
`

const Grid = styled.div`
display: flex;
justify-content: space-around;
`

const ProjectItem = styled.div`
margin: 10px;
border: 1px solid black;
background-color: aliceblue;
border-radius: 10px;
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover{
        transform: scale(1.2);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

.ProjectName{
    text-align: center;
}
`;

const ProjectImage = styled.img`
max-width: 100%;
max-height: 300px; 
border: 1px solid black; 
border-radius: 10px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export default ProjectsPage