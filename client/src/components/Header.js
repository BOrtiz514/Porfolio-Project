import styled from "styled-components";
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <StyledHeader>
    <p className='MyName'>Brian Ortiz-Muscia</p>
    <Link to="/" className='Homepage'>Homepage!</Link>
    <NavBarButtons>
    <Link to="/about" className='navBarButtons'>About Me</Link>
    <Link to="/projects" className='navBarButtons'>Projects</Link>
    <Link to="/contact" className='navBarButtons'>Contact Me</Link>
    </NavBarButtons>
    </StyledHeader>
    )
}

const StyledHeader = styled.div`
margin: 0;
border:1px solid black;
background-color: aliceblue;


.MyName{
margin-left:16px;
margin-bottom: 5px;
font-weight: bold;
font-size: 1.2em;
}

.Homepage{
margin-left:16px;
font-style: italic;
border: 1px solid black;
background-color: dodgerblue;
color: white;
border: 1px solid black;
border-radius: 5px;
font-size: 0.8em;
border-color: black;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease-in-out;
cursor: pointer;
padding: 5px;
text-decoration: none;
&:hover{
        transform: scale(1.5);
        background-color: deepskyblue;
        color: floralwhite;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
}
`
const NavBarButtons = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 16px;
margin-bottom: 16px;

.navBarButtons{
    margin-right: 10px;
    margin-left: 10px;
    background-color: dodgerblue;
    color: white;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 0.8em;
    border-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 5px;
    text-decoration: none;

    &:hover{
        transform: scale(1.5);
        background-color: deepskyblue;
        color: floralwhite;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
}
`
export default Header