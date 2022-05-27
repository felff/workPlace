// Redux Toolkit 中的 configureStore 是 createStore 的改進版本，它簡化了設置並有助於避免常見錯誤。
import {legacy_createStore as createStore,applyMiddleware} from 'redux'

import countReducer from './count_reducer'

//引入redux-thunk 用於異步 action
import thunk from 'redux-thunk'

export default createStore(countReducer,applyMiddleware(thunk))
