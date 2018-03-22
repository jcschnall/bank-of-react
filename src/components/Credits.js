import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credits extends Component {

  render() {


    const creditsComponent = this.props.accountCredits.map((anObjectMapped, index) => {
      return (
          <p key={`${anObjectMapped.amount}_{anObjectMapped.description}`}>
              {anObjectMapped.amount} - {anObjectMapped.description}
          </p>
      );
    })

    return (
        <div>
          <h1>Credits</h1>

          <div>amount: {creditsComponent}</div>
          <div>description:</div>
          <Link to="/">Home </Link>

        </div>
    );
  }
}

export default Credits;
