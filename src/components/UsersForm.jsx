import React, { useEffect } from "react";
import { put, post } from "./hook/Usability";
import { useForm } from "react-hook-form";
import "boxicons";

const defaultInfo = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: "",
};

const UsersForm = ({ getUsers, editUser, deselectEdit }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (editUser) {
      reset(editUser);
    } else {
      reset(defaultInfo);
    }
  }, [editUser, reset]);

  const onSubmit = (data) => {
    if (editUser) {
      put(`users/${editUser.id}/`, data).then(() => getUsers());
      deselectEdit();
    } else {
      post(`users/`, data).then(() => getUsers());
    }
    reset(defaultInfo);
  };
  return (
    <div className="user__form">
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h2>New user</h2>
        <div className="input__form">
          <div className="input__first-name">
            <label htmlFor="firstname">
              <box-icon type="solid" name="user"></box-icon>
            </label>
            <div className="input__name">
              <input
                type="text"
                {...register("first_name")}
                placeholder="first name"
                id="firstname"
              />
              <input
                type="text"
                {...register("last_name")}
                placeholder="last name"
                id="lastname"
              />
            </div>
          </div>
          <div className="input__email">
            <label htmlFor="email">
              <box-icon type="solid" name="envelope"></box-icon>
            </label>
            <input
              type="email"
              placeholder="email"
              {...register("email")}
              id="email"
            />
          </div>
          <div className="input__password">
            <label htmlFor="password">
              <box-icon type="solid" name="lock-alt"></box-icon>
            </label>
            <input
              type="password"
              placeholder="password"
              {...register("password")}
              id="password"
            />
          </div>
          <div className="input__birthday">
            <label htmlFor="birthday">
              <box-icon type="solid" name="cake"></box-icon>
            </label>
            <input type="date" id="birthday" {...register("birthday")} />
          </div>
          <div className="buttons__inputs">
            <button className="button-upload">upload</button>
            {editUser && (
              <button
                className="button__cancel"
                type={"button"}
                onClick={deselectEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default UsersForm;