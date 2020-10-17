import React from 'react';
import './App.css';
import Title from './components/Title';
import List from './components/List';
function App() {
  return (
    <div className='App'>
      <Title title='What People Say about us' />
      <List />
    </div>
  );
}

export default App;
