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
      showSearchBody: false
    };
  }

  handleChange = () => {
    this.setState({ input: e.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) {
      this.setState(...this.state, { showSearchBody: !this.state.showSearchBody });
    }
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
          <div className="search__results">
            <div className="search__result">
                <div className="search__result__name"> hello babe </div>
                <div className="search__result__info">Hi !!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartUps;