import { useState } from 'react'

function FilterMovies ({ filterMovies }) {
  const [firstLetter, setFirstLetter] = useState('ALL');

  const handleSelect = (event) => {
    setFirstLetter(event.target.value);
    filterMovies(event.target.value);
  }

  return (
    <div className='FilterMovies'>
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value='ALL'>ALL</option>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
        <option value='E'>E</option>
      </select>
    </div>
  )
}

export default FilterMovies;