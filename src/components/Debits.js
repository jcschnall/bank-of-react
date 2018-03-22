import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/*
const Debits = (props) => {
    const debitsComponent =
        props.accountDebits.map((amount) => {
            return {amount}
        })

    return (
      <div>
        <h1>Debits</h1>

        <div>amount: {debitsComponent}</div>
        <Link to="/">Home </Link>

      </div>
    )
}
*/





class Debits extends Component {

  render() {

    const debitsComponent = this.props.accountDebits.map((anObjectMapped, index) => {
      return (
          <p key={`${anObjectMapped.amount}_{anObjectMapped.description}`}>
              {anObjectMapped.amount} - {anObjectMapped.description}
          </p>
      );
    })

    console.log(this.props.accountDebits[0].amount)

    /*
    const debitsComponent = function(){
        this.props.accountDebits.map((obj) => {
            console.log(obj.amount)
            return <Debits amount={obj.amount} />
        })
      };
    */

    return (
        <div>
          <h1>Debits</h1>

          <div> {debitsComponent} </div>
          <div>description: </div>
          <Link to="/">Home </Link>

        </div>
    );
  }
}


export default Debits;
