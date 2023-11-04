import styled from "styled-components";
import AddMemberForm from "../components/Form/AddMemberForm"
import Heading from "../ui/Heading"
import Logo from "../ui/Logo";
const RegisterLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-rows:auto;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  
  background-color: var(--color-grey-100);
`;

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;
`;

const Register = () => {
    return (
        <RegisterLayout>
            <StyledLogo>
                <Img src="tech-alliance-logo.jpg" alt="Logo" />
            </StyledLogo>
            <AddMemberForm />
        </RegisterLayout>
    )
}

export default Register