import './App.css';
import MainDash from './componets/MainDash/MainDash';
import { RightSide } from './componets/RightSide/RightSide';
import Sidebar from './componets/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
        <div className='AppGlass'>
           <Sidebar/>
           <MainDash/>
           <RightSide/>
           
          
        </div>
    </div>
  );
}

export default App;
