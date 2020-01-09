import React from 'react';
import CounterContainer from './container/CounterContainer';
import TodoApp from './container/TodoApp';

const App: React.FC = () => {
  return (
    <>
      <CounterContainer />
      <TodoApp />
    </>
  );
};

export default App;
