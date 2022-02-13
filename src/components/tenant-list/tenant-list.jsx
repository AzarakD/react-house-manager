import {
  Box,
  Grid
} from '@mui/material';
import AddModal from '../modals/add-modal';
import TenantCard from './tenant-card';

const style = {
  display: 'flex',
  margin: '50px 0 20px 0',
  justifyContent: 'space-between',
  minWidth: 340,
};

export default function TenantList() {
  return (
    <>
      <div style={style}>
        Список жильцов
        <AddModal />
      </div>
      <Box sx={{ flexGrow: 1, minWidth: 340 }}>
        <Grid container spacing={{ xs: 1, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            <TenantCard />
          </Grid>
          <Grid item xs={4}>
            <TenantCard />
          </Grid>
          <Grid item xs={4}>
            <TenantCard />
          </Grid>
          <Grid item xs={4}>
            <TenantCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
