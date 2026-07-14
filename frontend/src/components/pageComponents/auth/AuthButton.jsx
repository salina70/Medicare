import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../feature/auth/authSlice";
import { Button } from "../../ui/atoms/Button";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
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

  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Button variant="outline" onClick={handleLoginCLick}>
          Login
        </Button>

        <Button onClick={handleSignupCLick}>Sign Up</Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">Hi, {user.name}</span>

      <Button variant="outline" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default AuthButton;
