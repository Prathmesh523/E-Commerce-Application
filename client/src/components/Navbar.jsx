import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useNavigate } from 'react-router-dom'


export default function Navbar({ role }) {
    const navigate = useNavigate()

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setAnchorElNav(null);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Original Page */}
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href='/'
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
                        SHOPIFY
                    </Typography>

                    {/* after shrinking 3 items */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            <MenuItem onClick={() => { setAnchorElNav(null); navigate('/products') }}>
                                <Typography textAlign="center">Categories</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => { setAnchorElNav(null); navigate('/cart') }}>
                                <Typography textAlign="center">Cart</Typography>
                            </MenuItem>

                        </Menu>
                    </Box>


                    {/* After shrinking the page */}
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
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
                        SHOPIFY
                    </Typography>

                    {/* original 3 items */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Categories
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={() => { setAnchorEl(null); navigate('/products/men') }}>Men's Clothing</MenuItem>
                                <MenuItem onClick={() => { setAnchorEl(null); navigate('/products/women') }}>Women's Clothing</MenuItem>
                                <MenuItem onClick={() => { setAnchorEl(null); navigate('/products/electronics') }}>Electronics</MenuItem>
                                <MenuItem onClick={() => { setAnchorEl(null); navigate('/products/jewelery') }}>Jewelery</MenuItem>
                            </Menu>
                            <Button
                                onClick={() => { setAnchorElNav(null); navigate('cart') }}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Cart
                            </Button>
                        </>
                    </Box>

                    {/* user icon */}
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: '10px', display: 'flex', flexDirection: 'column' }}>
                                <Avatar />
                                <Typography variant='button' sx={{color:"white"}}>{role === 0 ? ("User") : (role === 1 ? ("Admin") : (null))}</Typography>
                            </IconButton>

                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {
                                role === null ? (
                                    <div>
                                        <MenuItem onClick={() => { setAnchorElUser(null); navigate('/login') }}>
                                            <Typography textAlign="center">Login</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={() => { setAnchorElUser(null); navigate('/register') }}>
                                            <Typography textAlign="center">Register</Typography>
                                        </MenuItem>
                                    </div>
                                ) : (
                                    role === 0 ? (
                                        <MenuItem onClick={() => { setAnchorElUser(null); navigate('/') }}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    ) : (

                                        <div>
                                            <MenuItem onClick={() => { setAnchorElUser(null); navigate('/editproducts') }}>
                                                <Typography textAlign="center">Edit Products</Typography>
                                            </MenuItem>
                                            <MenuItem onClick={() => { setAnchorElUser(null); navigate('/') }}>
                                                <Typography textAlign="center">Logout</Typography>
                                            </MenuItem>
                                        </div>
                                    )
                                )
                            }

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}