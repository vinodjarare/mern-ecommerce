import React, { useState, Fragment, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import Input from "./inputs/Input";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { loadUser, updateUser } from "../../redux/action/userAction";

const UpdateProfile = ({ isModalOpen, closeProfileModal }) => {
  const dispatch = useDispatch();
  const { user, userUpdated } = useSelector((state) => state.user);
  const [selectedImage, setSelectedImage] = useState(user.avatar.url);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const onSubmit = async (data) => {
    const reader = new FileReader();

    if (data.avatar[0]) {
      reader.readAsDataURL(data.avatar[0]);
      reader.onload = () => {
        const updatedData = { ...data, avatar: reader.result };
        console.log(updatedData);
        dispatch(updateUser(updatedData));
        closeProfileModal();
      };
    } else {
      console.log({ ...data, avatar: "" });
      dispatch(updateUser({ ...data, avatar: "" }));
      closeProfileModal();
    }
  };

  useEffect(() => {
    dispatch(loadUser());
  }, [userUpdated]);

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeProfileModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Update Profile
                  </Dialog.Title>
                  <div className="mt-2">
                    {selectedImage && (
                      <img
                        src={selectedImage}
                        alt="Avatar Preview"
                        className="h-20 w-20 rounded-full mx-auto"
                      />
                    )}
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Input
                        register={register}
                        errors={errors}
                        required
                        id="name"
                        label="Name"
                      />

                      <Input
                        register={register}
                        errors={errors}
                        required
                        id="email"
                        label="Email address"
                        type="email"
                      />

                      <Input
                        register={register}
                        errors={errors}
                        id="avatar"
                        label="Avatar"
                        type="file"
                      />
                      <div className="mt-4 flex item-center justify-between">
                        <Button type="submit">Update</Button>
                        <Button type="button" onClick={closeProfileModal}>
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default UpdateProfile;
