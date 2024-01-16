import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
export const igtechso = configureStore({
  reducer: {
    data: reducer,
  },
});
export type rootState = ReturnType<typeof igtechso.getState>;