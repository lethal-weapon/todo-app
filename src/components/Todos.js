import React from 'react';
import {useSelector} from 'react-redux';
import {Todo} from './Todo';

export const Todos = () => {
  const todos = useSelector((state) => state.todos) || [];

  return (
    <>
      {
        todos
          .sort((t1, t2) => t2.id - t1.id)
          .map(item =>
            <Todo
              key={item.id}
              todo={item}
            />
          )
      }
    </>
  );
}
