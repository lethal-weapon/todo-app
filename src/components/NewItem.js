import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import {createNewItem} from '../store/actions/TodoAction';

export const NewItem = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value.toString().trim());
  }

  const handleCreateItem = () => {
    if (text.length > 0) {
      const newItem = {
        id: uuidv4(),
        text: text,
        done: false
      }
      dispatch(createNewItem(newItem));
    }
  }

  return (
    <div className="row m-5">
      <div className="col-12 col-md-4"/>
      <div className="col-12 col-md-4">
        <div className="row">
          <div className="col-9 border border-dark rounded-pill p-3 ps-4">
            <input type="text"
                   className="fs-4 fw-bold bg-transparent border-0"
                   placeholder="text goes here..."
                   onChange={handleTextChange}
            />
          </div>
          <div className="col-3 text-md-end">
            <button className="btn btn-outline-primary fs-4 mt-2"
                    onClick={handleCreateItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4"/>
    </div>
  );
}
