// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import Menuitems from '../components/MenuItems';
import { Box, List, useMediaQuery } from '@mui/material';  
import {NavItem} from '../components/NavItem';
import {NavCollapse} from '../components/NavCollapse';
import {NavGroup} from '../components/NavGroup';

export const SidebarItems = (menuData) => {
   
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  console.log("MenuData",menuData);

  return (
    <Box sx={{ px: 3 }}>
      <List sx={{ pt: 0 }} className="sidebarNav">
        {menuData.menuData?.map((item) => {
        
          // {/********SubHeader**********/}
          if (item.subheader) {
               
              return <NavGroup item={item} hideMenu={true}  key={item.subheader} />;

            // {/********If Sub Menu**********/}
            /* eslint no-else-return: "off" */
          } else if (item.children) {
            return (
               
              <NavCollapse
                menu={item}
                level={1}
                key={item.id} 
              />
            );

            // {/********If Sub No Menu**********/}
          } else {
            return (
                  <NavItem item={item} key={item.id} />
            );
          }
        })}
      </List>
    </Box>
  );
}; 
