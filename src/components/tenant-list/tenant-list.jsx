import { useSelector } from 'react-redux';
import {
  Box,
  Grid
} from '@mui/material';
import { getTenants } from '../../store/selectors';
import AddModal from '../modals/add-modal';
import TenantCard from './tenant-card';

const style = {
  display: 'flex',
  margin: '50px 0 20px 0',
  justifyContent: 'space-between',
  minWidth: 340,
};

export default function TenantList() {
  const tenants = useSelector(getTenants);

  return (
    <>
      <div style={style}>
        Список жильцов
        <AddModal />
      </div>
      <Box sx={{ flexGrow: 1, minWidth: 340 }}>
        {
          tenants.length
            ?
            <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              {
                tenants.map((item) => (
                  <Grid item xs={4} key={item.phone}>
                    <TenantCard {...item} />
                  </Grid>
                ))
              }
            </Grid>
            :
            'Список пуст'
        }
      </Box>
    </>
  );
}
