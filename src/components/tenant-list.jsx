import { styled } from '@mui/material/styles';
import {
  Box,
  Paper,
  Grid
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function TenantList() {
  return (
    <>
      <div style={{ margin: '50px 0 20px 0' }}>Список жильцов</div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>Жилец 1</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Жилец 2</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Жилец 3</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>Жилец 4</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
