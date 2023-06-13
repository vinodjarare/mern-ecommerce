import { useState } from "react";
import MyOrders from "../layout/orders/MyOrders";
import { useSelector } from "react-redux";
import UpdatePassword from "../layout/UpdatePassword";
import UpdateProfile from "../layout/UpdateProfile";
const MyProfile = () => {
  const { user } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const openProfileModal = () => {
    setModalOpen(true);
  };

  const closeProfileModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <UpdatePassword isOpen={isOpen} closeModal={closeModal} />
      <UpdateProfile
        isModalOpen={isModalOpen}
        closeProfileModal={closeProfileModal}
      />
      <div className="min-h-[calc(100vh-64px)] max-w-[1024px] mx-auto">
        <div className="flex items-center justify-center my-10 w-full mx-auto border-b-2 border-gray-600 pb-6">
          <div className="flex items-center justify-between mb-10 w-full flex-col flex-1">
            <h1 className="text-3xl font-semibold">My Profile</h1>
            <img
              src={user.avatar.url}
              alt={user.name}
              className="rounded-full transition-all hover:scale-105 mb-4"
            />
            <button
              className="bg-primary-700 text-white px-4 py-1 rounded-full border-none transition-all delay-50 hover:bg-primary-900"
              onClick={openProfileModal}
            >
              Edit Profile
            </button>
          </div>
          <div className="flex flex-col items-start justify-center w-full flex-1">
            <div>
              <h4 className="text-xl font-semibold mt-3">Full Name</h4>
              <p className="text-gray-600 text-base">{user?.name}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mt-3">Email</h4>
              <p className="text-gray-600 text-base">{user?.email}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mt-3">Joined On</h4>
              <p className="text-gray-600 text-base">
                {String(user?.createdAt).substr(0, 10)}
              </p>
            </div>

            <div className="flex items-center space-x-6 w-full mt-6">
              <button
                type="button"
                className="py-1 px-3 w-fit rounded-full bg-primary-700 hover:bg-primary-900 text-white text-base"
              >
                My Orders
              </button>
              <button
                type="button"
                className="py-1 px-3 w-fit rounded-full bg-primary-700 hover:bg-primary-900 text-white text-base"
                onClick={openModal}
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
        <MyOrders />
      </div>
    </>
  );
};

export default MyProfile;
