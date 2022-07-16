import React from 'react';
import { put } from './hook/Services';
import { useForm } from "react-hook-form"
import { useEffect } from 'react';

const defaultInfo = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  birthday: ""
};

const UsersForm = ({ getUsers, editUser, deselectEdit }) => {

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (editUser) {
      reset(
        editUser
      )
    } else reset(
      defaultInfo
    )
  }, [editUser, reset])

  const onSubmit = (data, event) => {
    if (editUser) {
      put(
        `users/${editUser.id}/`, data
      ).then(() => getUsers())
    }
    reset(defaultInfo)
  }
  return (
    <div className='user__form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>New user</h2>
        <div className='input__form'>
          <label htmlFor="firstname">First Name: </label>
          <div className='input__name'>
            <input
              type="text"
              {...register("first_name")}
              placeholder='first name'
              id='firstname' />
            <input type="text"
              {...register("last_name")}
              placeholder='last name'
              id='lastname' />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='email'
              {...register("email")}
              id='email' />
          </div>
          <div className='input__password'>
            <label htmlFor="password">password</label>
            <input
              type="password"
              placeholder='password'
              {...register('password')}
              id='password' />
          </div>
          <div className='input__birthday'>
            <label htmlFor="birthday">birthday</label>
            <input
              type="date"
              {...register('birthday')}
              id='birthday' />
          </div>
          <button>Upload</button>
        </div>
      </form>
    </div>
  );

};
export default UsersForm;