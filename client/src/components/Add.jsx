import React from 'react';

const Add = (data) => {

  return (
    <form>
    <input id='addField' placeholder='Add movie title here' type='text'></input>
    <button className='addButton' onClick={data.add}>Add</button>
    </form>

  );
};

export default Add;