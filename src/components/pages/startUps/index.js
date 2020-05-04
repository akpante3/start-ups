import React from 'react';
import Table from '../../ui/table/'
import Search from '../../ui/search/'
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
        <Search />
         <div className="wrapper wrapper--list">
            <Table />
            <div className="start-ups__pagination">
              <Pagination
                current={2}
                total={50}
                defaultPageSize={10}
              />
          </div>
         </div>
      </div>
    );
  }
}

export default StartUps;