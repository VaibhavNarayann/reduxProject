import { SearchBar } from './components/SearchBar';
import  Tabs  from './components/Tabs';
import ResultGrid from './components/ResultGrid';
import { NavBar } from './components/NavBar';


 const App = () => {
  return (
    <div className='flex justify-center'>
      <div>
      <NavBar/>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
      </div>
    </div>
  )
}

export default App; 














