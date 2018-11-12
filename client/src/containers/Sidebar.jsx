import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProjects, getSites } from '../model';

import { centerMapOnSite } from '../model/map';

import List from '../components/List';

class Sidebar extends Component {
  render() {
    /*
      Data should be an array of items. Each item also has items that represent the sub menu. Use the data from the redux store being passed in as props.

      The structure of the data is:

      [
        {
          id: 1,
          name: "Cypress Provincial Park",
          items: [
            {
              id: 1,
              name: 'East'
            },
            {
              id: 2,
              name: 'West'
            }
          ]
        }
      ]
    */

    const items = [];
    const projects = this.props.projects;
    const sites = this.props.sites;
      //Build the items array to be rendered by <List />
    projects.forEach(function(proj) {
      let newObj = {}
      newObj["id"] = proj.id;
      newObj["name"] = proj.name;
      newObj["items"] = [];
      // let tempArray = [];
      proj.sites.forEach(function(site) {
        let num = site - 1;
        let item = sites[num];
        newObj.items.push(item);
      });
      items.push(newObj);
    });
      console.log(this.props);
      // console.log(this.props.projects[0].name);
      // console.log(this.props.projects[0].sites[0]);
      // console.log(this.props.sites);
      console.log("items", items);

    return <List items={ items } onClickSubitem={ this.props.centerMapOnSite } />
  }
}

function mapStateToProps(state) {
  return {
    projects: getProjects(state),
    sites: getSites(state)
  };
}

const mapDispatchToProps = {
  centerMapOnSite
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
