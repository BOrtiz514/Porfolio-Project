import Header from "./Header"
import styled from "styled-components"

const ContactMe = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    }

    return  (
    <Wrapper>
    <Header/>
    <FormContainer>
        <Form onSubmit={handleSubmit}>
        <h1>Contact Me</h1>
        <FormItem>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="What's your first name?"required />
        </FormItem>

        <FormItem>
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="What's your last name?" required />
        </FormItem>

        <FormItem>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="What's your email? I will reach out to you!" required />
        </FormItem>

        <FormItem>
            <label htmlFor="comments">Your Message:</label>
            <textarea id="comments" name="comments" rows="4" placeholder="Leave your message here." required></textarea>
        </FormItem>

        <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
        <p>**Form is under repair and is currently unavailable! Feel free to contact me by email: <span>brian514.om@gmail.com</span>**</p>
    </FormContainer>
    </Wrapper>
)}

const Wrapper = styled.div`
font-family: 'Poppins', sans-serif;
background-color: whitesmoke;
height: 100%;
`

const FormContainer = styled.div`
max-width: 500px;
margin: 0 auto;
margin-top: 20px;
border: 1px ;
text-align: center;
background-color: aliceblue;
border-radius: 7px;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

p{
    color: gray;
    text-decoration: underline;
    padding: 2px;
}

span{
    color: black;
    font-weight: bold;
}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const FormItem = styled.div`
margin-bottom: 20px;

label {
    font-weight: bold;
    margin-bottom: 5px;
}

input,
textarea {
    width: 90%;
    padding: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
}

`;

const SubmitButton = styled.button`
background-color: dodgerblue;
color: white;
padding: 10px;
margin: 10px;
border: none;
border-radius: 5px;
cursor: pointer;

    &:hover {
        background-color: deepskyblue;
    }
`;
export default ContactMe