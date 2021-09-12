import { useState } from 'react';


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
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

export default SearchBar;
