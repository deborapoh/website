import { KeyboardEvent, MouseEvent, useState } from 'react'
import {
  Box,
  Drawer as DrawerMui,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton
} from '@mui/material/'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { Menu } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

export default function MenuMobile({ ...props }) {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)

  const goToRoute = (text: string) => {
    if (text === 'Home') {
      router.push('/')
      return
    }

    router.push(`/${text.toLowerCase()}`)
  }

  const toggleDrawer =
    (open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
    }

  const itemList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Resume', 'Projects', 'Contact'].map((text, index) => (
          <ListItem onClick={() => goToRoute(text)} key={text}>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div {...props}>
      <IconButton
        onClick={toggleDrawer(true)}
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
      <DrawerMui
        anchor='left'
        open={open}
        onClose={toggleDrawer(false)}
      >
        {itemList()}
      </DrawerMui>
    </div>
  )
}
