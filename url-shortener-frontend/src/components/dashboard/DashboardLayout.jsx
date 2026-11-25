import Graph from './Graph'
import { useNavigate } from 'react-router-dom';
import { useStoreContext } from '../../contextApi/ContextApi';
import { useFetchTotalClicks } from '../../hooks/useQuery';
import { useEffect } from 'react';

function DashboardLayout() {
  const { token } = useStoreContext();
  const navigate = useNavigate();

  const { isLoading: loader, data: totalClicks, isError } = useFetchTotalClicks(token);

  useEffect(() => {
    if (isError) {
      navigate('/error');
    }
  }, [isError, navigate]);

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      {loader ? (
        <p>Loading...</p>
      ) : (
      <div className="lg:w-[90%] w-full mx-auto py-16">
        <div className='h-96'>
          {totalClicks.length === 0 && (
            <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
              <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                No Data For This Time Period
              </h1>
            </div>
          )}
          <Graph graphData={totalClicks}></Graph>
        </div>
        <div className='sm:text-end text-center'>
          <button className='bg-custom-gradient text-white rounded-md px-3 py-2'>Shorten a new URL</button>
        </div>
      </div>
      )}
    </div>
  )
}

export default DashboardLayout