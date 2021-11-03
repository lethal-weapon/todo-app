import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <header className="m-5 hvr-cursor-default">
      <div className="">
        <Link to="/"
              className="text-black text-decoration-none"
        >
          <i className="fa fa-3x fa-list"/>
          <span className="ms-4 fs-1 fst-italic">Todo App</span>
        </Link>
      </div>
    </header>
  );
}
