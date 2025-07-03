import Image from "next/image";
import React from "react";
import chair from "../../Assets/18.jpg"; // Adjust the path as necessary
import bag from "../../Assets/19.jpg"; // Adjust the path as necessary
import smalBag from "../../Assets/20.jpg"; // Adjust the path as necessary

const PostCart = () => {
  const cart = [
    {
      id: 1,
      title: "Product 1",
      price: 100,
      img: chair,
    },
    {
      id: 2,
      title: "Product 2",
      price: 200,
      img: bag,
    },
    {
      id: 3,
      title: "Product 3",
      price: 200,
      img: smalBag,
    },
    {
      id: 4,
      title: "Product 4",
      price: 300,
      img: chair,
    },
    {
      id: 5,
      title: "Product 5",
      price: 400,
      img: bag,
    },
    {
      id: 6,
      title: "Product 6",
      price: 500,
      img: smalBag,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-12 space-y-1 bg-gray-100">
      {cart.map((item, id) => (
        <div
          key={id}
          className="flex flex-col items-center justify-center mr-4 w-56 rounded-lg shadow-md m-8"
        >
          <div>
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="object-cover rounded-lg w-[200px] h-[200px] mb-2"
            />
          </div>
          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
          <p className="mt-1 text-gray-600">${item.price}</p>
          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500  text-center dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
          <button className="mt-2 mb-5 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-lg">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostCart;
