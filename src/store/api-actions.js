import {
  loadFlats,
  loadHouses,
  loadStreets,
  loadTenants,
  removeTenant,
  sendTenant,
  setCurrentAddress,
  updateTenants
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
  async (dispatch, getStore, api) => {
    const { data } = await api.post(APIRoute.TENANT, tenant);
    const update = [
      ...getStore().tenants,
      {...tenant, id: data.id},
    ];
    dispatch(sendTenant());
    dispatch(updateTenants(update));
  };

export const updateTenant = (tenant) =>
  async (dispatch, getStore, api) => {
    await api.put(APIRoute.EDIT, tenant);

    const index = getStore().tenants.findIndex((item) => item.id === tenant.clientId);
    const update = [
			...getStore().tenants.slice(0, index),
			{
        ...tenant,
        id: tenant.clientId,
        bindId: tenant.addressId,
      },
			...getStore().tenants.slice(index + 1),
		];
    dispatch(updateTenants(update));
  };

export const deleteTenant = (id) =>
  async (dispatch, getStore, api) => {
    await api.delete(APIRoute.REMOVE.replace(':id', id));
    const update = getStore().tenants.filter((item) => item.id !== id);
    dispatch(removeTenant());
    dispatch(updateTenants(update));
  };
