import React from 'react';
import { Sidebar } from '../components/Sidebar';
 
import Menuitems from '../components/MenuItems2';


export default {
  title: 'Sidebar',
  component: Sidebar,
}

export const Primary = ({ ...props }) => {

   console.log('sddadsad',Menuitems)
  return (

    <Sidebar {...props}    
         menuData={Menuitems}
         width={'300px'}
        >
        
        </Sidebar>
  )

}
  