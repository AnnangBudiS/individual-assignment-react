import React from 'react';
// import icons
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Card = ({ img, title, price, rating, links }) => {
  return (
    <div className="px-12 lg:px-0">
      <div className="p-5 lg:max-w-md shadow h-full bg-white rounded-lg">
        <a>
          <img
            src={img}
            alt="card-img"
            className="w-full object-contain h-72 shadow-md"
          />
        </a>
        <div className="py-2">
          <Link to={`/detail/${links}`}>
            <h1 className="text-xl font-semibold text-gray-600 hover:text-slate-900">
              {title}
            </h1>
          </Link>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-semibold">{price}</p>
            <p className="font-semibold flex items-center space-x-2 ">
              <BsFillStarFill className="text-orange-400" />
              <span>{rating}</span>
            </p>
          </div>
        </div>
        <div>
          <button className="bg-slate-900 w-full p-2 text-slate-50 font-semibold rounded-md hover:bg-gray-700">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
