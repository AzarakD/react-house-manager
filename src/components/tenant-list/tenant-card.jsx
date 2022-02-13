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
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTenant } from '../../store/api-actions';
import EditModal from '../modals/edit-modal';

export default function TenantCard(tenant) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onDeleteClick = () => dispatch(deleteTenant(tenant.id));

  const onCloseClick = () => setIsModalOpen(false);

  return (
    <>
      <Card sx={{ minWidth: 140 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {tenant.name}
          </Typography>
          <Typography variant="subtitle2">
            <Phone fontSize='inherit' sx={{ marginRight: 2 }}/>{tenant.phone}
          </Typography>
          <Typography color="text.secondary">
            <Mail fontSize='inherit' sx={{ marginRight: 2 }}/>{tenant.email}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between' }}>
          <Button
            onClick={onDeleteClick}
            size="small"
          >
            <Delete />
          </Button>
          <Button
            onClick={() => setIsModalOpen(true)}
            size="small"
          >
            <Edit />
          </Button>
        </CardActions>
      </Card>
      {
        isModalOpen
          ? <EditModal tenant={tenant} onCloseClick={onCloseClick} />
          : ''
      }
    </>
  );
}
