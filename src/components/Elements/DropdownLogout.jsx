/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const DropdownLogout = ({setDropdown}) => {
  
  return (
   
   <section>
    <div id="dropdownInformation" className="z-50 bg-white divide-y divide-gray-100 rounded-md shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600">

    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <Link to="/products" onClick={()=>setDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All Product</Link>
      </li>
      <li>
        <Link to="/admin" onClick={()=>setDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Admin Dashboard</Link>
      </li>
      <li>
        <Link to='/login' onClick={()=>setDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Login</Link>
      </li>

      <li>
        <Link to='/signUp' onClick={()=>setDropdown(false)} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Register</Link>
      </li>
     
    </ul>
   
</div>
    </section>
  )
}

export default DropdownLogout