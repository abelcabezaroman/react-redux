import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    //Get counter from counterReducer
    const counter = useSelector(state => state.counter);

    //Use for all the dispatch actions
    const dispatch = useDispatch();

    return (
        <section id="section-counter">
            <h3 className="center-align white-text blue">Simple Counter</h3>
            <h5 className="center-align">{counter}</h5>
            <div className="row counter-btns">
            <button className="btn-small blue" onClick={() => dispatch({ type: 'MULTIPLY_COUNTER', payload: 5})}>
                    x5
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'MULTIPLY_COUNTER', payload: 10})}>
                    x10
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'MULTIPLY_COUNTER', payload: 4})}>
                    x4
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'INCREMENT_COUNTER_TEN' })}>
                    +10
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'INCREMENT_COUNTER' })}>
                    +1
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_COUNTER' })}>
                    -1
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'DECREMENT_COUNTER_TEN' })}>
                    -10
                </button>
                <button className="btn-small blue" onClick={() => dispatch({ type: 'RESET_COUNTER' })}>
                    Reset
                </button>
            </div>

        </section>
    );
}

export default Counter;
