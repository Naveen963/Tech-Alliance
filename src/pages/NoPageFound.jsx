import React from 'react';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import EditProfilePage from './EditProfilePage';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ebe6e6; /* Replace with your preferred color */
`;

const Message = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`;

const Emoji = styled.span`
    font-size: 4em;
`;

const NoPageFound = () => {
    const navigate = useNavigate();
    return (
        <Container>
            {/* <Message>
                <Heading as="h1" style={{ fontSize: '2.5em' }}>
                    hii i am vijay
                </Heading>
            </Message> */}
            <EditProfilePage/>
            {/* <Button onClick={() => navigate('/home')}>Back to Home</Button> */}
        </Container>
    );
};

export default NoPageFound;
