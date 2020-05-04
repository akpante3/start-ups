import React from 'react';
import Table from '../../ui/table/'
import './StartUps.css'
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css';

/**
 * @description list of startups
 * @returns {object} the component
 */
class StartUps extends React.Component {
  render() {
    return (
      <div className='start-ups'>
         <div className="wrapper wrapper--list">
           <Table />
         </div>
         <Pagination
          current={2}
          total={50}
          defaultPageSize={10}
      />
      </div>
    );
  }
}

export default StartUps;