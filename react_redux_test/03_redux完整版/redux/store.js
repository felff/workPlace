// Redux Toolkit 中的 configureStore 是 createStore 的改進版本，它簡化了設置並有助於避免常見錯誤。
import {legacy_createStore as createStore} from 'redux'

import countReducer from './count_reducer'

export default createStore(countReducer)
