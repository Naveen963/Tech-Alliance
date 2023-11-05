import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getActiveCourses } from '../../services/getCourses';
import Spinner from '../../ui/Spinner';
import registerCourse from '../../services/registerCourses';
import toast from 'react-hot-toast';
import getCourseRegistrations from '../../services/getCourseRegistrations';
import { useGetUser } from '../../authentication/useGetUser';
import { useGetUserDetails } from '../../authentication/useGetUserDetail';

const StyledActive = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: -2rem;
    overflow: hidden;
`
const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    padding: 1rem 0rem;
    margin-bottom: 4rem;
`

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  font-size: 1.3rem;
  font-weight: 100;
  color: var(--color-indigo-700);
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  outline: none;

  &:hover{
    background-color: var(--color-indigo-100);
  }
`;
// const activeCourses = [
//     {
//         title: 'JavaScript',
//         description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
//         imageUrl: 'tech-alliance-logo.jpg'
//     },
//     {
//         title: 'HTML/CSS',
//         description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
//         imageUrl: 'tech-alliance-logo.jpg'
//     },
//     {
//         title: 'React JS',
//         description: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries",
//         imageUrl: 'tech-alliance-logo.jpg'
//     },


// ]
const ActiveCourses = () => {
    const queryClient = useQueryClient();
    const [isRegister, setIsRegister] = useState({});
    const { user } = useGetUser();
    const { userData } = useGetUserDetails(user?.id);
    const { data: registrations } = useQuery({
        queryKey: ["registrations"],
        queryFn: getCourseRegistrations
    })
    const { isLoading, data: activeCourses, error } = useQuery({
        queryKey: ['activecourses'],
        queryFn: getActiveCourses
    })

    const { mutate, isLoading: isRegistered } = useMutation({
        mutationFn: (register) => registerCourse(register),
        onSuccess: (data, variables, context) => {
            const [course] = activeCourses.filter(c => c.id == variables.course_id)
            toast.success(`Successfully Enrolled into ${course.name}`)

            document.activeElement.blur();
            queryClient.invalidateQueries({ queryKey: ['registrations'] }) //making refetching the data

        },
        onError: (err) => {
            toast(err.message, {
                icon: '⚠️',
                style: {
                    border: '1px solid #d7c644',
                    padding: '16px',
                    color: '#1f1f1e',
                },
            });
        }
    })
    //649f3ff0-0d42-464a-a229-3456fb3537f9
    //1c66fc25-dcac-40e6-8ffe-d49da8f4a9ba
    const enrollStatus = (id) => {
        console.log(registrations, id, userData?.[0]?.id)
        const status = registrations?.filter(c => (c?.course_id == id) && (c?.user_id == userData?.[0]?.id)).map(c => c?.status)?.[0];
        console.log(status, "status")
        return status ? status : 'Enroll'
    }

    const enrollCourse = (id) => {
        const regPayload = {
            user_id: userData?.[0]?.id,
            course_id: id
        }
        mutate(regPayload);

    }
    return (
        <>
            {isLoading ? <Spinner /> :
                (<StyledActive>

                    <Heading >Active Courses</Heading>
                    <Grid container justifyContent="space-evenly"
                        alignItems="center" columnSpacing={{ xs: 1, sm: 1, md: 2 }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginRight: '4rem' }}>

                        {activeCourses && activeCourses.map((course, idx) => (
                            <Card key={idx} xs={2} sm={4} md={4} sx={{ maxWidth: 275, boxShadow: 2, marginBottom: '1rem', cursor: 'pointer' }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={course.imageUrl}
                                    title={course.name}
                                />
                                <CardContent sx={{ height: 140 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {course.name}

                                    </Typography>
                                    <Typography color="text.secondary">
                                        {course.description}
                                    </Typography>
                                </CardContent>

                                <CardActions style={{ marginTop: '0.8rem' }}>

                                    <ButtonIcon size="large"
                                        onClick={() => enrollCourse(course.id)}>
                                        {enrollStatus(course?.id)}
                                    </ButtonIcon>
                                    <ButtonIcon size="large">View Details</ButtonIcon>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </StyledActive>)
            }
        </>

    )
}

export default ActiveCourses