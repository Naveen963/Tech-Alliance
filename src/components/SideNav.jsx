import styled from "styled-components";
import MainNav from "./MainNav"
import Logo from "./Logo";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { useState } from "react";

const StyledSideNav = styled.aside.attrs(props => ({
    iscollapsed: props.iscollapsed
}))`
   position: fixed;
    top: 6.1rem;
    left: 0;
    bottom: 0;
    
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1/-1;
    width: ${props => (props.iscollapsed == 'true' ? "7rem" : "23rem")}; //props.iscollapsed is also same to avoid warinngs '$' added
    `
const SideNavToggleIcon = styled.div`
        position: absolute;
        right:-1.2rem;
        
        font-size: 3rem;
        z-index: 1;
    `

const SideNav = ({ setCollapsed }) => {
    const [toggleSideNav, setToggleSideNav] = useState(true);
    const handleToggle = () => {
        setToggleSideNav(!toggleSideNav);
        setCollapsed(!toggleSideNav);
    }
    return (
        <StyledSideNav iscollapsed={(!toggleSideNav).toString()}>
            <SideNavToggleIcon onClick={handleToggle}>
                {toggleSideNav ? <HiArrowRightCircle /> : <HiArrowLeftCircle />}
            </SideNavToggleIcon>
            <Logo toggleSideNav={toggleSideNav} />
            <MainNav toggleSideNav={toggleSideNav} />
        </StyledSideNav>
    )
}



export default SideNav;