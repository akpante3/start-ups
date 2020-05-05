import React from 'react';
import './Search.css'
import axios from 'axios';
import { withRouter } from "react-router-dom"



/**
 * @description Search component
 * @returns {object} the component
 */
class StartUps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showSearchBody: false,
        showSearchResult: false,
		input: '',
		organizations: [],
		filteredOrganization: []
      };
	}
	
	componentDidMount() {
      this.fetchOrganizations()
	}

    handleChange = (event) => {
	  this.setState(...this.state, { input: event.target.value,  showSearchResult: true });
	  this.filterOrganizations(this.state.input)
	}
	
	fetchOrganizations = () => {
		const organizations = new Promise((resolve) => resolve(axios.get('http://localhost:8008/organizations.json')))
		organizations.then((data) => this.setState(...this.state, { organizations: data.data.organizations }))
	}

	filterOrganizations = (payload) => {
		const data = this.state.organizations.filter((data) => {
			const organizationName = `${data.name}`.toLowerCase()
			payload = payload.toLowerCase()

			return organizationName.includes(`${payload}`)
		})
         this.setState(...this.state, { filteredOrganization: data })
	}

    /**
   * @description Search click on search bar
   * @param {event} event
   */
    handleClick = (event) => {
      event.preventDefault();
      if(event.target === event.currentTarget) {
        this.setState(...this.state, { showSearchBody: !this.state.showSearchBody, showSearchResult: false });
      }
	}

	singlePage = (data) => {
	   this.props.history.push(`/${data}`)
	}

  /**
   * @description Search result modal
   * @returns {object} Search result modal
   */
  searchResults = () => {
	  const list = (
		this.state.filteredOrganization.length ? this.state.filteredOrganization.map((data) => (
		<div className="search__result" onClick={() => (this.singlePage(data.id))} key={data.id}>
			<div className="search__result__name"> {data.name} </div>
			<div className="search__result__info">
			  <div className="search__result__info__item">{ data.locations[0].country }</div>
			</div>
		</div>
	)) : (<div>No Result found </div>) )
    return (
		<div className="search__results">{ list }</div>
	)
  }

  openSearch = () => {
    this.setState(...this.state, { showSearchBody: true });
  }

  render() {
    return (
      <div className="search">
        <div className={this.state.showSearchBody ? 'search--active' : ''} onClick={ this.handleClick }>
          <input 
            className='search__input'
            type="text" placeholder="Search"
            onClick={ this.openSearch }
            onChange={ this.handleChange }
          />
			{ this.state.showSearchResult && this.state.showSearchBody ? this.searchResults() : '' }
        </div>
      </div>
    );
  }
}

export default withRouter(StartUps);