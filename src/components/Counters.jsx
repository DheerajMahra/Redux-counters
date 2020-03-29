import React from "react";
import { Button } from "reactstrap";
import { connect } from 'react-redux'
import Counter from "./Counter.jsx";
import { resetCounters } from '../actions/'

const mapStateToProps = state => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetCounters: () => dispatch(resetCounters())
  }
}

function Counters(props) {
  
  return (
    <div className="main">
      <Button color="primary" className="m-2" onClick={() => props.resetCounters()}>
        Reset
      </Button>
      <br />
      {
        props.counters.map((counter, i) => (
          <Counter
            key={counter.id}
            id={counter.id}
            index={i}
          />
        ))
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters)