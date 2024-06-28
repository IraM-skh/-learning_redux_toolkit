import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
// import { Component } from "react";
// import { connect } from "react-redux";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
    const dispatchFun = useDispatch();
    const counter = useSelector((state) => state.counter.counter);
    const isCounterShow = useSelector((state) => state.counter.isCounterShow);

    const incrementHandler = () => {
        dispatchFun(counterActions.increment());
    };
    const decrementHandler = () => {
        dispatchFun(counterActions.decrement());
    };
    const increaseHandler = () => {
        dispatchFun(counterActions.increase(10));
    };

    const toggleCounterHandler = () => {
        dispatchFun(counterActions.showOrHideCounter());
    };

    return (
        <main className={classes.counter}>
            <h1>Счётчик</h1>
            {isCounterShow && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>+</button>
                <button onClick={increaseHandler}>+10</button>
                <button onClick={decrementHandler}>-</button>
            </div>
            <button onClick={toggleCounterHandler}>Спрятать / Показать</button>
        </main>
    );
};

//---------------------------------------------------
//------------------Классовый подход ----------------
//---------------------------------------------------
{
    //связать состояние с пропсами. Эквивалент useSelector
    // const mapStateToProps = (state) => {
    //     //ключи- пропсы, которые потом мы сможем передавать в этот компонент
    //     return {
    //         count: state.counter,
    //     };
    // };
    // //Эквивалент useDispatch
    // const mapDispatchTpProps = (dispatch) => {
    //     //ключи- пропсы, которые потом мы сможем передавать в этот компонент
    //     return {
    //         inc: () => dispatch({ type: "increment" }),
    //         dec: () => dispatch({ type: "decrement" }),
    //     };
    // };
    // class Counter extends Component {
    //     incrementHandler() {
    //         this.props.inc();
    //     }
    //     decrementHandler() {
    //         this.props.dec();
    //     }
    //     toggleCounterHandler() {}
    //     render() {
    //         return (
    //             <main className={classes.counter}>
    //                 <h1>Счётчик</h1>
    //                 <div className={classes.value}>{this.props.count}</div>
    //                 <div>
    //                     <button onClick={this.incrementHandler.bind(this)}>
    //                         +
    //                     </button>
    //                     <button onClick={this.decrementHandler.bind(this)}>
    //                         -
    //                     </button>
    //                 </div>
    //                 <button onClick={this.toggleCounterHandler}>
    //                     Спрятать / Показать
    //                 </button>
    //             </main>
    //         );
    //     }
    //export default connect(mapStateToProps, mapDispatchTpProps)(Counter);
}

export default Counter;
