import {
  Box,
  Grid
} from '@mui/material';
import TenantCard from './tenant-card';

export default function TenantList() {
  return (
    <>
      <div style={{ margin: '50px 0 20px 0' }}>Список жильцов</div>
      <Box sx={{ flexGrow: 1, minWidth: 350 }}>
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
