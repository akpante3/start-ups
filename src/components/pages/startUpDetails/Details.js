import React from 'react';
import Map from '../../ui/map/'
import './StartUpDetails.css'


/**
 * @description single startup user detail page
 * @returns {object} the component
 */
class Details extends React.Component {
  render() {
    return (
      <div className='details'>
         <div className='details__contact'>
            <div>
                <img src="http://public.crunchbase.com/t_api_images/v1502454456/oyvpld1atafay9gz0lnp.png" alt="logo" />
            </div>
            <div className='details__contact__name'>Gamma</div>
         </div>
         <div className='details__contact-details'>
             <div className='details__contact-details__items'>
                 <div className='details__contact-details__item'>
                     <div className='details__contact-details__item__header'>location</div>
                     <div className='details__contact-details__item__value'>value</div>
                 </div>
                 <div className='details__contact-details__item'>
                     <div className='details__contact-details__item__header'>location</div>
                     <div className='details__contact-details__item__value'>value</div>
                 </div>
             </div>
             <Map /> 
         </div>
      </div>
    );
  }
}

export default Details;