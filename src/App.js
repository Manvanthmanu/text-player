import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
     <Navbar logo='TextPlayer'/>
     <section className='container'>
      <Textform/>

     </section>
   </>
  );
}

export default App;
