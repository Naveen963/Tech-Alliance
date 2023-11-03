import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import styled from 'styled-components';
import { getUpcomingCourses } from '../../services/getCourses';
import Spinner from '../../ui/Spinner';

const StyledActive = styled.div`
    display: flex;
    flex-direction: column;
    cursor: not-allowed;
    margin-left: -2rem;
`
const Heading = styled.h1`
    font-size: 2.5rem;
    font-weight: 300;
    padding: 1rem 0rem;
    margin-bottom: 4rem;
`

const Loading = styled.div`
display: flex;
justify-content: center;
 font-size: 3rem;
 font-weight: 500;
`

const ButtonIcon = styled.button`
  background: none;
  border: none;
  cursor: not-allowed;
  padding: 0.6rem;
  font-size: 1.3rem;
  font-weight: 100;
 color: var(--color-indigo-700);
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-indigo-100);
  }
`;
const UpComingCourses = () => {
    const { isLoading, data: upComingCourses, error } = useQuery({
        queryKey: ['upcomingcourses'],
        queryFn: getUpcomingCourses
    })
    return (
        <>
            {isLoading ? <Loading>Loading....</Loading>
                :
                <StyledActive>
                    <Heading>UpComing Courses</Heading>
                    <Grid container justifyContent="space-evenly"
                        alignItems="center" columnSpacing={{ xs: 1, sm: 1, md: 2 }} rowSpacing={{ xs: 2, sm: 1, md: 2 }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginRight: '4rem' }}>

                        {upComingCourses && upComingCourses.map((course, idx) => (

                            <Card key={idx} item xs={2} sm={4} md={4} sx={{ maxWidth: 250, boxShadow: 2, marginBottom: '1rem' }}>
                                <CardMedia
                                    sx={{ height: 140 }}

                                    style={{ filter: " blur(5px) opacity(80%)" }}
                                    image={course.imageUrl}
                                    title={course.title}
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
                                    <ButtonIcon size="large" disabled>Enroll</ButtonIcon>
                                    <ButtonIcon size="large" disabled>View Details</ButtonIcon>
                                </CardActions>
                            </Card>
                        ))}

                    </Grid>
                </StyledActive>
            }
        </>
    )
}

export default UpComingCourses