import { SearchBar } from './components/SearchBar';
import  Tabs  from './components/Tabs';
import ResultGrid from './components/ResultGrid';


 const App = () => {
  return (
    <div className='  w-full  flex justify-center'>
      <div className='text-center '>
      <SearchBar/>
      <Tabs/>
      <ResultGrid/>
      {/* <LandingPage/> */}
      </div>
    </div>
  )
}

export default App; 














