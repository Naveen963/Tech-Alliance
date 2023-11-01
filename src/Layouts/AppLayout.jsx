import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideNav from "../components/SideNav"
import styled from "styled-components"

const StyledAppLayout = styled.div`
    display: grid;
    grid-template-columns:auto  1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
`
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

const AppLayout = () => {
    return (
        <StyledAppLayout>
            <Header />
            <SideNav />
            <Main>
                <Outlet />
            </Main>

        </StyledAppLayout>
    )
}

export default AppLayout