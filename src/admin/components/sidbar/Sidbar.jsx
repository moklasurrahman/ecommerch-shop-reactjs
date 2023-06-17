import "./sidbar.scss"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from "react-router-dom";
import { useContext } from 'react';

const Sidbar = () => {
  return (
    <div className="sidbar">
        <div className="top">
            <Link to="/"><span className="logo">Admin Page</span></Link>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">Main</p>
                <Link to="/">
                <li> <DashboardIcon  className="icon"/> <span>Dashbord</span></li>
                </Link>

                <p className="title">List</p>

                <Link to="/users">
                  <li><PersonOutlineOutlinedIcon className="icon"/><span>User</span></li>
                </Link>
                <Link to="/products">
                  <li> <StoreOutlinedIcon className="icon"/><span>Products</span></li>
                </Link>
                
                <li> <CreditCardOutlinedIcon className="icon"/><span>Orders</span></li>
                <li> <LocalShippingIcon className="icon"/><span>Delivery</span></li>

                <p className="title">Usefull</p>
                <li> <InsertChartIcon className="icon"/><span>Stats</span></li>
                <li> <NotificationsIcon className="icon"/><span>Notifications</span></li>

                <p className="title">Service</p>
                <li> <SettingsSystemDaydreamRoundedIcon className="icon"/><span>System Health</span></li>
                <li> <PsychologyOutlinedIcon className="icon"/><span> Logs</span></li>
                <li> <SettingsApplicationsIcon className="icon"/><span>Settings</span></li>

                <p className="title">User</p>
                <li> <AccountCircleOutlinedIcon className="icon"/><span>Profile</span></li>
                <li> <ExitToAppOutlinedIcon className="icon"/><span>Logout</span></li>

            </ul>
        </div>
    </div>
  )
}

export default Sidbar