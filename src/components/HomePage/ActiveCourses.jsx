import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { getActiveCourses } from '../../services/getCourses';
import Spinner from '../../ui/Spinner';

const StyledActive = styled.div`
    display: flex;
    flex-direction: column;
`
const Heading = styled.h3`
    font-size: 2rem;
    font-weight: 300;
    padding: 1rem 0rem;
    margin-bottom: 4rem;
`

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
    const { isLoading, data: activeCourses, error } = useQuery({
        queryKey: ['activecourses'],
        queryFn: getActiveCourses
    })
    return (
        <>
            {isLoading ? <Spinner /> :
                (<StyledActive>

                    <Heading>Active Courses</Heading>
                    <Grid container justifyContent="space-evenly"
                        alignItems="center" columnSpacing={{ xs: 1, sm: 1, md: 2 }} spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ marginRight: '4rem' }}>

                        {activeCourses && activeCourses.map((course, idx) => (
                            <Card key={idx} item xs={2} sm={4} md={4} sx={{ maxWidth: 250, boxShadow: 2, marginBottom: '1rem', cursor: 'pointer' }}>
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
                                <CardActions>
                                    <Button size="small">Enroll</Button>
                                    <Button size="small">View Details</Button>
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