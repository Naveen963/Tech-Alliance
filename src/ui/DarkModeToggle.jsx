import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useState } from "react";

function DarkModeToggle() {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ButtonIcon>
      {isDarkMode ? <HiOutlineMoon /> : <HiOutlineSun />}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
