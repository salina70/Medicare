import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../feature/auth/authSlice";
import { Button } from "../../ui/atoms/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AuthButton = () => {
  const [data, setData] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleLoginCLick = () => {
    navigate("/login");
  };
  const handleSignupCLick = () => {
    navigate("/signup");
  };

  // function dashboardLogic() {
  //   navigate("/dashboard/admin");
  // }

  return (
    <div className="flex items-center gap-3">
      {/* <span
        onClick={() => {
          dashboardLogic(data);
          console.log(data);
        }}
        className="text-sm text-white cursor-default"
      >
        Dashboard
      </span>

      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button> */}

      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={handleLoginCLick}>
          Login
        </Button>

        <Button onClick={handleSignupCLick}>Sign Up</Button>
      </div>
    </div>
  );
};

export default AuthButton;
