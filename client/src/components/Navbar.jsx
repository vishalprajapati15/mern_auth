import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets.js'
import { useContext } from 'react';
import { AppContent } from '../context/AppContext.jsx';
import axios from 'axios';
import { toast } from 'react-toastify';

const Navbar = () => {

  const navigate = useNavigate();

  const { userData, backendUrl, setUserData, setIsLoggedIn } = useContext(AppContent);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;

      const {data} = await axios.post(backendUrl+'/api/auth/send-verify-otp');
      if(data.success){
        navigate('/email-verify');
        toast.success(data.message);
      }
      else{
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + '/api/auth/logout');
      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);
      navigate('/');

    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  }

  return (
    <div className='w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 absolute top-0'>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="" className='w-28 sm:w-32 cursor-pointer' />
      {userData ?
        <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black cursor-pointer text-white relative group'>
          {userData.name[0].toUpperCase()}
          <div className='absolute hidden group-hover:block transition-all duration-300 top-0 right-0 z-10 text-black rounded pt-10'>
            <ul className='list-none m-0 p-2 bg-gray-100 text-sm '>
              {!userData.isAccountVerified && (
                <li 
                onClick={sendVerificationOtp}
                className='py-1 px-2 hover:bg-gray-200 transition-all duration-30 cursor-pointer'>Verify Email</li>
              )}
              <li
                onClick={logout}
                className='py-1 px-2 pr-10 hover:bg-gray-200 transition-all duration-30 cursor-pointer'>Logout</li>
            </ul>
          </div>
        </div>
        : <button
          onClick={() => navigate('/login')}
          className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 cursor-pointer text-gray-800 hover:bg-gray-100 transition-all duration-300'>
          Login
          <img src={assets.arrow_icon} alt="" />
        </button>
      }

    </div>
  )
}

export default Navbar