import {
  useEffect,
  useState
} from 'react';
import {
  TextField,
  Autocomplete,
} from '@mui/material';
import { createAPI } from '../../services/api';

const api = createAPI();
const getStreetData = async () => {
  const route = '/Request/streets';
  const { data } = await api.get(route);

  return data;
};

const getHouseData = async (id) => {
  const route = `/Request/houses/${id}`;
  const { data } = await api.get(route);

  return data;
};

const getFlatData = async (id) => {
  const route = `/Request/house_flats/${id}`;
  const { data } = await api.get(route);

  return data;
};

const getTenantData = async (id) => {
  const route = `/HousingStock/clients?addressId=${id}`;
  const { data } = await api.get(route);

  return data;
};

export default function Search() {
  const [streetData, setStreetData] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [flatData, setFlatData] = useState([]);

  const [streets, setStreets] = useState([]);
  const [houses, setHouses] = useState([]);
  const [flats, setFlats] = useState([]);

  const [streetInput, setStreetInput] = useState('');
  const [houseInput, setHouseInput] = useState('');
  const [flatInput, setFlatInput] = useState('');

  useEffect(() => {
    getStreetData().then((data) => {
      const streetNames = data.map((item) => item.name);
      setStreets(streetNames);
      setStreetData(data);
    });
  }, []);

  const onStreetChange = (streetName) => {
    if (streetName) {
      const currentStreet = streetData.filter((item) => item.name === streetName);

      getHouseData(currentStreet[0].id).then((data) => {
        const houseNames = data.map((item) => item.name);
        setHouses(houseNames);
        setHouseData(data);
      });

      if (streetName !== streetInput) {
        setStreetInput(streetName);
        setHouseInput('');
        setFlatInput('');
      }
    }
  };

  const onHouseChange = (houseName) => {
    if (houseName) {
      const currentHouse = houseData.filter((item) => item.name === houseName);

      getFlatData(currentHouse[0].id).then((data) => {
        const flatNames = data.map((item) => item.name);
        setFlats(flatNames);
        setFlatData(data);
      })
      setHouseInput(houseName);
      setFlatInput('');
    }
  };

  const onFlatChange = (flatName) => {
    if (flatName) {
      const currentAddress = flatData.filter((item) => item.name === flatName);

      getTenantData(currentAddress[0].id).then((data) => {
        console.log(data);
      });
      setFlatInput(flatName);
    }
  };

  return (
    <>
      <div style={{ margin: '50px 0 20px 0' }}>Адрес</div>
      <div style={{ display: 'flex' }}>
        <Autocomplete
          onChange={(_, value) => onStreetChange(value)}
          value={streetInput}
          isOptionEqualToValue={() => true}
          disablePortal
          options={streets}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Улица" />}
        />
        <Autocomplete
          onChange={(_, value) => onHouseChange(value)}
          value={houseInput}
          isOptionEqualToValue={() => true}
          disablePortal
          options={houses}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Дом" />}
        />
        <Autocomplete
          onChange={(_, value) => onFlatChange(value)}
          value={flatInput}
          isOptionEqualToValue={() => true}
          disablePortal
          options={flats}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Кв./офис" />}
        />
      </div>
    </>
  );
}
