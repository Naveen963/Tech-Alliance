import styled, { css } from "styled-components"
import PropTypes from 'prop-types'
const StyledLogo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: ${props => props.toggle ? '4rem' : "auto"};
    margin-bottom:3rem;
    margin-left:-1.6rem ;
`

const Img = styled.img`
    ${props => props.toggle ?
        css`
         height: 10rem;
    width: 10rem;
    border-radius: 50%; 
     `: css`
     height: 4rem;
    width: 4rem;
    border-radius: 50%;
     `
    }
    aspect-ratio:1;
    object-fit: cover;
  object-position: center;
`
const Logo = ({ toggleSideNav }) => {
    return (
        <StyledLogo >
            <Img src="/tech-alliance-logo.jpg" alt="Logo" toggle={toggleSideNav} />
            {toggleSideNav && <p>Tech Alliance</p>}
        </StyledLogo>
    )
}

Logo.propTypes = {
    toggleSideNav: PropTypes.bool.isRequired,
};

export default Logo;