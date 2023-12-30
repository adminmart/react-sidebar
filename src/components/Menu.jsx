import React from "react";
import styled from '@emotion/styled';
import { Box, Divider } from "@mui/material";


import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as Icons from '@mui/icons-material';

export const Menu = React.forwardRef(({
    children,
    icon='AdjustOutlined',
    defaultIcon=true,
    divider=false,
    },ref)=> 
    {
      
      const Icon = Icons[icon];
     return (
      <Box>
      <ListItem ref={ref} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {defaultIcon?<Icon/>:<span sx={{marginLeft:'20px'}}></span>}
         
        </ListItemIcon>
        <ListItemText primary={children} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
    {divider?<Divider sx={{paddingY:'5px',marginBottom:'10px'}}/>:''}
    </Box>
    
      )


});