import { ListSubheader, styled } from '@mui/material';
//import { IconDots } from '@tabler/icons-react';

import React from 'react';

export const NavGroup = ({ item, hideMenu }) => {
  const ListSubheaderStyle = styled((props) => <ListSubheader disableSticky {...props} />)(
    ({ theme }) => ({
      ...theme.typography.overline,
      fontWeight: '700',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: 'text.Primary',
      lineHeight: '26px',
      padding: '3px 12px',
    }),
  );

  return (
    <ListSubheaderStyle>{hideMenu ? "sasa" : item?.subheader}</ListSubheaderStyle>
  );
};

