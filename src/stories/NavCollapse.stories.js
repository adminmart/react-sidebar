import React from 'react';
import { NavCollapse } from '../components/NavCollapse';
import { Menu } from '../components/Menu';



export default {
  title: 'Sidebar',
  component: NavCollapse,
}

export const NavCol = ({ ...props }) => (
              
        <NavCollapse {...props}>   
        </NavCollapse>

)
  