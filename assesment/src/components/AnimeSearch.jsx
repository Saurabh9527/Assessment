
import React, { useState } from 'react'
import SearchBox from '../components/SearchBox'
import AnimeCards from '../components/Anime/AnimeCards';

const AnimeSearch = () => {
  const [search, setSearch] = useState('');
  return (
    <div>
      <header>
        <SearchBox setSearch={setSearch} />
      </header>
      <main>
        <section>
        <AnimeCards search={search} />
        </section>
      </main>
    </div>
  )
}

export default AnimeSearch
