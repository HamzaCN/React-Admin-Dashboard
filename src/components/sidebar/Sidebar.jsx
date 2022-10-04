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



const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'><span className='logo'>Pixel 2 Graphic</span>
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
                <li>
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Users</span>
                </li>
                <li>
                <Inventory2OutlinedIcon className='icon'/>
                <span>Products</span>
                </li>
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
            <div className='colorOption'></div>
            <div className='colorOption'></div>
            </div>
        </div>
    );
}

export default Sidebar;