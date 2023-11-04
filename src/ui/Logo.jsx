import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 25rem;
  width: 25rem;
  border-radius: 50%;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="tech-alliance-logo.jpg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
