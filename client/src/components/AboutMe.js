import Header from "./Header"
import styled from "styled-components"

const AboutMe = () => {

    return  (
    <>
    <Header/>
    <Wrapper>
    <h1>About Me </h1>
    <p> My name is Brian Ortiz-Muscia. 
        I live in Montreal in a household full of life! 
        Surrounded by 9 animals and 7 siblings, this overwhelming atmosphere for most, rarely gets in the way of my focus as I am used to it.
        As a student in Concordia University studying Full Stack Web Development, retaining my focus and patience is very important!
        Technology is one of my many passions, and I've used this as fuel to constantly improve on my capabilities as a Web Developer.
        I cannot be more happy knowing that for the many years to come, I will be perfecting my coding craft. 
        Other passions include reptile keeping (hence the background), gaming, adventuring, fashion, playing guitar, singing, the list goes on!
        </p>
    </Wrapper>
    </>
)}

const Wrapper = styled.div`
font-family: 'Poppins', sans-serif;
background: url('/david-clode-txV6oyMwiaw-unsplash.jpg') center/cover no-repeat;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: whitesmoke;

h1{
    font-size: 3em;
    border: 1px solid black;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}

p{
    border: 1px solid black;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    text-align: center;
}
`


export default AboutMe