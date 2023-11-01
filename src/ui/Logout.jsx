import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
// import { useLogout } from "./useLogout";
// import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  // const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon >
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
