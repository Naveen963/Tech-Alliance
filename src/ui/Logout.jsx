import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useNavigate } from "react-router-dom";
// import { useLogout } from "./useLogout";
// import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  // const { logout, isLoading } = useLogout();
  const navigate = useNavigate();
  return (
    <ButtonIcon onClick={() => navigate("/register")} >
      <HiArrowRightOnRectangle />
    </ButtonIcon>
  );
}

export default Logout;
