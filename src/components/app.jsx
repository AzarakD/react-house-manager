import { Container } from '@mui/material';
import Search from './search';
import TenantList from './tenant-list';

export default function App() {
  return (
    <Container style={{ maxWidth: 700 }}>
      <Search />
      <TenantList />
    </Container>
  );
}
