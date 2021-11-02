import React from 'react';
import {Header} from './components/Header';
import {Todos} from './components/Todos';
import {NewItem} from './components/NewItem';

export default function App() {
  return (
    <>
      <Header/>
      <Todos/>
      <NewItem/>
    </>
  );
}
