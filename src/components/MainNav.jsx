import PropTypes from 'prop-types';
import React from 'react';
import { BsWindowStack, BsTrophy } from "react-icons/bs";
import {
    HiOutlineHome,
    HiOutlineUsers
} from "react-icons/hi2";
import { PiNotePencilLight } from 'react-icons/pi'
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavList = styled.ul.attrs(props => ({
    iscollapsed: props.iscollapsed,
    ...props
}))`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    overflow: hidden;
    margin-left: ${props => (props.iscollapsed == "true" ? "auto" : "-3rem")};

`

const StyledNavLink = styled(NavLink)`
  overflow: hidden;
    &:link,
    &:visited{
        display: flex;
        align-items: center;
        gap: 1.2rem;
        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-grey-800);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }
    
  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
 
  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg 
 {
    color: var(--color-brand-600);
  }

`
const StyledMainNav = styled.nav.attrs(props => ({
    iscollapsed: props.iscollapsed
}))`
    width: ${props => (props.iscollapsed == 'true' ? "auto" : "4rem")};
    
`
const MainNav = ({ toggleSideNav }) => {

    return (
        <StyledMainNav iscollapsed={toggleSideNav.toString()} >
            <NavList >
                <li>
                    <StyledNavLink to="/home">
                        <HiOutlineHome />
                        {toggleSideNav && <span>Home</span>}
                    </StyledNavLink>
                </li>
                {/* <li>
                    <StyledNavLink to="/home">
                        <BsWindowStack />
                        {toggleSideNav && <span>My Courses</span>}
                    </StyledNavLink>
                </li> */}
                <li>
                    <StyledNavLink to="/registrations">
                        <PiNotePencilLight />
                        {toggleSideNav && <span>Registrations</span>}
                    </StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/dashboard">
                        <MdOutlineDashboard />
                        {toggleSideNav && <span>DashBoard</span>}
                    </StyledNavLink>
                </li>
                {/* <li>
                    <StyledNavLink to="/home">
                        <BsTrophy />
                        {toggleSideNav && <span>Hackathons</span>}
                    </StyledNavLink>
                </li> */}
                <li>
                    <StyledNavLink to="/techallianceteam">
                        <HiOutlineUsers />
                        {toggleSideNav && <span>Team TA</span>}
                    </StyledNavLink>
                </li>
            </NavList>
        </StyledMainNav>
    );
}

MainNav.propTypes = {
    toggleSideNav: PropTypes.bool.isRequired,
};
export default MainNav