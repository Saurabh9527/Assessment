
import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/constant';

const useAnimeData = (search) => {
    const[anime , setAnime] = useState([]);

    const fetchData = async () => {
        const data = await fetch(`${API_URL}${search}&order_by=favorites&sort=desc`)
        const res = await data.json();
        const animeData =res.data;
        if(search === ''){
            setAnime(animeData)
        }else{
            const filteredData = animeData.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
            setAnime(filteredData)
        }   
    }

    useEffect(()=>{
        fetchData();
    }, [search]);
   
    return anime;
    
}

export default useAnimeData
