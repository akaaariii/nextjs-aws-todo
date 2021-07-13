import React from 'react';
import Head from '../components/templates/head';
import Navigation from '../components/templates/navigations';

const Todo = () => {
  return (
    <div>
      <Head title="todo" />
      <Navigation />
      <h2>Todo with amplify</h2>
    </div>
  );
};

export default Todo;
