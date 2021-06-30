import './App.css';
import Header from './components/Header/Header';
import Employees from './components/Employees/Employees';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';

function App() {
  return (
    <div className="App row m-0">
      <Header />
      <Filter />
      <div className='col-12 col-md-9 col-lg-10 p-3'>
        <Search />
        <Employees />
      </div>

    </div>
  );
}

export default App;
