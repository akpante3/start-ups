import React from 'react';
import './Search.css'


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
      input: ''
    };
  }

  handleChange = (event) => {
    this.setState(...this.state, { input: event.target.value,  showSearchResult: true });
  }

  handleClick = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      this.setState(...this.state, { showSearchBody: !this.state.showSearchBody, showSearchResult: false });
    }
  }

  /**
   * @description Search result modal
   * @returns {object} Search result modal
   */
  searchResults = () => {
    return (
      <div className="search__results">
        <div className="search__result">
            <div className="search__result__name"> hello babe </div>
            <div className="search__result__info">
              <div className="search__result__info__item">created_at:</div>
              <div className="search__result__info__item">created_at:</div>
            </div>
        </div>
      </div>
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

export default StartUps;