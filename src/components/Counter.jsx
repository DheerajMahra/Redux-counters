import React from "react";
import { Badge, Button } from "reactstrap";
import { connect } from 'react-redux'
import { incrementCounter, removeCounter } from '../actions/'

const mapStateToProps = (state, ownProps) => {
  return{
    counter: state.counters[ownProps.index].value
  }
}

const mapDispatchToProps = dispatch => {
  return{
    incrementCounter: counterId => dispatch(incrementCounter(counterId)),
    removeCounter: counterId => dispatch(removeCounter(counterId))
  }
}

function Counter(props) {
  
  return (
    <div className="m-2">
      <Badge color="secondary">{props.counter}</Badge>
      <Button
        color="success"
        className="mx-2"
        onClick={() => props.incrementCounter(props.id)}
      >
        +
      </Button>
      <Button color="danger" onClick={() => props.removeCounter(props.id)}>
        Remove
      </Button>
      <br />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)