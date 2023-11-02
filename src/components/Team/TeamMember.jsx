import React from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'

const MemberBlock = styled.div`
  font:'Poppins';
  font-weight: 600;
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  margin-top:5rem;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: var(--color-grey-50);
  transition: all ease 0.5s;
  cursor: pointer;  
  &:hover{
       

       transform: scale(1.03);
         }
`
const Img = styled.img`
  object-fit: cover;
  height: 150px;
  width: 200px;
  
`;

const Details = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    gap:1rem;
   
    &:hover{
         background-color: #f3f5f8;
    }
`

const Detail = styled.p`
font-size: 1.6rem;
font-weight: 600;
color: var(--color-grey-600);
font-family: 'Sono';
`;

const TeamMember = ({ member }) => {
    const { name, role, email, imageURL } = member
    return (
        <MemberBlock>

            <Img src={imageURL ?? "user.jpeg"} />
            <Details>
                <Detail><i style={{ color: 'var(--color-grey-400)' }}>Name</i>: {name}</Detail>
                <Detail><i style={{ color: 'var(--color-grey-400)' }}>Role</i>: {role}</Detail>
                <Detail><i style={{ color: 'var(--color-grey-400)' }}>Email</i>: {email}</Detail>
                <Detail><i style={{ color: 'var(--color-grey-400)' }}>Contact</i>: 987654321</Detail>
            </Details>

        </MemberBlock>
    )
}

TeamMember.propTypes = {
    member: PropType.object.isRequired
}

export default TeamMember