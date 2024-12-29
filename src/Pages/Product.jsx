import React from 'react'
import P1 from '../Components/Assets/Product-card1.png';
import P2 from '../Components/Assets/Product-card2.png';
import P3 from '../Components/Assets/Product-card3.png';
import P4 from '../Components/Assets/Product-card4.png';
import P5 from '../Components/Assets/Product-card5.png';
import P6 from '../Components/Assets/Product-card6.png';
import P7 from '../Components/Assets/Product-card7.png';
import P8 from '../Components/Assets/Product-card8.png';
const Product = () => {
  return (
    <section className="text-gray-600">
        <h1 className="text-4xl font-serif font-bold text-[#224F34] text-center">Our Products</h1>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P1}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P2}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P3}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P4}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P5}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The Catalyzer
          </h2>
          <p className="mt-1">$16.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P6}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Shooting Stars
          </h2>
          <p className="mt-1">$21.15</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block"
            src={P7}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            Neptune
          </h2>
          <p className="mt-1">$12.00</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a href='/' className="block relative rounded overflow-hidden">
          <img
            alt="ecommerce"
            className="object-cover object-center w-full h-full block bg-[#DDECE2]"
            src={P8}
          />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
            CATEGORY
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            The 400 Blows
          </h2>
          <p className="mt-1">$18.40</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Product