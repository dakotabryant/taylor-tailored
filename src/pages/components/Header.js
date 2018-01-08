import React, { Component } from 'react';
import Icon from './Icon';
import SideBar from './Sidebar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.clickHander = this.clickHander.bind(this);
  }

  clickHander() {
    console.log('hit')
    return this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className={`header ${isOpen ? 'is-open' : ''}`}>
        <h1>I'm the header</h1>
        <h1>I'm the header</h1>
        <h1>I'm the header</h1>
        <h1>I'm the header</h1>
        <h1>I'm the header</h1>
        <h1>I'm the header</h1>
        <Icon
          className="hamburger"
          src={require('../../assets/Hamburger_Dark.png')}
          onClick={this.clickHander}
        />
        <SideBar />
      </div>
    );
  }
}

export default Header;
