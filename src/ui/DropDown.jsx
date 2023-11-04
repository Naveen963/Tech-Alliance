import React, { useState } from 'react';
import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: #ffffff;
  color: #333333;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #333333;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const DropdownIcon = styled.div`
  margin-left: 5px;
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 1;
  padding:20px;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const options = ['React', 'HTML/CSS', 'JavaScript']; // options array

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <DropdownContainer>
            <DropdownButton onClick={toggleDropdown}>
                Select Topic
                <DropdownIcon>
                    <FiChevronDown />
                </DropdownIcon>
            </DropdownButton>
            <DropdownContent isOpen={isOpen}>
                {options.map((option, index) => (
                    <DropdownItem key={index}>{option}</DropdownItem>
                ))}
            </DropdownContent>
        </DropdownContainer>
    );
};

export default Dropdown;
