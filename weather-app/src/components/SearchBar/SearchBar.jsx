import { useState } from 'react';
import css from './searchBar.module.scss';

function SearchBar({updateLocation}) {
  const [value, setValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    //addTodo(value);
    updateLocation(value)
    setValue('');
  };


  return(
    <form className={css.searchbar} onSubmit={handleSubmit}>
      <input 
        type='text'
        className={css.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

export default SearchBar;
