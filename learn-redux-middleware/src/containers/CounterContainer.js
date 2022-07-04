import React from 'react'
import { increaseAsync, decreaseAsync } from '../modules/counter'
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';

const CounterContainer = () => {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const onIncreaseAsync = () => dispatch(increaseAsync());
  const onDecreaseAsync = () => dispatch(decreaseAsync());

  return (
    <Counter number={number} onIncreaseAsync={onIncreaseAsync} onDecreaseAsync={onDecreaseAsync} />
  )
}

export default CounterContainer