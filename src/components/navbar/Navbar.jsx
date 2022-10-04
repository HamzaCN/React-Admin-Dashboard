import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import  ListOutlined  from '@mui/icons-material/ListOutlined';


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
            <div className='search'>
                <input type='text' placeholder='Search..' />
                <SearchIcon className='icon' />
            </div>
            <div className='items'>
                <div className='item'>
                <LanguageIcon className='icon' />
                English
                </div>
                <div className='item'>
                <DarkModeOutlinedIcon className='icon' />
                </div>
                <div className='item'>
                <FullscreenExitIcon className='icon' />
                </div>
                <div className='item'>
                <NotificationsNoneIcon className='icon' />
                <div className='counter'>3</div>
                </div>
                <div className='item'>
                <ChatBubbleOutlineIcon className='icon' />
                <div className='counter'>8</div>
                </div>
                <div className='item'>
                <ListOutlined  className='icon' />
                </div>
                <div className='item'>
                <img src='https://media-exp1.licdn.com/dms/image/C4D03AQFRR7mXj1AGgQ/profile-displayphoto-shrink_200_200/0/1657635321582?e=1670457600&v=beta&t=5FKL8yi6C4A9v3_OQAcWW0rSXXx8LpZDhzg21AJ0QxE' alt=''
                className='avatar' />
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;