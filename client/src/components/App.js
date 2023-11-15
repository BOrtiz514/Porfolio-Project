import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom"
import styled from "styled-components"

import Home from "./Home"
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"

import { ProjectDataProvider } from "./projectPage/ProjectDataContext"
import ProjectsPage from "./projectPage/ProjectsPage"



const App = () => {

    return (
    <Router>
        <ProjectDataProvider>
        <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<ProjectsPage/>} />
            <Route path="/contact" element={<ContactMe />} />
        </Switch>
        </ProjectDataProvider>
    </Router>)
}
export default App