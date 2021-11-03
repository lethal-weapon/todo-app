import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleItemStatus, deleteItem} from '../store/actions/TodoAction';

export const Todo = ({todo}) => {
  const dispatch = useDispatch();

  return (
    <div className="row mt-3">
      <div className="col-12 col-md-4"/>
      <div className="col-12 col-md-4">
        <div className="row border border-dark rounded-pill p-3">
          <div className="col-9">
            <span className={`fs-4 hvr-cursor-pointer ${todo.done ? 'text-decoration-line-through' : ''}`}
                  onClick={() => dispatch(toggleItemStatus(todo))}
            >
              {todo.text}
            </span>
          </div>
          <div className="col-3 text-md-end">
            <button className="btn btn-outline-warning"
                    onClick={() => dispatch(deleteItem(todo.id))}
            >
              <i className="fa fa-times"/>
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4"/>
    </div>
  );
}
