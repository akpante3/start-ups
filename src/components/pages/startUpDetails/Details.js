import React from 'react';
import Map from '../../ui/map/'
import queryString from 'query-string'
import './StartUpDetails.css'
import { withRouter } from "react-router-dom";
import { formatTime } from '../../../helpers/index'



/**
 * @description single startup user detail page
 * @returns {object} the component
 */
const Details = (props) => {

    const { match, history, organization } = props;
    let parsed = queryString.parse(props.location.search);

    /**
     * @description update route query
     * @param {stirng} data section name
     */
    const updateQuery = (data) => {
        parsed.section = data
        const stringified = queryString.stringify(parsed);
        history.push(`${match.url}?${stringified}`)
    }

    /**
     * @description Nested overview component
     * @returns {object} the component
     */
    const Overview = () => {
        return (
            <div className="details__description">
                <div className="details__description__text">{ organization[0].description }</div>
                <div className="details__tags">
                    { organization[0].tags && organization[0].tags.length ? organization[0].tags.map((data) => <div className="tag"> {data} </div>) : null}
                </div>
            </div>
        )
    }

    /**
     * @description Nested people component
     * @returns {object} the component
     */
    const People = () => {
        return (
            <div className="details__people">
                <div className="people-tags">
                    <div className="people-tag"> person </div>
                    <div className="people-tag"> person </div>
                    <div className="people-tag"> person </div>
                </div>
            </div>
        )
    }

    const list = {
        location: <Map />,
        overview: <Overview  />,
        people: <People />
        
    }

    return (
        <div className='details'>
        { organization ? (<div> <div className='details__header'>
                <div className='details__logo'>
                    <img src={ organization[0].image_url } alt="logo" />
                </div>
            </div>
            <div className="details__contact">
                <div className="details__contact__name">{ organization[0].name }</div>
                <div className="details__contact__list">
                    <div className="details__contact__list__item"><span>Location</span>{ organization[0].locations[0].country }</div>
                    <div className="details__contact__list__item"><span>Start Date</span>{formatTime(organization[0].created_at)}</div>
                    <button className="btn btn--blue details__contact__list__btn">visit website</button>
                </div>
            </div>
                <div className="details__links">
                    <div
                        className={['details__link', !parsed.section || parsed.section === 'overview' ? 'active-link' : '' ].join(' ')}
                        onClick={ () => ( updateQuery('overview') )  }
                    >overview</div>
                    <div
                        className={['details__link', parsed.section === 'people' ? 'active-link' : '' ].join(' ')}
                        onClick={ () => ( updateQuery('people') )  }
                    >people</div>
                    <div
                        className={['details__link', parsed.section === 'location' ? 'active-link' : '' ].join(' ')}
                        onClick={ () => ( updateQuery('location') )  }
                    >location</div>
                </div>
                <div className="details__section">
                    { !parsed.section ? list['overview']:list[`${parsed.section}`] }
                </div>
</div>) : (<div> No organization found </div>)}
        </div>
    );
}

export default withRouter(Details);
