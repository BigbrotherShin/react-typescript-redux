import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { increase, decrease, increaseBy } from '../modules/counter';
import Counter from '../components/Counter';

function CounterContainer() {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const count = useSelector((state: RootState) => state.counter.count);
  //count 값의 타입은 useSelector 가 알아서 유추해주니 굳이 :number 라고 타입을 설정 할 필요 없습니다.
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다.

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrese = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <Counter
      count={count}
      onIncrease={onIncrese}
      onDecrease={onDecrease}
      onIncreaseBy={onIncreaseBy}
    />
  );
}

export default CounterContainer;
