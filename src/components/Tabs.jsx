import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos']
    const dispatch = useDispatch(); 
    const activeTab = useSelector((state)=>state.search.activeTab); 
    
    return (
        <div className=' '>
          <div className='text-center'>
                  {tabs.map(function (elem, idx) {
                return (
                    <button
                        className={`${(activeTab==elem? 'bg-black': 'bg-[#0000005b] ')} text-white transition cursor-pointer active:scale-95 mt-10 m-2  px-5 py-2 rounded-xl uppercase`}
                        key={idx}
                        onClick={() => {
                            dispatch(setActiveTabs(elem));
                        }}
                    >
                        {elem}
                    </button>
                )
            })}
          </div>
        </div>
    )
}
export default Tabs
