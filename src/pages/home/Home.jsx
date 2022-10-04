import React from 'react';
import './home.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widgets from '../../components/widgets/Widgets';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Table from '../../components/table/Table';

const Home = (props) => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer'>
           <Navbar />
           <div className='widgets'>
           <Widgets type="user" />
           <Widgets type="order" />
           <Widgets type="earning" />
           <Widgets type="balance" />
           </div>
           <div className='charts'>
              <Featured />
              <Chart />
           </div>
            <div className='listContainer'>
                <div className='listTitle'>
                    <h3>Latest Transactions</h3>
                </div>
                <Table />
            </div>

            </div>
        </div>
    );
}

export default Home;