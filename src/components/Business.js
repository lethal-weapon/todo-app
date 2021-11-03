import React from 'react';
import {Todos} from './Todos';
import {TodoEntry} from './TodoEntry';

export const Business = () => {
  return (
    <div className="row m-5 p-5">
      <div className="col-5">
        <TodoEntry/>
      </div>
      <div className="col-7">
        <Todos/>
      </div>
    </div>
  );
}
