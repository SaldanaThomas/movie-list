import React from 'react';

const Add = (data) => {

  return (
    <form>
    <input id='add' placeholder='Add movie title here' type='text'></input>
    <button className='addButton' onClick={data.add}>Add</button>
    </form>

  );
};

export default Add;