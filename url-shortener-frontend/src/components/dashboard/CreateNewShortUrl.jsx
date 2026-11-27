import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoClose } from "react-icons/io5";
import Tooltip from '@mui/material/Tooltip';
import TextField from '../TextField';
import api from '../../api/api';
import { useStoreContext } from '../../contextApi/ContextApi';
import toast from 'react-hot-toast';

const CreateNewShortUrl = ({ setOpen, refetch }) => {
  const { token } = useStoreContext();
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (data) => {
    setLoader(true);
    try {
      const { data: res } = await api.post(
      "/api/urls/shorten", 
      data, 
      {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + token,
      }
    });
    const shortUrl = import.meta.env.VITE_REACT_FRONT_END_URL + '/s/' + `${res.shortUrl}`;
    navigator.clipboard.writeText(shortUrl).then(() => {
      toast.success("Short URL copied to your clipboard!", {
        position: 'bottom-center',
        className: 'mb-5',
        duration: 3000,
      });
    });
  // await refetch();
  reset();
  setOpen(false);
    }
    catch (error) {
      console.log(error);
      toast.error("Short URL Creation Failed!")
    }
    finally {
      setLoader(false);
    }
  };
  return (
    <div className='flex justify-center items-center bg-white rounded-md'>
      <form
        className='px-10 py-9 shadow-custom'
        onSubmit={handleSubmit(createShortUrlHandler)}>
        <h1 className='font-bold text-center text-2xl'>
          Create New Short URL
        </h1>
        <hr className='text-slate-300 mt-1 mb-3 w-[350px]' />
        <div>
          <TextField 
            label="Enter URL"
            id="originalUrl"
            type="text"
            required
            message="*URL Required"
            placeholder="https://example.com"
            register={register}
            errors={errors}
          />
        </div>
        <button
          disabled={loader} 
          type='submit'
          className='bg-custom-gradient mt-4 text-white px-10 py-2 rounded-md'>
            {loader ? "Loading.." : "Create"}
        </button>
        <Tooltip title="Close">
          <button
            disabled={loader}
            onClick={() => setOpen(false)}
            className='absolute top-59 right-140'>
            <IoClose className='text-2xl text-slate-800 font-light' />
          </button>
        </Tooltip>
      </form>
    </div>
  )
}

export default CreateNewShortUrl