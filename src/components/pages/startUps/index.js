import React from 'react';
import Table from '../../ui/table/'
import Search from '../../ui/search/'
import './StartUps.css'
import Pagination from "rc-pagination";
import { withRouter } from 'react-router-dom'
import {getOrganizations} from '../../../helpers/http'
import 'rc-pagination/assets/index.css';
import queryString from 'query-string'
import axios from 'axios';



/**
 * @description list of startups
 * @returns {object} the component
 */
class StartUps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       organizations: [],
	   currentPage: 1,
	   alphaType: '',
	   orderType: ''
    };
  }

	/**
	 * @description list of startups
	 * @param {number} page current page number
	 * @returns {object} the component
	 */
	onPaginationChange = (page) => {
		this.setState(...this.state, { currentPage: page });
		this.updateQuery(page)
	}


	updateSort = (data) => {
		if (data.type === 'alpha') {
			this.setState(...this.state, { alphaType: data.value });
		} else {
			this.setState(...this.state, { orderType: data.value });
		}
	}

	componentDidMount() {
		let parsed = queryString.parse(this.props.location.search);
		parsed.page ? this.setState(...this.state, { currentPage: parsed.page }) : null
		const organizations = new Promise((resolve) => resolve(axios.get('http://localhost:8008/organizations.json')))
		organizations.then((data) => this.setState(...this.state, { organizations: data.data.organizations }))
	}

  updateQuery = (data) => {
      const { match, history } = this.props;

      let parsed = queryString.parse(this.props.location.search);
      parsed.page = data

      const stringified = queryString.stringify(parsed);
      history.push(`${match.url}?${stringified}`)   
  }

  paginatedData = (data) => {
    const start = (this.state.currentPage - 1) * 10,
      end = start + 10;
      return data.slice(start, end);
  }

  render() {
    return (
      <div className='start-ups'>
        <Search />
         <div className="wrapper wrapper--list">
            <Table
              organizations={this.paginatedData(this.state.organizations)}
              currentPage={this.state.currentPage}
              updateSort={this.updateSort}
            />
            <div className="start-ups__pagination">
              <Pagination
                onChange={this.onPaginationChange}
                current={this.state.currentPage}
                total={this.state.organizations.length}
                defaultPageSize={10}
              />
          </div>
         </div>
      </div>
    );
  }
}

export default withRouter(StartUps);