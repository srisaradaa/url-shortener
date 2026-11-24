import Graph from './Graph'
import { dummyData } from '../../dummyData/Data'

function DashboardLayout() {
  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="lg:w-[90%] w-full mx-auto py-16">
        <div className='h-96'>
          <Graph graphData={dummyData}></Graph>
        </div>
        <div className='sm:text-end text-center'>
          <button className='bg-custom-gradient text-white rounded-md px-3 py-2'>Shorten a new URL</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout