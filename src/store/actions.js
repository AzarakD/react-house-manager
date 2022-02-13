import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../const';

export const loadStreets = createAction(
  ActionType.LOAD_STREETS,
  (streets) => ({ payload: streets }),
);

export const loadHouses = createAction(
  ActionType.LOAD_HOUSES,
  (houses) => ({ payload: houses }),
);

export const loadFlats = createAction(
  ActionType.LOAD_FLATS,
  (flats) => ({ payload: flats }),
);

export const loadTenants = createAction(
  ActionType.LOAD_TENANTS,
  (tenants) => ({ payload: tenants }),
);

export const setCurrentAddress = createAction(
  ActionType.SET_CURRENT_ADDRESS,
  (address) => ({ payload: address }),
);

export const sendTenant = createAction(
  ActionType.SEND_TENANT,
);

export const updateTenants = createAction(
  ActionType.UPDATE_TENANTS,
  (tenants) => ({ payload: tenants }),
);

export const removeTenant = createAction(
  ActionType.REMOVE_TENANT,
);
