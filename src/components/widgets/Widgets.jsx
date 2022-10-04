import React from 'react';
import './widgets.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';



const Widgets = ( {type}) => {
    let data;

    //temp data
    const amount = 100;
    // const diff = 20;

    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See All Users',
                icon: <PersonOutlineOutlinedIcon className='icon'  style={{color:"crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)"
                }}  />,
            };
            break;
            case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <ShoppingBagOutlinedIcon className='icon' style={{color:"orange",
                backgroundColor: "#FFFC7F"
                }}/>,
            };
            break;
            case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: false,
                link: 'View all Earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' style={{color:"green",
                backgroundColor: "rgba(0, 128, 0, 0.2)"
                }}/>,
            };
            break;
            case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: false,
                link: 'Check Balance',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{color:"purple",
                backgroundColor: "rgba(128, 0, 128, 0.2)"
                }}/>,
            };
            break;
            default:
            break;
        }
    return (
        <div className='widget'>
            <div className='left'>
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.isMoney && "$"} {amount}</span>
                <span className='link'>{data.link}</span>
            </div>
            <div className='right'>
                <div className='percentage positive'>
                <ArrowDropUpOutlinedIcon />
                20%
                </div>
                {data.icon}
            </div>
        </div>
    );
}

export default Widgets;