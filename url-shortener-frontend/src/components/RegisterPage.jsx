import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import api from '../api/api';
import TextField from './TextField';

function RegisterPage() {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
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

  const registerHandler =  async (data) => {
    setLoader(true);
    try {
      await api.post(
        "/api/auth/public/register",
        data
      );

      reset();
      navigate("/login");
      toast.success("Registration Successful!");
    }
    catch(error) {
      console.log(error);
      toast.error("Registration Failed!");
    }
    finally {
      setLoader(false);
    }
  }
  return(
    <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(registerHandler)}
        className='shadow-custom rounded-md w-90 sm:w-[450px] px-4 sm:px-8 py-8' 
      >
        <h1 className='text-center font-serif font-bold text-btn-color text-2xl lg:text-3xl'>
          Register Here
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
            label="Email"
            required
            id="email"
            type="email"
            message="*Email is required"
            placeholder="Type you Email"
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
          {loader ? "Loading..." : "Register"}
        </button>

        <p className='text-gray-600 text-sm text-center mt-6'>
          Already have an Account?&nbsp;
          <Link 
            to='/login'
            className='text-btn-color underline font-semibold'
          >
            Login Here
          </Link> 
        </p>
      </form>
    </div>
  );
}

export default RegisterPage