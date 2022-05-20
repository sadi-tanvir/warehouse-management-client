import {combineReducers} from "redux"
import inventoryReducer from './inventoryReducer'
import globalReducer from './global'

const rootReducer = combineReducers({
    inventoryReducer,
    globalReducer
})


export default rootReducer;