import {
  useEffect,
  useState
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  TextField,
  Autocomplete
} from '@mui/material';
import {
  getFlats,
  getHouses,
  getStreets
} from '../../store/selectors';
import {
  fetchFlats,
  fetchHouses,
  fetchTenants
} from '../../store/api-actions';

export default function Search() {
  const streetData = useSelector(getStreets);
  const houseData = useSelector(getHouses);
  const flatData = useSelector(getFlats);

  const [streets, setStreets] = useState([]);
  const [houses, setHouses] = useState([]);
  const [flats, setFlats] = useState([]);

  const [streetInput, setStreetInput] = useState('');
  const [houseInput, setHouseInput] = useState('');
  const [flatInput, setFlatInput] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    const streetNames = streetData.map((item) => item.name);
    setStreets(streetNames);
  }, [streetData]);

  useEffect(() => {
    const houseNames = houseData.map((item) => item.name);
    setHouses(houseNames);
  }, [houseData]);

  useEffect(() => {
    const flatNames = flatData.reduce((res, item) => {
      if (Number.isInteger(+item.name)) {
        res.push(item.name);
      };
      return res;
    }, []);

    setFlats(flatNames);
  }, [flatData]);

  const onStreetChange = (streetName) => {
    if (streetName) {
      const currentStreet = streetData.filter((item) => item.name === streetName);
      dispatch(fetchHouses(currentStreet[0].id));

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
      dispatch(fetchFlats(currentHouse[0].id));

      setHouseInput(houseName);
      setFlatInput('');
    }
  };

  const onFlatChange = (flatName) => {
    if (flatName) {
      const currentAddress = flatData.filter((item) => item.name === flatName);
      dispatch(fetchTenants(currentAddress[0].id));

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
