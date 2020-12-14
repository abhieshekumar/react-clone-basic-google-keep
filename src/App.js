import { useState } from 'react';
import Header from './components/layout/Header';
import './App.scss';
import Sidebar from './components/layout/Sidebar';
import Main from './components/layout/Main';

function App() {

  const [current, setCurrent] = useState('current');

  return (
    <>
      <Header/>
      <div style={{display: `flex`}}>
        <Sidebar setCurrent={setCurrent} current={current}/>
        <Main current={current}/>
      </div>
    </>
  );
}

export default App;
