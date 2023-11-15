import styled from 'styled-components';
import Header from './Header'
const Home = () => {

    return  (
    <>
    <Header/>
    <Body>
        <HomePagePicture src='/IMG_20230601_165715_488.jpg'/>
        <Text>
        <h1>Brian Ortiz-Muscia</h1>
        <p>Full Stack Web Developer</p>
        <p className='Skills'>Skilled in HTML, CSS, JavaScript, Node.js, React</p>
        </Text>
    </Body>
    </>
)}


const Body = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
background-color: whitesmoke;
box-sizing: border-box;
margin: 0;
min-height: 100vh;
background-color: whitesmoke;
`
const HomePagePicture = styled.img`
max-height: 70vh;
margin-top: 80px;
margin-left: 30px;
border: 1px;
border-radius: 20em;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
`

const Text = styled.div`
margin-left: 10vw;
height: 20vw;
margin-top: 15vw;
text-align: center;
padding: 10px;


h1{
    font-size: 3em;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    padding: 30px;
    border-radius: 10px;
    background-color: aliceblue;
}

p{
    font-weight: bold;
    font-size: 1.2em;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 10px;
    background-color: aliceblue;
}
`
export default Home