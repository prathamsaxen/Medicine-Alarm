// import * as React from 'react';
// import { NavLink } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// // import { makeStyles } from '@material-ui/core/styles';
// // import AppBar from '@material-ui/core/AppBar';
// // import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';

// // export default function Navbar() {
 
 

// //   return (
// // //   <nav className="navbar navbar-expand-lg navbar-dark  static-top">
// // //   <div className="container">
// // //     <a className="navbar-brand" href="">
// // //       <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height={36} />
// // //     </a>
// // //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// // //       <span className="navbar-toggler-icon" />
// // //     </button>
// // //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
// // //       <ul className="navbar-nav ms-auto">
// // //         <li className="nav-item">
// // //           <a className="nav-link active" aria-current="page" href="#">Home</a>
// // //         </li>
// // //         <li className="nav-item">
// // //           <a className="nav-link" href="#">Link</a>
// // //         </li>
// // //         <li className="nav-item dropdown">
// // //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
// // //             Dropdown
// // //           </a>
// // //           <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
// // //             <li><a className="dropdown-item" href="#">Action</a></li>
// // //             <li><a className="dropdown-item" href="#">Another action</a></li>
// // //             <li>
// // //               <hr className="dropdown-divider" />
// // //             </li>
// // //             <li><a className="dropdown-item" href="#">Something else here</a></li>
// // //           </ul>
// // //         </li>
// // //       </ul>
// // //     </div>
// // //   </div>
// // // </nav>

// // //  <div className="nav">
// // //   <NavLink to="/">HOme</NavLink>
// // //   <NavLink to="/about">ABOUT</NavLink>
// // //   <NavLink to="/contact">COntact</NavLink>
 
  
// // // </div> 




// //   );
// // }


// // const useStyles = makeStyles((theme) => ({
// //   root: {
// //     flexGrow: 1,
// //   },
// //   menuButton: {
// //     marginRight: theme.spacing(2),
// //   },
// // }));
  
// // // Exporting Default Navbar to the App.js File
// // export default function Navbar() {
// //   const classes = useStyles();
  
// //   return (
// //     <div className={classes.root}>
// //       <AppBar position="static">
// //         <Toolbar variant="dense">
// //           <IconButton edge="start" 
// //             className={classes.menuButton} 
// //             color="inherit" aria-label="menu">
// //               <MenuIcon />
// //           </IconButton>
// //           <Typography variant="h6" color="inherit">
// //             Geeks for Geeks
// //           </Typography>
// //         </Toolbar>
// //       </AppBar>
// //     </div>
// //   );
// // }


// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Images from './Images';

const drawerWidth = 240;
const navItems = [
  {
  navName:'Home',
  navLink:'/'
},
  {
  navName:'About',
  navLink:'/about'
},
  {
  navName:'Contact',
  navLink:'/contact'
},
  ];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',height:'max' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.navName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{position:'fixed',background:'#04040429',backdropFilter:'blur(32px)',}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' ,textAlign:'left'} }}
          >
           <img src={Images.logo} style={{height:'35px',width:'auto'}} alt="" />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <NavLink to={item.navLink}>
              <Button key={item} sx={{ color: '#fff' }}>
             {item.navName}  
              </Button>
              </NavLink> 
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
     
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
