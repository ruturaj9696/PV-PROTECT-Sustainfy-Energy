import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  deleteAdminFailure,
  deleteAdminSuccess,
  signOutAdminStart,
} from "../redux/user/AdminSlice";
import { useDispatch } from "react-redux";

export default function AdminSignout() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignOut = async () => {
    try {
      dispatch(signOutAdminStart());
      const res = await fetch("/api/auth/signoutadmin");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteAdminFailure(data.message));
        return;
      }
      dispatch(deleteAdminSuccess(data));
      navigate("/"); // Redirect to the home page after successful sign out using navigate
    } catch (error) {
      dispatch(deleteAdminFailure(data.message));
    }
  };

  return (
    <>
      <div className="flex justify-between mt-5">
        <span onClick={handleSignOut} className=" text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
    </>
  );
}
