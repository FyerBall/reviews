import React, { useState } from 'react';
import { reviews } from '../data';
function List() {
  const [data, setData] = useState(reviews);

  return (
    <>
      <div className='list'>
        {data.map((item) => {
          const { id, name, review, img } = item;
          return (
            <div key={id} className='card'>
              <img src={img} alt={name} />
              <h1 key={id}>name is {name}</h1>
              <p>{review}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => setData([])}>Clear All</button>
    </>
  );
}

export default List;
