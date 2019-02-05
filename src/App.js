import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import {calculateTotal} from './helper';
import Result from './components/Result';
import Message from './components/Message';
import Spinner from './components/Spinner';
import Link from './components/Link';

class App extends Component {

  state = {
    total: '',
    amount: '',
    term: '',
    loading: false
  }

  loanInformation = (amount, term) => {

    const total = calculateTotal(amount, term);
    
    this.setState({
      loading: true
    }, () => {
      setTimeout(() => {
          this.setState({
            amount,
            total,
            term,
            loading: false
          })

        }, 3000);
      })
  }

  render() {
    //destructuring the state
    const {term, amount, total, loading} = this.state;

    //Conditionally render a component
    let component;

    if(total === '' && !loading){
      //display something here
      component = <Message />

    } else if(loading){
      component = <Spinner />
    }
    else{
      //display another components
      component = <Result
          total={total}
          amount={amount}
          term={term}
      />
    }

    return (
      <Fragment>
        <h1>Loan calculater</h1>
        <div className="container">
          <Form 
            loanInformation={this.loanInformation}
          />
          <div className="messages">
            {component}
          </div>
          <div className="link">
            <Link />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
