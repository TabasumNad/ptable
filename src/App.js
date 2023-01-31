
import './App.css';
import {Card1} from './Card1';
import  {Card2} from './Card2';
import  {Card3} from './Card3';


function App() {
  return (

    <div className="App ">

     <div className='col-lg-4 side m-auto mt-5'>
    <Card1/>
      </div>

      <div className='col-lg-4 side m-auto mt-5'>
        <Card2/>
       </div>

       <div className='col-lg-4 side m-auto mt-5'>
        <Card3/>

       </div>
    </div>

  );
}


export default App;

