import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Close from '@mui/icons-material/Close';
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from 'framer-motion';

const pages = [
  {
    name: 'Home',
    path: '/#home',
  },
  {
    name: 'Quem somos',
    path: '/#quem-somos',
  },
  {
    name: 'Produtos',
    path: '/#produtos',
  },
  {
    name: 'Contato',
    path: '/#contato',
  },
];

function NavBar() {
  const { scrollYProgress } = useScroll();
  const heightTransform = useTransform(
    scrollYProgress,
    [0, 0.02],
    ['100px', '70px']
  );
  const bgColorTransform = useTransform(
    scrollYProgress,
    [0, 0.3],
    ['#888888', '#88888879']
  );

  const [bgColor, setBgColor] = React.useState(bgColorTransform.get());
  const [height, setHeight] = React.useState(heightTransform.get());

  useMotionValueEvent(heightTransform, 'change', (latest) => {
    setHeight(latest);
  });

  useMotionValueEvent(bgColorTransform, 'change', (latest) => {
    setBgColor(latest);
  });

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      component={motion.div}
      style={{
        height,
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: bgColor,
      }}
    >
      <Container maxWidth="xl" style={{ scale: 11.7 }}>
        <Toolbar disableGutters>
          <PhotoCamera sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Photo in Cube
          </Typography>
          <PhotoCamera sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Photo in Cube
          </Typography>{' '}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none', justifyContent: 'flex-end' },
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {!anchorElNav ? <MenuIcon /> : <Close />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography
                    component={'a'}
                    href={page.path}
                    textAlign="center"
                    color={'inherit'}
                    sx={{textDecoration: 'none' }}
                  >
                    {page.name}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' },
              right: 0,
            }}
          >
            {pages.map((page) => (
              <Button
                component={'a'}
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                href={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
