
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Debits from './components/Debits';
import Credits from './components/Credits';
import Data from './components/Data'



class App extends Component {

  constructor() {
    const credits = [
                {
                    "id": "963a03dd-1388-4267-bee7-f061886522e5",
                    "description": "Refined Frozen Soap",
                    "amount": 350.99,
                    "date": "2018-04-15T05:47:22.348Z"
                },
                {
                    "id": "2cb7066e-47b3-496b-b7c7-d2abc6cbe7a8",
                    "description": "Ergonomic Granite Shoes",
                    "amount": 668.15,
                    "date": "2018-03-16T22:28:45.938Z"
                },
                {
                    "id": "7cf27e8c-0974-450e-8dc3-a9c3fa79c4dc",
                    "description": "Tasty Steel Salad",
                    "amount": 333.1,
                    "date": "2017-10-28T19:45:13.677Z"
                }
              ];

    const debits = [            {
                      "id": "c41084b1-ad84-4630-bc8d-679fb66c5deb",
                      "description": "Tasty Frozen Keyboard",
                      "amount": 669.68,
                      "date": "2018-04-26T09:26:58.413Z"
                  },
                  {
                      "id": "e4d72674-b565-494c-a004-5d5761bf7890",
                      "description": "Handmade Concrete Tuna",
                      "amount": 769.91,
                      "date": "2018-06-14T22:53:52.716Z"
                  },
                  {
                      "id": "ccf88aa1-7d0d-4c5e-8d12-d263f707d110",
                      "description": "Practical Rubber Cheese",
                      "amount": 11.62,
                      "date": "2018-04-20T14:41:48.550Z"
                  }
                ];
    super();
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      },
      credits : credits,
      debits : debits
    }
  }

  render() {

     const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
     const UserProfileComponent = () => (
       <UserProfile userName={this.state.currentUser.userName}
       memberSince={this.state.currentUser.memberSince}  />
   );
    console.log(this.state.debits)
    const DebitComponent = () => (<Debits accountDebits={this.state.debits}/>);
    const CreditComponent = () => (<Credits accountCredits={this.state.credits}/>);


     return (
       <Router>
         <div>
           <Route exact path="/" render={HomeComponent}/>
           <Route exact path="/userProfile" render={UserProfileComponent}/>
           <Route exact path="/accountDebits" render={DebitComponent}/>
           <Route exact path="/accountCredits" render={CreditComponent}/>
         </div>
       </Router>
     );
   }


}

export default App;
