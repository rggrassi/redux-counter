import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

const Counter = ({ count, increment, decrement }) => (
    <div>
        Contador: {count}
        <button onClick={() => increment(10)}>+</button>
        <button onClick={() => decrement(20)}>-</button>
    </div>
)       

const mapStateToProps = state => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)