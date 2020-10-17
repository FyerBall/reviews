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
              <h3 className='name' key={id}>
                {name}
              </h3>
              <p>{review}</p>
            </div>
          );
        })}
      </div>
      {data.length >= 1 ? (
        <button className='btn' onClick={() => setData([])}>
          Clear All
        </button>
      ) : (
        <p className='noReviews'>No reviews yet</p>
      )}
    </>
  );
}

export default List;
