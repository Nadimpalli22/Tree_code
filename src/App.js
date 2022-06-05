import React, { Component } from 'react';
import OrgChart from './mytree';
import { data } from './data/familyData';
import { type } from '@testing-library/user-event/dist/type';

export default class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div>
        <OrgChart nodes={data} />
      </div>
    );
  }
}
