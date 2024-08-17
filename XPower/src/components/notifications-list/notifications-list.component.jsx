
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Notifications from '@mui/icons-material/Notifications';
import { useEffect } from 'react';
import requestpermission from '../../utilities/firebase/firebase';


export default function MenuPopupState() {
useEffect(()=>{
requestpermission();
},[])
  
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <IconButton variant="contained" {...bindTrigger(popupState)}  size="large"
              aria-label="show 17 new notifications"
              color="inherit">
           <Badge badgeContent={0} color="error">
            <Notifications />
              </Badge>
          </IconButton>
          <Menu {...bindMenu(popupState)}>
         
          <MenuItem ></MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}