import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateItem, deleteItem} from '../store/actions/TodoAction';
import {Modal} from 'antd';

export const Todo = ({todo}) => {
  const dispatch = useDispatch();
  const [editingText, setEditingText] = useState(todo.text);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCancelChange = () => {
    setIsModalVisible(false);
  }

  const handleConfirmChange = () => {
    if (editingText.length > 0 &&
      editingText.localeCompare(todo.text) !== 0) {

      const updated = {...todo, text: editingText};
      dispatch(updateItem(updated));
    }
    setIsModalVisible(false);
  };

  const toggleStatus = () => {
    const updated = {...todo, done: !todo.done};
    dispatch(updateItem(updated));
  }

  return (
    <>
      <div className="row mt-3 mx-5 py-2 px-4 border border-dark rounded-pill animate__animated animate__fadeIn animate__slow">
        <div className="col-8">
            <span className={`fs-4 fw-bold text-black hvr-cursor-pointer ${todo.done ? 'text-decoration-line-through' : ''}`}
                  onClick={toggleStatus}
            >
              {todo.text}
            </span>
        </div>
        <div className="col-4 text-end">
          <button className="mx-2 btn btn-outline-warning"
                  onClick={() => setIsModalVisible(true)}
          >
            <i className="fa fa-edit"/>
          </button>
          <button className="mx-2 btn btn-outline-danger"
                  onClick={() => dispatch(deleteItem(todo.id))}
          >
            <i className="fa fa-times"/>
          </button>
        </div>
      </div>

      <Modal
        title="Edit Todo"
        visible={isModalVisible}
        onOk={handleConfirmChange}
        onCancel={handleCancelChange}
      >
        <input
          type="text"
          className="w-100 fs-3 fw-bold text-black bg-transparent p-3 px-4 border rounded-pill"
          defaultValue={todo.text}
          onChange={(e) => setEditingText(e.target.value.toString())}
        />
      </Modal>
    </>
  );
}
