import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../modules/counter'
import Counter from '../components/Counter'

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number)
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />)
}

export default CounterContainer