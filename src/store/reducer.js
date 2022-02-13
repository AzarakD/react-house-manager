import { createReducer } from '@reduxjs/toolkit';
import {
  loadFlats,
  loadHouses,
  loadStreets,
  loadTenants,
  sendTenant,
  setCurrentAddress
} from './actions';

const initialState = {
  streets: [],
  houses: [],
  flats: [],
  tenants: [],
  currentAddress: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadStreets, (state, action) => {
      state.streets = action.payload;
      state.tenants = [];
      state.currentAddress = null;
    })
    .addCase(loadHouses, (state, action) => {
      state.houses = action.payload;
      state.tenants = [];
      state.currentAddress = null;
    })
    .addCase(loadFlats, (state, action) => {
      state.flats = action.payload;
      state.tenants = [];
      state.currentAddress = null;
    })
    .addCase(loadTenants, (state, action) => {
      state.tenants = action.payload;
    })
    .addCase(setCurrentAddress, (state, action) => {
      state.currentAddress = action.payload;
    })
    .addCase(sendTenant, (state, action) => {
      state.tenants = action.payload;
    });
});
