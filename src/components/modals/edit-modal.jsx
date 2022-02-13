import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Close,
  PersonAddAlt1
} from '@mui/icons-material';
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { updateTenant } from '../../store/api-actions';
import {
  HELPER_MESSAGE,
  PHONE_LENGTH
} from '../../const';

export default function EditModal({tenant, onCloseClick}) {
  const dispatch = useDispatch();

  const [helper, setHelper] = useState('');
  const [userInput, setUserInput] = useState({
    phone: tenant.phone,
    email: tenant.email,
    name: tenant.name,
  });

  const onSubmit = () => {
    if (userInput.phone.length === PHONE_LENGTH) {
      onCloseClick();
      dispatch(updateTenant({
        ...userInput,
        clientId: tenant.id,
        addressId: tenant.bindId,
      }));
      return;
    }
    setHelper(HELPER_MESSAGE);
  }

  return (
    <Dialog
      open={true}
      onClose={onCloseClick}
      sx={{ minWidth: 380 }}
    >
      <DialogTitle>
        <PersonAddAlt1
          fontSize='large'
          color='action'
          sx={{ verticalAlign: 'middle', marginRight: 3}}
        />
        Изменить данные
        <Close onClick={onCloseClick} sx={{ float: 'right', cursor: 'pointer' }} />
      </DialogTitle>
      <DialogContent>
        <div>
          <TextField
            onChange={(evt) => setUserInput({...userInput, phone: evt.currentTarget.value})}
            id="phone"
            margin='dense'
            label="Телефон"
            type="tel"
            value={userInput.phone}
            helperText={helper}
            autoFocus
            required
          />
          <TextField
            onChange={(evt) => setUserInput({...userInput, email: evt.currentTarget.value})}
            id="email"
            margin='dense'
            label="E-mail"
            type="email"
            value={userInput.email}
          />
        </div>
        <TextField
          onChange={(evt) => setUserInput({...userInput, name: evt.currentTarget.value})}
          id="name"
          margin='dense'
          label="ФИО"
          type="text"
          fullWidth
          value={userInput.name}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onSubmit}
          sx={{ marginRight: 1, marginBottom: 1 }}
        >
          Добавить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
