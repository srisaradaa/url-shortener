import Card from './Card'
const LandingPage = () => {
  return (
    <div className='min-h-[calc(100vh-64px)] lg:px-14 sm:px-8 px-4'>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-10'>
        <div className='flex-1 w-full'>
          <h1 className='font-bold text-slate-800 md:text-5xl text-3xl md:leading-[55px] sm:leading-[45px] leading-10 lg:w-full md:w-[70%] w-full'>
            TinyLink Simplifies URL Shortening for Efficient Sharing.
          </h1>
          <p className='text-slate-700 text-sm my-5'>
            TinyLink streamlines the process of URL shortening, making sharing links effortless and efficient. With its user-friendly interface, TinyLink allows you to generate concise, easy-to-share URLs in seconds. Simplify your sharing experience with TinyLink today.
          </p>
          <div className='flex gap-3'>
            <button className='bg-custom-gradient rounded-md w-40 py-2 text-white'>
            Manage Links
          </button>
          <button className='border border-btn-color w-40 rounded-md text-btn-color'>
            Create Short Link
          </button>
          </div>
        </div>
        <div className='flex-1 flex justify-center w-full'>
          <img 
            src="/images/img2.png" 
            className='w-full max-w-120 rounded-md'
          />
        </div>
      </div>
      <div>
        <h2 className=' text-3xl font-bold text-slate-800 text-center'>
          Trusted by individuals and teams at the word best companies
        </h2>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pb-8'>
          <Card
            title="Simple URL Shortening"
            desc="Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle."
          />
          <Card
            title="Powerful Analytics"
            desc="Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies."
          />
          <Card
            title="Enhanced Security"
            desc="Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure."
          />
          <Card
            title="Fast and Reliable"
            desc="Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users."
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage