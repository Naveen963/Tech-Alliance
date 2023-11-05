import React from 'react'
import styled from 'styled-components'
import PropType from 'prop-types'
import { BsLinkedin } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineGithub } from 'react-icons/ai'
const MemberBlock = styled.div`
  font:'Poppins';
  font-weight: 600;
  display: grid;
  grid-template-columns: 1fr 2.2fr 0.2fr;
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
         @media (max-width: 990px) {
    grid-template-columns: 1fr;
  }
`
const Img = styled.img`
   object-fit: cover;
  height: 20rem; /* Adjust this height as needed */
  width: 100%;
  max-width: 100%;
  /* @media (max-width:768px) {
    height: 100%;
    object-fit: contain;
  } */
  @media (max-width:850px) {
    height: 100%;
    object-fit: contain;
  }
 
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
    @media (max-width: 990px) {
    padding: 1rem 2rem;
  }
 

`

const Detail = styled.p`
font-size: 1.6rem;
font-weight: 600;
color: var(--color-grey-600);
font-family: 'Sono';
`;


const TeamMember = ({ member }) => {
  const { name, role, email, imageURL, phoneNo } = member

  const socailLinkHandler = (url) => {
    window.open(url);
  }
  return (
    <MemberBlock>

      <Img src={imageURL ?? "default-user.jpg"} />
      <Details>
        <Detail><i style={{ color: 'var(--color-grey-400)' }}>Name</i>: {name}</Detail>
        <Detail><i style={{ color: 'var(--color-grey-400)' }}>Role</i>: {role}</Detail>
        <Detail><i style={{ color: 'var(--color-grey-400)' }}>Email</i>: {email}</Detail>
        <Detail><i style={{ color: 'var(--color-grey-400)' }}>Contact</i>: {phoneNo}</Detail>
      </Details>
      <Details style={{ alignItems: 'center' }} >

        <BsLinkedin color='#0A66C2' size={30} onClick={() => socailLinkHandler(member?.linkedInURL)} />
        <AiOutlineInstagram color='#E4405F' size={40} onClick={() => socailLinkHandler(member?.instagramURL)} />
        <AiOutlineGithub size={40} onClick={() => socailLinkHandler(member?.githubURL)} />
      </Details>
    </MemberBlock >
  )
}

TeamMember.propTypes = {
  member: PropType.object.isRequired
}

export default TeamMember