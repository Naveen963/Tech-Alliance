import styled from 'styled-components';
import PropTypes from 'prop-types'
// v1
const TableRow = styled.div`
  display: grid;
  grid-template-columns:  0.2fr 1fr 2.2fr 1.3fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
  &:hover{
    background: linear-gradient(90deg,
      rgba(225, 225, 232, 1) 0%,
      #f5fbfc 100%);
  }
  cursor: pointer;
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  /* transform: scale(1.66666) translateX(-2px); */
  transform: scale(1.5) translateX(-7px);
`;

const UserName = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;
const RegistrationNo = styled.div`
 
  font-weight: 600;
  color: var(--color-brand-800);
  font-family: 'Sono';
`;

const RowData = styled.div`
  font-family: 'Sono';
  font-weight: 600;
  font-size: 1.5rem;
`;


const Course = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  background-color:${props => props.name == 'R' ?
    '#61DBFB' : props.name == 'J' ? 'yellow' : '#F06529'
  };
  width: fit-content;
  padding: 4px;
  border-radius: 8px;
 
`;

function RegistrationRow({ regCourse }) {

  const { usersData: user, courses: course } = regCourse;
  return (
    <TableRow role='row'>
      <Img src={user?.image || 'default-user.jpg'} />
      <RegistrationNo>{user?.reg_no}</RegistrationNo>
      <UserName>{user?.name}</UserName>
      <RowData>{user?.branch}</RowData>
      <RowData>{user?.section}</RowData>
      <Course name={course?.name[0]}>{course?.name}</Course>
    </TableRow>
  );
}

export default RegistrationRow;

RegistrationRow.propTypes = {
  regCourse: PropTypes.object.isRequired
}