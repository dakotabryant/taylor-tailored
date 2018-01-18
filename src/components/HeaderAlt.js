import React, { Component } from 'react';
import Icon from './Icon';
import SideBar from './Sidebar';
import headerLinks from '../content/header/navLinks';
import hamburger from '../assets/Hamburger_Dark.png';
import { clearPortfolio } from '../actions/actions-portfolio';
class HeaderAlt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.clickHander = this.clickHander.bind(this);
  }

  clickHander() {
    return this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="alt-nav">
        <Icon
          className={`hamburger ${isOpen ? 'white' : 'black'}`}
          src={hamburger}
          onClick={this.clickHander}
        />
        <div className="top-bar">taylor bryant</div>

        <div className={`header ${isOpen ? 'is-open' : ''}`}>
          <SideBar links={headerLinks} />
        </div>
      </div>
    );
  }
}

export default HeaderAlt;
