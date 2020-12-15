import Header from './components/layout/Header';
import './App.scss';
import Sidebar from './components/layout/Sidebar';
import Main from './components/layout/Main';
import { CurrentContextComponent } from './contexts/current';

function App() {

  return (
    <CurrentContextComponent>
      <Header/>
      <div style={{display: `flex`}}>
        <Sidebar/>
        <Main/>
      </div>
    </CurrentContextComponent>
  );
}

export default App;
