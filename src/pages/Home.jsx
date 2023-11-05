import styled, { keyframes } from "styled-components";
import { useGetUser } from "../authentication/useGetUser";
import Spinner from "../ui/Spinner";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-left: 1rem;
  margin-top: -2rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0rem;
  }
`;

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const scaleInWithOpacity = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const Text = styled.div`
 animation: ${fadeInScale} 1s cubic-bezier(0.39, 0.575, 0.565, 1) forwards;
  line-break: auto;
  line-height: 2.3em;
  font-weight: 500;
  font-size: 1.2em;
  max-width: 80%;
`;

const Img = styled.img`
width: 40rem;
height: 40rem;
  border-radius: 50%;
  animation: ${scaleInWithOpacity} 1s cubic-bezier(0.39, 0.575, 0.565, 1)
    forwards;
`;
const Title = styled.p`
  font-size: 3.2rem;
  font-family:'Poppins';
  margin-bottom: 20px;
`;
const UserName = styled.span`
    color:var(--color-brand-800);
`

const TypedText = styled.h4`
    font-family: "Besley";
    margin-bottom: 1.8rem;
`

const Home = () => {
  const { user, isLoading } = useGetUser();
  const el = useRef(null);
  const { fullName: userName } = user?.user_metadata;

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Collaborate...", "Learn...", "Build...", "Grow..."],
      startDelay: 200,
      typeSpeed: 210,
      backDelay: 900,
      backSpeed: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,
      loopCount: 1,
    })
  })
  return (
    <>
      {isLoading ? <Spinner /> :
        (<Container>

          <Text>
            <Title>Welcome <UserName>{userName[0].toUpperCase() + userName.substring(1)},</UserName> </Title>
            <TypedText>Let's <span ref={el} style={{ color: '#f01027' }}></span></TypedText>
            At Tech Alliance, we firmly believe that the key to progress lies in the
            collective empowerment of our community. Through our comprehensive
            resources, diverse workshops, and networking opportunities, we endeavor
            to equip our members with the tools and insights necessary to excel in
            an ever-evolving technological landscape. Our mission is to nurture a
            supportive ecosystem that encourages the exchange of ideas, fosters
            creativity, and nurtures a spirit of innovation.
          </Text>
          <div>
            <Img src="tech-alliance-logo.jpg" />
          </div>
        </Container>)}
    </>
  );
};
export default Home;
