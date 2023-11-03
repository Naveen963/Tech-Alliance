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
  background-color: var(--color-grey-50);
 // background-color: red;
 
 @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 480px) {
    padding: 0rem 1.2rem;
  }

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