import React from 'react'
import BS1 from '../Components/Assets/BS-card1.png';
import BS2 from '../Components/Assets/BS-card2.png';
import BS3 from '../Components/Assets/BS-card3.png';

const BestSelling = () => {
  return (
    <section className="text-gray-600">
        <div className="text-center mt-20">
        <h1 className="text-4xl font-serif font-bold text-[#224F34] mb-10">Best Selling</h1>
            <p className="text-lg leading-relaxed text-[#224F34]">
            Get in on the trend with our curated selection of best-selling styles.
            </p>
            </div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full bg-[#93B9A2]"
            src={BS1}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
          Shop Now
        </h2>
        <p className="text-base leading-relaxed mt-6 mb-3 capitalize">
        regular fit long sleeve top
        </p>
        <a href='/' className="text-indigo-500 inline-flex items-center mt-3">
          Explore More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full bg-[#A9D4BA]"
            src={BS2}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        Shop Now
        </h2>
        <p className="text-base leading-relaxed mt-2">
        black crop tailored jacket
        </p>
        <a href='/' className="text-indigo-500 inline-flex items-center mt-3">
          Explore More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg overflow-hidden">
          <img
            alt="content"
            className="object-cover object-center h-full w-full bg-[#CADCD0]"
            src={BS3}
          />
        </div>
        <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        Shop Now
        </h2>
        <p className="text-base leading-relaxed mt-2">
        textured sunset shirt
        </p>
        <a href='/' className="text-indigo-500 inline-flex items-center mt-3">
          Explore More
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}

export default BestSelling;