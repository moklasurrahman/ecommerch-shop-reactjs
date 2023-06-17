import { useNavigate} from "react-router-dom";
import 'react-phone-number-input/style.css';
import { signup } from "../../services/authService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTitle } from "../../Hook";


const RegistrationForm = () => {
  const navigate = useNavigate();
  useTitle('sign up');
  

  const handelRegisters = async (event) =>{
    event.preventDefault();
    try{
      
      const authDetail = {
        // phone:value,
        // name: event.target.name.value,
        number: event.target.number.value,
        email: event.target.email.value,
        password: event.target.password.value
      }

      const data = await signup(authDetail); //signup geting data to "services/authService"
      data.accessToken? navigate("/login") : toast.error(data);
    }
    catch(error){
      toast.error(error.message, {closeButton: true, position: "top-center" });

    }
  }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
              </h1>
              
              <form onSubmit={handelRegisters} className="space-y-4 md:space-y-6" action="#">

                  <div>
                      <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Phone Number</label>
                      <input type="number" name="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder="01732083499" required=""/>
                  </div>

                   <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  
                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
                  <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Register</button>
                  
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default RegistrationForm