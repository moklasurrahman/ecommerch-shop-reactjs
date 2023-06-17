/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Rating } from "./Rating";
import { useCart } from "../context/cartContext";


const Card = ({product} ) => {
  
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setIncart] = useState(false);
  console.log(cartList)


  useEffect(() => {
    const productIncard = cartList.find(item => item.id === product.id);

    if(productIncard){
      setIncart(true)
    }
    else{
      setIncart(false)
    }
  }, [cartList, product.id])


  // description sort
const getDesc = (desc) =>{
  const count = product.description.split('\n')[0]
  if(count.length > 70){
    return desc.slice(0, 80)+'.....'
  }
  return desc
}
 
  
  return (
    <div className="card flex justify-center w-full">
      <div className="w-full z-10 max-w-md overflow-hidden bg-white border border-gray-200 rounded shadow dark:bg-gray-800 dark:border-gray-700">
        
        <Link to={`/Product/${product.id}`} className="relative">
          <img
            className="object-cover w-full h-64 overflow-hidden"
            src={product.image}
            alt="product-imag"
          />
        </Link>

        <div className="px-5 pb-4">
          <Link to={`/Product/${product.id}`}>
            <h5 className="text-2xl truncate py-[15px] font-semibold tracking-tight text-gray-900 dark:text-white">
              {product.title}
            </h5>
          </Link>
          <p className="text-md text-gray-900 dark:text-white">{ getDesc(product.description)}</p>

          <div className="flex items-center mt-[15px] mb-5">
           
            {/* ________________________________ */}
            <Rating rating={product.rating} />
            {/* ________________________________ */}

            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl  text-gray-900 dark:text-white">
              ${product.price}
            </span>

          {
          !inCart && <button
          onClick={() => addToCart(product)} 
          className="flex ml-auto text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
          >
          Add to cart <AddIcon style={{fontSize:"20px"}}/>
        </button>
            }

            {
              inCart && <button onClick={() => removeFromCart(product)} className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
              Remove to cart <DeleteIcon style={{fontSize:"20px"}}/>
            </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
