import React from 'react'
import Row from '../../ui/Row'
import Spinner from '../../ui/Spinner'
import { useQuery } from '@tanstack/react-query'
import getTeamData from '../../services/getTeamData'
import TeamMember from './TeamMember'
import styled from 'styled-components'

const Team = styled.div`
  display: grid;
  margin-top: -3rem;
  grid-template-columns:  1fr 1fr ;
  column-gap: 2.4rem;
  align-items: center;
  padding: 0rem 2.4rem;
  padding-bottom: 2.4rem;
`
const TeamDashboard = () => {
    const { isLoading, data: team, error } = useQuery({
        queryKey: ["teamData"],
        queryFn: getTeamData
    })
    return (
        <>
            {isLoading ? <Spinner /> :
                (<Team>
                    {team.map(member => <TeamMember member={member} key={member.id} />)}
                </Team>
                )}
        </>

    )
}

export default TeamDashboard