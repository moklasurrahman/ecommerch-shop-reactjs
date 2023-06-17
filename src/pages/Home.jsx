import { useTitle } from '../Hook';
import Hero from '../components/heroSection/Hero'
import ProductList from './ProductList';

const Home = () => {
  useTitle('Home');
  return (
    <div className='text-gray-900'>
      <Hero/>
      <ProductList/>
    </div>
  )
}

export default Home