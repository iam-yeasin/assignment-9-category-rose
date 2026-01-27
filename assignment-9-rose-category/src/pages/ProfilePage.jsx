import React, { useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { updateProfile, onAuthStateChanged } from "firebase/auth";
import { toast } from "react-hot-toast";
import { Navigate, useLocation } from "react-router";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Listens for Firebase auth changes and updates user state
    return () => unsubscribe();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const form = e.target;
    const updateName = form.name.value;
    const updatePhoto = form.photo.value;

    try {
      // Update profile
      await updateProfile(auth.currentUser, {
        displayName: updateName,
        photoURL: updatePhoto,
      });

      // reload user
      await auth.currentUser.reload();

      toast.success("Profile updated successfully");
      window.location.reload();

      // update avatar
      setUser({ ...auth.currentUser });
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (loading) {
    return (
      <span className="loading loading-spinner text-black mx-auto block"></span>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login" />;
  }

  return (
    <div className="max-w-md mx-auto mt-10 mb-34">
      <h1 className="text-2xl font-semibold mb-5 text-center">My Profile</h1>

      {/* Avatar */}
      <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-5 bg-gray-100 cursor-pointer">
        <img
          alt="User avatar"
          src={
            user?.photoURL ||
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          }
          className="w-full h-full object-cover"
        />
      </div>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <input
          name="name"
          type="text"
          className="input input-bordered w-full"
          placeholder="Your name"
          defaultValue={user.displayName || ""}
        />

        <input
          name="photo"
          type="text"
          className="input input-bordered w-full"
          placeholder="Photo URL"
          defaultValue={user.photoURL || ""}
        />

        <button className="btn btn-neutral w-full">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;
