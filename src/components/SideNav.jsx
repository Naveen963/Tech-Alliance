import styled from "styled-components";
import MainNav from "./MainNav"
import Logo from "./Logo";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { useState } from "react";

const StyledSideNav = styled.aside`
    position: relative;
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
    width: ${props => (props.isCollapsed ? "7rem" : "23rem")};
    `
const SideNavToggleIcon = styled.div`
        position: absolute;
        right:-1.2rem;
        
        font-size: 3rem;
        z-index: 1;
    `

const SideNav = () => {
    const [toggleSideNav, setToggleSideNav] = useState(true);
    return (
        <StyledSideNav isCollapsed={!toggleSideNav}>
            <SideNavToggleIcon onClick={() => setToggleSideNav(!toggleSideNav)}>
                {toggleSideNav ? <HiArrowRightCircle /> : <HiArrowLeftCircle />}
            </SideNavToggleIcon>
            <Logo toggleSideNav={toggleSideNav} />
            <MainNav toggleSideNav={toggleSideNav} />
        </StyledSideNav>
    )
}
export default SideNav;