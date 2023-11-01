import styled from "styled-components"

const StyledLogo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom:3rem;
  
`

const Img = styled.img`
    height: 10rem;
    width: 10rem;
    border-radius: 50%;
`
const Logo = () => {
    return (
        <StyledLogo>
            <Img src="/TechAlliance.jpg" alt="Logo" />
            <p>Tech Alliance</p>
        </StyledLogo>
    )
}

export default Logo;