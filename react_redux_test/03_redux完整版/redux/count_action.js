/*
    該文件專門為count生成action對象
*/
import{INCREMENT,DECREMENT} from './constant'

export const createIncremenrAction = data => ({ type: INCREMENT, data })
export const createDecremenrAction = data => ({ type: DECREMENT, data })