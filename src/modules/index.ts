import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';
import github from './github/reducer';
import { githubSaga } from './github';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

// 루트 리듀서를 내보냄
export default rootReducer;

// 루트 리듀서의 반환값을 유추
// 추후 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야하므로 내보냄
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}
