import {createStore} from 'redux';
import { ShopReducer } from './ShopReducer';
import { CartReducer } from './CartReducer';
import {CommonReducer} from './CommonReducer'

export const sportsStoreDataStore = createStore(CommonReducer(ShopReducer ,CartReducer))