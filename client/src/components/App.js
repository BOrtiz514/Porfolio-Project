import {BrowserRouter as Router, Routes as Switch, Route} from "react-router-dom"
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import Projects from "./Projects"


const App = () => {

    return (<Router>
        <nav></nav>
        <Switch>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<ContactMe />} />
        </Switch>
    </Router>)
}

export default App