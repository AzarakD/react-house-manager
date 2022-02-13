export const APIRoute = {
  STREETS: '/Request/streets',
  HOUSES: '/Request/houses/:id',
  FLATS: '/Request/house_flats/:id',
  TENANTS: '/HousingStock/clients?addressId=:id',
  TENANT: '/HousingStock/client',
};

export const ActionType = {
  LOAD_STREETS: 'data/loadStreets',
  LOAD_HOUSES: 'data/loadHouses',
  LOAD_FLATS: 'data/loadFlats',
  LOAD_TENANTS: 'data/loadTenants',
  SET_CURRENT_ADDRESS: 'app/setCurrentAddress',
  SEND_TENANT: 'app/sendTenant',
};
