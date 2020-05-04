import React from 'react';
import './Table.css'


/**
 * @description app table that display start ups
 * @returns {object} the component
 */
class StartUps extends React.Component {
  render() {
    return (
      <div className='table'>
            <div className='table__item'>
              <div className="table__item__image">
                <img src="http://public.crunchbase.com/t_api_images/v1502454665/seozli1x8mxeny6mwayf.png" />
              </div>
              <div className="table__item__details">
              <div className="table__item__details__date">12/5/20</div>
                <div className="table__item__details__name">
                  Gamma
                </div>
                <div className="table__item__details__detail">
                  Gamma is a leading supplier of voice, data and mobile products and services in the UK.
                </div>
              </div>
            </div>
            <div className='table__item'>
              <div className="table__item__image">
                <img src="http://public.crunchbase.com/t_api_images/v1502426523/gwezwp0q0uqecdiyei2f.png" />
              </div>
              <div className="table__item__details">
              <div className="table__item__details__date">12/5/20</div>
                <div className="table__item__details__name">
                  Source Guardian
                </div>
                <div className="table__item__details__detail">
                  Gamma is a leading supplier of voice, data and mobile products and services in the UK.
                </div>
              </div>
            </div>
            <div className='table__item'>
              <div className="table__item__image">
                <img src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/4493478-78a1ce84c829d27a420d4acbf9c44355-medium_jpg.jpg?buster=1502365186" />
              </div>
              <div className="table__item__details">
              <div className="table__item__details__date">12/5/20</div>
                <div className="table__item__details__name">
                ASPIRE JS
                </div>
                <div className="table__item__details__detail">
                  Gamma is a leading supplier of voice, data and mobile products and services in the UK.
                </div>
              </div>
            </div>
      </div>
    );
  }
}

export default StartUps;