
import React from 'react'
import { FaHeart } from "react-icons/fa";
import openDetails from '../../utils/openDetails.js'


const AnimeCard = ({ animeData }) => {
  return (
    <div className='mb-2 border border-gray-300 rounded-lg flex flex-col shadow-lg hover:shadow-xl'>
      <div 
      className='p-1 cursor-pointer'
      onClick={()=>openDetails(animeData.mal_id)}>
        <div>
          <img
            src={animeData?.images?.jpg?.image_url}
            alt={animeData.name}
            className='rounded-md h-64 w-full object-cover' />
        </div>
        <div className='mt-2 p-1'>
          <div>
            <h1 className='text-lg font-semibold font-sans pb-1'>{animeData.name}</h1>
          </div>
          <div className='pb-1'>
            <div className="flex flex-wrap gap-1">
              {animeData.nicknames.map((nickname, index) => (
                <div key={index} className="bg-gray-200 py-1 px-2 border border-gray-400  rounded-md text-sm">{nickname}</div>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div>
              <FaHeart
                className='text-red-600' />
            </div>
            <div>{animeData.favorites}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard
