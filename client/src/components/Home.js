import styled from 'styled-components';
import Header from './Header'

const Home = () => {

    return  (
    <>
    <Header/>
    <Body>
        <p>Here i can add my profile pic</p>
        <p>my full name </p>
        <p>web developer</p>
        <p>all the images of what i can do like html etc</p>
    </Body>
    </>
)}


const Body = styled.div`
`

export default Home