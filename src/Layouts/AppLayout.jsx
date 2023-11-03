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
    background-color: black;
`


const Main = styled.main.attrs(props => ({
    iscollapsed: props.iscollapsed
}))`
  background-color: var(--color-grey-50);
  
 
  padding:${props => props.iscollapsed == 'true' ? '8rem 2.8rem 4rem 25.4rem' : '8rem 2.8rem 4rem 10rem'};
  height: 100vh;
  grid-column:2/-1;/* Ensure the main section starts from the second column */
`;

const Container = styled.div`
    max-width: 100%;
  
    max-height: 100vh;
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`
const AppLayout = () => {
    const [isCollapsed, setCollapsed] = useState(true);
    return (
        <StyledAppLayout>
            <Header />
            <SideNav setCollapsed={setCollapsed} />
            <Main iscollapsed={isCollapsed.toString()}>
                <Container>
                    <Outlet />
                </Container>
            </Main>

        </StyledAppLayout>
    )
}

export default AppLayout