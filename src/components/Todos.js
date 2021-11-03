import React from 'react';
import {useSelector} from 'react-redux';
import {Todo} from './Todo';

export const Todos = () => {
  const todos = useSelector((state) => state.todos) || [];

  return (
    <>
      {
        todos.map(item =>
          <Todo
            key={item.id}
            todo={item}
          />
        )
      }
    </>
  );
}
