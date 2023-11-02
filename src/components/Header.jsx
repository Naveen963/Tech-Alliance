import styled from "styled-components"
import HeaderMenu from "./HeaderMenu"
import UserAvatar from "./UserAvatar"


const StyledHeader = styled.header`

    background-color: var(--color-grey-0);
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);
    display: flex;
    gap: 2.4rem;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`
const Header = () => {
    return (
        <StyledHeader>
            <UserAvatar />
            <HeaderMenu />
        </StyledHeader>
    )
}

export default Header