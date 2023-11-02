import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideNav from "../components/SideNav"
import styled from "styled-components"
import { useState } from "react"
const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns:auto  1fr;
    grid-template-rows: auto  1fr;
    height: 100vh;
`


const Main = styled.main`
  background-color: var(--color-grey-50);
  
  padding:${props => props.isCollapsed ? '8rem 2.8rem 4rem 25.4rem' : '8rem 2.8rem 4rem 10rem'};
 
  grid-column:2/-1;/* Ensure the main section starts from the second column */
`;

const AppLayout = () => {
    const [isCollapsed, setCollapsed] = useState(true);
    return (
        <StyledAppLayout>
            <Header />
            <SideNav setCollapsed={setCollapsed} />
            <Main isCollapsed={isCollapsed}>
                <Outlet />
            </Main>

        </StyledAppLayout>
    )
}

export default AppLayout