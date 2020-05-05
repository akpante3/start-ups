import React from 'react';
import { formatTime } from '../../../helpers/index'
import './Table.css'
import { withRouter } from "react-router-dom"


/**
 * @description app table that display start ups
 * @returns {object} the component
 */
const StartUps = props => {
  	const { organizations, history } = props

	/**
	 * @description route to single page
	 * @param {number} data organization id
	 * @returns {object} the component
	 */
	const singlePage = (data) => {
		history.push(`/${data}`)
	}


    /**
	 * @description list of Organizations Component
	 * @returns {object} the component
	 */
  	const Organization = () => {
		//   const list = paginatedData(organizations)
		const template = organizations.map((data) => (
			<div className='table__item' onClick={ () => ( singlePage(data.id)) } key={data.id}>
				<div className="table__item__image">
				<img src={data.image_url} />
				</div>
				<div className="table__item__details">
					{/* <div className="table__item__details__country">{data.locations[0].country}</div> */}
					<div className="table__item__details__date">{ formatTime(data.created_at) }</div>
					<div className="table__item__details__name">
					{data.name}
					</div>
					<div className="table__item__details__detail">
						{data.short_description}
					</div>
				</div>
			</div>
		))
		return template
  	}
    
    return (
      <div className="table">
        <div className="table__header">
          <div className="table__header__text">45 Startups</div>
          	<div className="filter-container">
			  <button className="btn btn--md">filter</button>
				<div className="filter-container__options">
					<div className="filter-container__option align-left">
						<div>Alphabetically</div>
						<select onChange={handleAlphabeteChange}>
							<option value="accending">Location</option>
							<option value="decending">Organization Name</option>
						</select>
					</div>
					<div className="filter-container__option align-left">
						<div>Order</div>
						<select onChange={handleAlphabeteChange}>
							<option value="accending">Accending</option>
							<option value="decending">Decending</option>
						</select>
					</div>
					<div className="align-right">
					   <button className="btn"> Submit </button>
					</div>
				</div>
			</div>
        </div>
        <div className='table__items'>
        { organizations.length != 0 ? <Organization /> : 'loading!!!' }
        </div>
      </div>
    );

}

export default withRouter(StartUps);