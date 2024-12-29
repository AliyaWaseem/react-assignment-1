import React from 'react'
import HeroImg from '../Components/Assets/hero-img.png'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl lg:text-5xl mb-4 font-medium text-gray-900">
      Discover and Find Your Own
        <br className="hidden lg:inline-block" />
        Fashion!
      </h1>
      <p className="mb-8 leading-relaxed">
      Explore our curated collection of stylish clothing and accessories <br/> tailored 
      to your unique taste.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#224F34] border-0 py-2 px-6 focus:outline-none  rounded text-lg">
        Explore Now
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-2 border-[#224F34] py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Get a Quote
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src={HeroImg}
        width={400}
        height={400}
      />
    </div>
  </div>
</section>

  )
}

export default Hero