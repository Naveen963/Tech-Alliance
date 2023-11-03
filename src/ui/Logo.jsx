import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 15rem;
  width: 15rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="tech-alliance-logo.jpg" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
