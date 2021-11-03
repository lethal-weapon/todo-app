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
    <div className="m-5 fs-2 text-center">
      {
        links.map(link =>
          <Link
            key={link.href}
            to={link.href}
            className="mx-5 px-5 text-primary hvr-underline"
          >
            {link.text}
          </Link>
        )
      }
    </div>
  );
}

