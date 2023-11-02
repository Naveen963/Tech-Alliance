import { useQuery } from '@tanstack/react-query'
import React from 'react'
import styled from 'styled-components'
import getCourseRegistrations from '../services/getCourseRegistrations'
import Spinner from '../ui/Spinner'
import RegistrationRow from './RegTable/RegistrationRow'
const Table = styled.div`
    border: 1px solid var(--color-grey-200);
    font-size: 1.4rem;
    background-color: var(--color-grey-0);
    border-radius: 7px;
    overflow: hidden;
`

const TableHeader = styled.header`
    display: grid;
    grid-template-columns: 0.2fr 1fr 2.2fr 1.3fr 1fr 1fr;
    column-gap: 2.4rem;
    align-items: center;
    background-color: var(--color-grey-50);
    border-bottom: 1px solid var(--color-grey-100);
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-weight: 600;
    color: var(--color-grey-600);
    padding: 1.6rem 2.4rem;
`

const RegistrationsTable = () => {
    const { isLoading, data: registrations, error } = useQuery({
        queryKey: ["registrations"],
        queryFn: getCourseRegistrations
    })

    return (
        <>
            {isLoading ? <Spinner /> :
                (
                    <Table role='table'>
                        <TableHeader>
                            <div></div>
                            <div>Registration No</div>
                            <div>Name</div>
                            <div>Branch</div>
                            <div>Section</div>
                            <div>Course</div>
                        </TableHeader>
                        {registrations.map((regCourse) => <RegistrationRow regCourse={regCourse} key={regCourse.id} />)}
                    </Table>
                )
            }
        </>

    )
}

export default RegistrationsTable