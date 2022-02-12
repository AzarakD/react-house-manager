import {
  TextField,
  Autocomplete
} from '@mui/material';

export default function Search() {
  return (
    <>
      <div style={{ margin: '50px 0 20px 0' }}>Адрес</div>
      <div style={{ display: 'flex' }}>
        <Autocomplete
          disablePortal
          id="search-street"
          options={[]}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Улица" />}
        />
        <Autocomplete
          disablePortal
          id="search-house"
          options={[]}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Дом" />}
        />
        <Autocomplete
          disablePortal
          id="search-apart"
          options={[]}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Кв./офис" />}
        />
      </div>
    </>
  );
}
