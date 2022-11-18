import React from 'react';

const Add = ({add}) => {

  return (
    <form>
    <input id='addField' placeholder='Add movie title here' type='text'></input>
    <button className='addButton' onClick={add}>Add</button>
    </form>

  );
};

export default Add;