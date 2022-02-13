export const HELPER_MESSAGE = 'Формат: +79998887766';
export const PHONE_LENGTH = 12;

export const APIRoute = {
  STREETS: '/Request/streets',
  HOUSES: '/Request/houses/:id',
  FLATS: '/Request/house_flats/:id',
  TENANTS: '/HousingStock/clients?addressId=:id',
  TENANT: '/HousingStock/client',
  EDIT: '/HousingStock/bind_client',
  REMOVE: '/HousingStock/bind_client/:id',
};

export const ActionType = {
  LOAD_STREETS: 'data/loadStreets',
  LOAD_HOUSES: 'data/loadHouses',
  LOAD_FLATS: 'data/loadFlats',
  LOAD_TENANTS: 'data/loadTenants',
  SET_CURRENT_ADDRESS: 'app/setCurrentAddress',
  SEND_TENANT: 'app/sendTenant',
  UPDATE_TENANTS: 'app/updateTenants',
  REMOVE_TENANT: 'app/removeTenant',
};
