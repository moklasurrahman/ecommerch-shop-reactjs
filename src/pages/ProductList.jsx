import { useEffect, useState } from 'react'
import { getproduct } from './../services/productService';
import Card from './../card/Card';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from './../Hook';

const ProductList = () => {
    const [products, setProducts] = useState(null);

    useTitle('All Products');


    useEffect(() => {
        async function fetchProducts(){
         try{
           const data = await getproduct()
                setProducts(data)
         }
         catch(error){
            toast.error(error.message, {closeButton: true, position: "top-center" });
         }
         
        }
        fetchProducts()
       }, []);


  return (
    <section className='max-w-screen-xl mx-auto p-4 '>
        <h1 className=' text-3xl font-bold mb-10 border-spacing-2 underline underline-offset-6'>ALL Products</h1>

        <div className='justify-center flex gap-10 flex-col lg:flex-row md:grid md:m-0 md:grid-cols-2 lg:grid-cols-3'>
            {
                products?.map((product)=>(
                    <article key={product.id}>
                       <Card product={product}/>
                    </article>
                ))
            }
        </div>
    </section>
  )
}

export default ProductList