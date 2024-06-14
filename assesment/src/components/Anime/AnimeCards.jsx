
import React, { useEffect, useState } from 'react'
import AnimeCard from './AnimeCard'
import useAnimeData from '../../Hooks/useAnimeData'
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";
import ShimmerUI from '../ShimmerUI';


const AnimeCards = ({ search }) => {

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [noResults, setNoResults] = useState(false);
  const data = useAnimeData(search, page);

  useEffect(() => {
    setLoading(data.length === 0); 
    setNoResults(data.length === 0 && !loading);
  }, [data]);

  const selectedPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= Math.ceil(data.length / 15) && selectedPage !== page) {
      setPage(selectedPage);
    }
  }
  return (
    <div className='flex flex-col'>
       {loading && !noResults && <ShimmerUI />}

      <div className='grid md:grid-cols-4 gap-6 pl-4 pr-4 pb-4 pt-8 bg-gray-50'>
        {data.length > 0 && (
          data.slice(page * 15 - 15, page * 15).map((anime) => (
            <AnimeCard key={anime.mal_id} animeData={anime} />
          ))
        )}
      </div>

      {noResults && (
        <p className='text-center'>Total 0 matching anime characters found</p>
      )}

      {
        data.length > 0 && (
          <div className='flex justify-center items-center pb-4'>
            <button
              onClick={() => selectedPageHandler(page - 1)}
              className={page > 1 ? "" : "opacity-50"}>
              <IoArrowBackCircle className='w-10 h-10 text-gray-700' />
            </button>

            <span className='text-blue-950'>page no: {page}</span>

            <button
              onClick={() => selectedPageHandler(page + 1)}
              className={page < data.length / 15 ? "" : "opacity-50"}>
              <IoArrowForwardCircle className='w-10 h-10 text-gray-700' />
            </button>

          </div>
        )}
    </div>
  )
}

export default AnimeCards
