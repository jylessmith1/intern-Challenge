import './App.css';
import Planets from './components/Planets';


function App() {
  return (
    <div className="App">
      <>
      <section>
        My Planet Api
        <p>A list of Planets; their pictures and a little discription about them as well</p>
        <Planets />

        <div className='card-info' >
          palnet info goes here
          <p>description</p> 
          <img src="" alt="" />
          <p>details</p>
          <p>more details</p>
        </div>

      </section>
      </>
    </div>
  );
}

export default App;
