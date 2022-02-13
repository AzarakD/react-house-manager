import {
  loadFlats,
  loadHouses,
  loadStreets,
  loadTenants,
  setCurrentAddress
} from './actions';
import { APIRoute } from '../const';

export const fetchStreets = () =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get(APIRoute.STREETS);
    dispatch(loadStreets(data));
  };

export const fetchHouses = (id) =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get(APIRoute.HOUSES.replace(':id', id));
    dispatch(loadHouses(data));
  };

export const fetchFlats = (id) =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get(APIRoute.FLATS.replace(':id', id));
    dispatch(loadFlats(data));
  };

export const fetchTenants = (id) =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.get(APIRoute.TENANTS.replace(':id', id));
    dispatch(loadTenants(data));
    dispatch(setCurrentAddress(id));
  };

export const postTenant = (tenant) =>
  async (dispatch, _getStore, api) => {
    const { data } = await api.post(APIRoute.TENANT, tenant);
    // dispatch(loadTenants(data));
    console.log(data, 123);
  };
