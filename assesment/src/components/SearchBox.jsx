import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { BACK_IMG } from '../utils/constant';

const SearchBox = ({ setSearch }) => {
  let timeoutId; 

  const handleInputSearch = (e) => {
    const value = e.target.value;
    
    clearTimeout(timeoutId); 
    timeoutId = setTimeout(() => {
      setSearch(value); 
    }, 400); 
  };

  return (
    <div className='pt-12 pb-12 flex justify-center items-center pl-2 pr-2'
    style={{ backgroundImage: `url(${BACK_IMG})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='relative w-full max-w-lg'>
        <span className='absolute inset-y-0 left-0 pl-3 flex items-center cursor-pointer'>
          <CiSearch className='h-6 w-6 text-gray-900' /> 
        </span>
        <input
          type='text'
          placeholder='Search here....'
          className='border border-gray-600 rounded-full outline-none shadow-md px-10  py-3 w-full pl-10'
          onChange={handleInputSearch}
        />
      </div>
    </div>
  );
};

export default SearchBox;
