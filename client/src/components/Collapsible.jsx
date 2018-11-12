import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';


class Collapsible extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isExpanded: false,
    }
    // this.handleToggle = this.handleToggle.bind(this);
  };

  handleToggle(e){
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded
    })
  }

  render() {
    const {title, children} = this.props;
    const {isExpanded} = this.state;
    return(
      <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e) }>
        <h4 className = "panel-heading">{title}</h4>
        <div className = "panel-collapse">
          <div className = "panel-body">
            {children}
          </div>
        </div>
      </div>

    )
  }

}

export default Collapsible;