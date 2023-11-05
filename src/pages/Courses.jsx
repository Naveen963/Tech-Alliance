import styled from "styled-components";
import ActiveCourses from "../components/HomePage/ActiveCourses";
import UpcomingCourses from "../components/HomePage/UpcomingCourses";

const StyledCourse = styled.div`
    display: flex;
    flex-direction: column;
    gap:4rem;
`

const Course = () => {
    return (
        <StyledCourse>
            <ActiveCourses />
            <UpcomingCourses />
        </StyledCourse>
    )
}

export default Course;