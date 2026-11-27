import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../api/api';
import TextField from './TextField';
import {  useStoreContext } from '../contextApi/ContextApi';

function LoginPage() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const { setToken } = useStoreContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: ""
    },
    mode: "onTouched"
  });

  const loginHandler =  async (data) => {
    setLoader(true);
    try {
      const { data: response } = await api.post(
        "/api/auth/public/login",
        data
      );
      console.log("Full response:", response);
      console.log("response.token:", response.token);
      console.log("Type:", typeof response.token);
      localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
      setToken(response.token);
      toast.success("Login Successful!");
      reset();
      navigate("/dashboard");
    }
    catch(error) {
      console.log(error);
      toast.error("Login Failed!");
    }
    finally {
      setLoader(false);
    }
  }
  return(
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(loginHandler)}
        className='shadow-custom rounded-md w-90 sm:w-[450px] px-4 sm:px-8 py-8' 
      >
        <h1 className='text-center font-serif font-bold text-btn-color text-2xl lg:text-3xl'>
          Login Here
        </h1>
        <hr className='mt-2 mb-5 text-gray-300' />
        <div className='flex flex-col gap-3'>
          <TextField
            label="Username"
            required
            id="username"
            type="text"
            message="*Username is required"
            placeholder="Type your Username"
            register={register}
            errors={errors}
          />
          <TextField
            label="Password"
            required
            id="password"
            type="password"
            message="*Password is required"
            placeholder="Type your Password"
            register={register}
            min={6}
            errors={errors}
          />
        </div>
        <button 
          disabled={loader}
          type='submit'
          className='my-3 bg-custom-gradient w-full rounded-xs text-white py-2 font-semibold hover:text-slate-400 transition-colors duration-100 cursor-pointer'
        >
          {loader ? "Loading..." : "Login"}
        </button>

        <p className='text-gray-600 text-sm text-center mt-6'>
          Don't have an Account?&nbsp;
          <Link 
            to='/register'
            className='text-btn-color underline font-semibold'
          >
            Sign up
          </Link> 
        </p>
      </form>
    </div>
  );
}

export default LoginPage