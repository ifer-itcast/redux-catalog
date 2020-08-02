// Node 中路径必须写完整
import store from './store/index.js';
import { addAction, subAction } from './store/actionCreators.js'

// 订阅 store 的修改，应该放在派发 action 的前面
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch action
store.dispatch(addAction());
store.dispatch(subAction());