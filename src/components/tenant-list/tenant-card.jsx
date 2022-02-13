import {
  Delete,
  Edit,
  Mail,
  Phone
} from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography
} from '@mui/material';

export default function TenantCard() {
  return (
    <Card sx={{ minWidth: 140 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Иванов Иван Инванович
        </Typography>
        <Typography variant="subtitle2">
          <Phone fontSize='inherit' sx={{ marginRight: 2 }}/>+7 9998886655
        </Typography>
        <Typography color="text.secondary">
          <Mail fontSize='inherit' sx={{ marginRight: 2 }}/>user@mail.com
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Button size="small"><Delete /></Button>
        <Button size="small"><Edit /></Button>
      </CardActions>
    </Card>
  );
}
