import React from 'react';
import {Link} from 'react-router-dom';

export const Navigation = () => {

  const links = [
    {
      href: '/home',
      text: 'Home'
    },
    {
      href: '/done',
      text: 'Done'
    },
    {
      href: '/help',
      text: 'Help'
    },
  ]

  return (
    <div className="m-5 fs-3 text-center">
      {
        links.map(link =>
          <Link to={link.href}
                className="mx-5 px-5"
          >
            {link.text}
          </Link>
        )
      }
    </div>
  );
}
