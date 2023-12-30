import React from 'react';
import { SidebarItems } from '../components/SidebarItems';
import Menuitems from '../components/MenuItems';
import data from '../components/data.json'

export default {
  title: 'Sidebar',
  component: SidebarItems,
}

export const Sidebaritems = ({ ...props }) => {
  

    return ( <SidebarItems 
            {...props}
            menuData={data}
        
        >   
        </SidebarItems> );

}
  