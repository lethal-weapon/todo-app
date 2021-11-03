import React from 'react';
import {useSelector} from 'react-redux';

export const StoreVisualizer = () => {
  const store = useSelector((state) => state);

  return (
    <div className="card bg-dark text-warning">
      <div className="card-body">
        <pre>
          {
            JSON.stringify(store, null, 2)
          }
        </pre>
      </div>
    </div>
  );
}
