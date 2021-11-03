import React from 'react';
import {useSelector} from 'react-redux';

export const Done = () => {
  const finishedItems = useSelector(
    (state) => (state.todos || []).filter(todo => todo.done)
  ) || [];

  return (
    <div className="row m-5 p-5 fs-4 text-black hvr-cursor-default">
      <div className="col-3"/>
      <div className="col-6">
        {
          finishedItems.length !== 0 &&
          <ol>
            {
              finishedItems.map(item =>
                <li key={item.id}
                    className="pt-4 w-25 text-decoration-line-through">
                  {item.text}
                </li>
              )
            }
          </ol>
        }
        {
          finishedItems.length === 0 &&
          <div>
            Nothing finished yet.
          </div>
        }
      </div>
      <div className="col-3"/>
    </div>
  );
}
