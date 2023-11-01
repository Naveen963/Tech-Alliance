import styled from "styled-components";
import ActiveCourses from "../components/HomePage/ActiveCourses";
import UpcomingCourses from "../components/HomePage/UpcomingCourses";

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    gap:4rem;
`

const Home = () => {
    return (
        <StyledHome>
            <ActiveCourses />
            <UpcomingCourses />
        </StyledHome>
    )
}

export default Home;