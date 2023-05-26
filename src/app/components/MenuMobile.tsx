import { Box, Drawer as DrawerMui, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material/'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Fragment, KeyboardEvent, MouseEvent, useState } from 'react';
import { Menu } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function MenuMobile({ ...props }) {
  const router = useRouter()

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const goToRoute = (text: string) => {
    if (text === 'Home') {
      router.push('/')
      return
    }

    router.push(`/${text.toLowerCase()}`)
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((text, index) => (
          <ListItem onClick={() => goToRoute(text)} key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div {...props}>
      <Button onClick={toggleDrawer('left', true)}>
      <IconButton
        sx={{
          color: '#fff',
          width: 50,
          height: 50,
        }}
      >
        <Menu
          sx={{
            color: '#fff',
            width: 50,
            height: 50,
          }}
        />
      </IconButton>
      </Button>
      <DrawerMui
        anchor='left'
        open={state['left']}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </DrawerMui>
    </div>
  );
}
