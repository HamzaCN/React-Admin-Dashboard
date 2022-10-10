import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='sidebar'>
            <div className='top'>
            <Link to="/" style={{textDecoration: "none"}}>
            <span className='logo'>Pixel 2 Graphic</span>
            </Link>
            </div>
            <hr />
            <div className='center'>
            <ul>
                <p className='title'>MAIN</p>
                <li>
                <DashboardIcon className='icon'/>
                    <span>Dashboard</span> 
                </li>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration: "none"}}>
                <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Users</span>
                </li>
                </Link>
                <Link to="/products" style={{textDecoration: "none"}}>
                <li>
                <Inventory2OutlinedIcon className='icon'/>
                <span>Products</span>
                </li>
                </Link>
                <li>
                <LocalShippingOutlinedIcon className='icon'/>
                <span>Orders</span>
                </li>
                <li>
                <DeliveryDiningOutlinedIcon className='icon'/>
                <span>Deliver</span>
                </li>
                <p className='title'>USEFUL</p>
                <li>
                <QueryStatsOutlinedIcon className='icon'/>
                <span>Stats</span>
                </li>
                <li>
                <NotificationsActiveOutlinedIcon className='icon'/>
                <span>Notifications</span>
                </li>
                <p className='title'>SERVICE</p>
                <li>
                <MonitorHeartOutlinedIcon className='icon'/>
                <span>System Health</span>
                </li>
                <li>
                <AssessmentOutlinedIcon className='icon'/>
                <span>Logs</span>
                </li>
                <li>
                <SettingsApplicationsOutlinedIcon className='icon'/>
                <span>Settings</span>
                </li>
                <p className='title'>USER</p>
                <li>
                <AdminPanelSettingsOutlinedIcon className='icon'/>
                <span>Profile</span>
                </li>
                <li>
                <ExitToAppOutlinedIcon className='icon'/>
                <span>Logout</span>
                </li>
            </ul>
            </div>
            <div className='bottom'>
            <div className='colorOption' onClick={()=> dispatch({type: "LIGHT"})}> </div>
            <div className='colorOption'  onClick={()=> dispatch({type: "DARK"})}></div>
            </div>
        </div>
    );
}

export default Sidebar;