import React from 'react';
import { useState } from 'react'
import { Foot } from './Fotter';
import { Head } from './Header';
import { Todo } from './Todo';


export function App() {
  return (
    <div>
      <Head></Head>
      <Todo></Todo>
      <Foot></Foot>   
    </div>
  );
}


