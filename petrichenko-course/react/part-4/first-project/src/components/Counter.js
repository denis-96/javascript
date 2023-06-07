// import { Component } from "react";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import { dec, inc, rnd } from "../actions";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(dec())} className="btn btn-primary">
        DEC
      </button>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        INC
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-primary">
        RND
      </button>
    </div>
  );
}
export default Counter;

/*
class Counter extends Component {
  render() {
    const { counter, inc, dec, rnd } = this.props;
    return (
      <div className="jumbotron">
        <h1>{counter}</h1>
        <button onClick={dec} className="btn btn-primary">
          DEC
        </button>
        <button onClick={inc} className="btn btn-primary">
          INC
        </button>
        <button onClick={rnd} className="btn btn-primary">
          RND
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter: state.value,
});

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, actions)(Counter);
*/
