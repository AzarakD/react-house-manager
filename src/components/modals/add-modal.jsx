import { useState } from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
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
import { getCurrentAddress } from '../../store/selectors';
import { postTenant } from '../../store/api-actions';
import {
  HELPER_MESSAGE,
  PHONE_LENGTH
} from '../../const';

export default function AddModal() {
  const currentAddress = useSelector(getCurrentAddress);
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [helper, setHelper] = useState('');
  const [userInput, setUserInput] = useState({
    phone: '+7',
    email: '',
    name: '',
    bindId: null,
  });

  const onOpenClick = () => setOpen(true);
  const onCloseClick = () => setOpen(false);

  const onSubmit = () => {
    if (userInput.phone.length === PHONE_LENGTH) {
      onCloseClick();
      dispatch(postTenant({...userInput, bindId: currentAddress}));
      setUserInput({
        phone: '+7',
        email: '',
        name: '',
        bindId: null,
      });
      setHelper('');
      return;
    }
    setHelper(HELPER_MESSAGE);
  }

  return (
    <div>
      <Button onClick={onOpenClick} size='small' disabled={!currentAddress}>
        <PersonAddAlt1 color={ currentAddress ? 'primary' : 'disabled' }/>
      </Button>
      <Dialog
        open={open}
        onClose={onCloseClick}
        sx={{ minWidth: 380 }}
      >
        <DialogTitle>
          <PersonAddAlt1
            fontSize='large'
            color='action'
            sx={{ verticalAlign: 'middle', marginRight: 3}}
          />
          Добавить жильца
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
    </div>
  );
}
