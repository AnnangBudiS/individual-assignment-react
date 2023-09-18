import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  const getDetailProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const detail = await response.json();

    setDetail(detail);
  };

  useEffect(() => {
    getDetailProduct();
  }, [id]);

  const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div>
      {detail ? (
        <div className="flex gap-5 h-screen  justify-center container mx-auto pt-52 shadow-md p-5">
          <div className="max-w-md p-12">
            <img className="w-96 object-cover h-06" src={detail.image} alt="" />
          </div>
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold">{detail.title}</h1>
            <p className="my-4 text-gray-500">{detail.description}</p>
            <p className="font-semibold">{detail.category}</p>
            <p className="text-2xl py-2 font-bold">
              {formatter.format(detail.price)}
            </p>
            <div>
              <button className="w-full p-3 bg-slate-900 text-slate-50 font-semibold mx-10 mt-4 rounded-lg">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default ProductDetailPage;
