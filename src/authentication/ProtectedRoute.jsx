import styled from "styled-components";
import Spinner from "../ui/Spinner";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useGetUser } from "./useGetUser";


const Container = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useGetUser();


    useEffect(function () {
        if (!isAuthenticated && !isLoading) {
            navigate('/login')
        }
    }, [isAuthenticated, isLoading, navigate]);

    if (isLoading)
        return (
            <Container>
                <Spinner />
            </Container>
        )
    if (isAuthenticated) return children;
}

export default ProtectedRoute