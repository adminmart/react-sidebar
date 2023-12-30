import React from 'react';
import { SidebarItems } from '../components/SidebarItems';
import Menuitems from '../components/MenuItems';


export default {
  title: 'Sidebar',
  component: SidebarItems,
}

export const Sidebaritems = ({ ...props }) => (
              
        <SidebarItems 
            {...props}
            menuData={Menuitems}
        
        >   
        </SidebarItems>

)
  