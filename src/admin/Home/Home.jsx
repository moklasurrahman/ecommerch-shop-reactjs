import "./home.scss"
import Sidbar from './../components/sidbar/Sidbar';
import Widget from './../components/widgets/Widget';
import Featured from './../components/featured/Featured';
import Tabel from './../components/tabel/Tabel';
import Chart from './../components/chart/Chart';
import { useTitle } from './../../Hook';

const AdminHome = () => {
  useTitle('Admin Home');
  return (
    <div className="home">
      <Sidbar/>

      <div className="homeContainer">
     {/*  <Navbar/> */}
      <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
      </div>

      
      <div className="chats">
       <Featured/>
       <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listtitle flex justify-between">
        <span>Customers List</span>
        <button className=" bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-400">Add User</button>
        
        </div>
        <Tabel/>
      </div>
      </div> 
    </div>
  )
}

export default AdminHome