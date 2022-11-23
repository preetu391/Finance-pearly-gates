import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import SearchBox from '../searchbox/SearchBox';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Typography } from '@mui/material';
import Img from '../assests/Finance Pearly Gates-logo-black.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import Person3Icon from '@mui/icons-material/Person3';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink, useMatch, useParams } from 'react-router-dom';

const iconarr = [
  <DashboardIcon sx={{ mr: 1 }} />,
  <BookmarkAddIcon sx={{ mr: 1 }} />,
  <NewspaperIcon sx={{ mr: 1 }} />,
  <Person3Icon sx={{ mr: 1 }} />,
  <ExitToAppIcon sx={{ mr: 1 }} />
]

const menuitems = [
  {
    id: 1,
    name: "Dashboard"
  },
  {
    id: 2,
    name: "Add Shares"
  },
  {
    id: 3,
    name: "Read News"
  },
  {
    id: 4,
    name: "Profile"
  },
  {
    id: 5,
    name: "Logout"
  }
]

const routes = [
  "/dashboard",
  "/addShares",
  "/news",
  "/user/portfolio",
  "/login"
]

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [currentTab, setCurrentTab] = useState(1);

  const active = "contained"

  const params= useParams();

  const ok1 = useMatch({ path: "/dashboard", end: true })
  const ok2 = useMatch({ path: "/", end: true })
  const ok3 = useMatch({ path: `/company/${params.symbol}`, end: true })

  const drawer = (
    <div>
      <Toolbar />
      <Toolbar />
      <Toolbar />
      <List sx={{ textAlign: "center" }}>
        {(menuitems).map((item) => {
          return (
            <NavLink to={`${routes[(item.id) - 1]}`} style={{ textDecoration: 'none', color: "black" }}>
              <ListItem>
                <Button key={item.id} sx={{
                  height: 50, width: "100%",
                  backgroundColor: currentTab === item.id ? "black" : "", "&:hover": {
                    backgroundColor: currentTab === item.id ? "black" : ""
                  }
                }} variant={currentTab === item.id ? active : ""}
                  onClick={() => setCurrentTab(item.id)}>
                  {iconarr[item.id - 1]}
                  {item.name}
                </Button>
              </ListItem>
            </NavLink>
          )
        })}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', backgroundColor: "#B9FFF8" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          color: "#000000",
          backgroundColor: "#E8E8E8",
          zIndex: 1500
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", zIndex: 1500 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box m={1} component="img" sx={{
            height: 140,
            width: 300,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: 1,
            display: "flex",
            mr: {
              xs: 0,
            },
            m: {
              xs: 0
              ,
            }
          }}
            alt="image"
            src={Img}>
          </Box>
          {/* <Typography variant="h6" noWrap component="div" >

            FINANCE PEARLY GATES
          </Typography> */}
          <Typography variant="h6" noWrap component="div" width="70%">
            {ok1 || ok2 ? <SearchBox onChangeHandler={props.onChangeHandler} />: ''}
            {ok3 ? params.id : ''}
            {/* <SearchBox onChangeHandler={props.onChangeHandler} /> */}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer mb={5}
          PaperProps={{
            sx: {
              backgroundColor: "#42C2FF",
            }
          }}
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
            backgroundColor: "#42C2FF"
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          PaperProps={{
            sx: {
              backgroundColor: "	#E0E0E0",
            }
          }}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: "#42C2FF"
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
