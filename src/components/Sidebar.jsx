import { useMediaQuery, Box, Drawer, useTheme } from '@mui/material';
import {SidebarItems} from '../components/SidebarItems';
//import Logo from '../../shared/logo/Logo';
 
import {Scrollbar} from '../components/Scrollbar';
//import { Profile } from './SidebarProfile/Profile';
 
import Menuitems from '../components/MenuItems';
import React from 'react';

// const initialState = {
//   activeDir: 'ltr',
//   activeMode: 'light', // This can be light or dark
//   activeTheme: 'BLUE_THEME', // BLUE_THEME, GREEN_THEME, BLACK_THEME, PURPLE_THEME, ORANGE_THEME
//   SidebarWidth: 270,
//   MiniSidebarWidth: 87,
//   TopbarHeight: 70,
//   isLayout: 'boxed', // This can be full or boxed
//   isCollapse: false, // to make sidebar Mini by default
//   isSidebarHover: false,
//   isMobileSidebar: false,
//   isHorizontal: false,
//   isLanguage: 'en',
//   isCardShadow: true,
//   borderRadius: 7,
// };


//const ThemeContext = createContext(initialState);

export const Sidebar = React.forwardRef(({
    children,
    width = '255px',
    height = "100%",
    backgroundColor = 'red',
    menuData = Menuitems,
    },ref)=>
    
    {

        
      // const customizer = useContext(ThemeContext);
 
        const lgUp = true;
       // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
      // const customizer = useSelector((state) => state.customizer);
      
      const theme = useTheme();
      // const toggleWidth =
        // customizer.isCollapse && !customizer.isSidebarHover
        //   ? customizer.MiniSidebarWidth
        //   : customizer.SidebarWidth;
    
      const onHoverEnter = () => {
        // if (customizer.isCollapse) {
        //   dispatch(hoverSidebar(true));
        // }
      };
    
      const onHoverLeave = () => {
       // dispatch(hoverSidebar(false));
      };
    
      if (lgUp) {

        return (
          <Box
            
            sx={{
              width: '250px',
              flexShrink: 0,
              // ...(customizer.isCollapse && {
              //   position: 'absolute',
              // }),
            }}
          >
            {/* ------------------------------------------- */}
            {/* Sidebar for desktop */}
            {/* ------------------------------------------- */}
            <Drawer
              anchor="left"
              open
              onMouseEnter={onHoverEnter}
              onMouseLeave={onHoverLeave}
              variant="permanent"
              PaperProps={{
                sx: {
                  transition: theme.transitions.create('width', {
                    duration: theme.transitions.duration.shortest,
                  }),
                  width:width,
                  boxSizing: 'border-box',
                },
              }}
            >
              {/* ------------------------------------------- */}
              {/* Sidebar Box */}
              {/* ------------------------------------------- */}
              <Box
                sx={{
                  height: '100%',
                }}
              >
                {/* ------------------------------------------- */}
                {/* Logo */}
                {/* ------------------------------------------- */}
                <Box px={3}>
                  {/* <Logo /> */}
                </Box>

                <Scrollbar sx={{ height: `calc(${height} - 60px)` }}>
                  {/* ------------------------------------------- */}
                  {/* Sidebar Items */}
                  {/* ------------------------------------------- */}
                  <SidebarItems menuData={menuData} />
                </Scrollbar>
                {/* <Profile /> */}
              </Box> 
            </Drawer>
          </Box>
        );
      }
    
      return (
        <Drawer
          anchor="left"
          open={true}
          onClose={false}
          variant="temporary"
          PaperProps={{
            sx: {
              width:'200px',
    
              backgroundColor:darkBackground900,
                // customizer.activeMode === 'dark'
                //   ? customizer.darkBackground900
                //   : customizer.activeSidebarBg,
              // color: customizer.activeSidebarBg === '#ffffff' ? '' : 'white',
              border: '0 !important',
              boxShadow: (theme) => theme.shadows[8],
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Logo */}
          {/* ------------------------------------------- */}
          <Box px={2}>
            {/* <Logo /> */}
          </Box>
          {/* ------------------------------------------- */}
          {/* Sidebar For Mobile */}
          {/* ------------------------------------------- */}
          <SidebarItems />
        </Drawer>
      );


});