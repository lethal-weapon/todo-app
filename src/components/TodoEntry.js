import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {createItem} from '../store/actions/TodoAction';

export const TodoEntry = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const textElement = useRef(null);

  const handleTextChange = (e) => {
    setText(e.target.value.toString().trim());
  }

  const handleCreateItem = () => {
    if (text.length > 0) {
      dispatch(createItem(text));
      textElement.current.value = '';
    }
  }

  return (
    <>
      <div className="row p-3">
        <div className="border border-dark rounded-pill p-3 ps-4">
          <input type="text"
                 className="w-100 fs-4 fw-bold text-black bg-transparent border-0"
                 placeholder="text goes here..."
                 ref={textElement}
                 onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="row p-3">
        <button className="btn btn-outline-primary rounded-pill fs-4"
                onClick={handleCreateItem}
        >
          <i className="fa fa-plus"/>
        </button>
      </div>
    </>
  );
}
