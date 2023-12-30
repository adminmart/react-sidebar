import React from 'react';
import { Sidebar } from '../components/Sidebar';
 
//import Menuitems from '../components/MenuItems2';


import data from '../components/data.json'

export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const Primary = ({ ...props }) => {
 
  return (

    <Sidebar {...props}    
         menuData={data}
         width={'300px'}
        >
        
        </Sidebar>
  )

}
  