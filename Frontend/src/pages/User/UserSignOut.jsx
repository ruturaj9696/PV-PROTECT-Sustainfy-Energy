import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../redux/user/UserSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function UserSignOut() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [showListingsError, setShowListingsError] = useState(false);
  const [userListings, setUserListings] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/api/auth/signoutuser");
      const data = await res.json();
      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate("/"); // Redirect to the home page after successful sign out using navigate
    } catch (error) {
      dispatch(deleteUserFailure(data.message));
    }
  };

  return (
    <>
      <div className="flex justify-between mt-5">
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">
          Sign out
        </span>
      </div>
    </>
  );
}
