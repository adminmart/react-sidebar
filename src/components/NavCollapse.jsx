// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { useState } from 'react';

// mui imports
import {
  ListItemIcon,
  ListItemButton,
  Collapse,
  styled,
  ListItemText,
  useTheme,
} from '@mui/material';

// custom imports
import {NavItem} from '../components/NavItem';

// plugins
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

// FC Component For Dropdown Menu
export const NavCollapse = ({
  menu,
  level,
  pathWithoutLastPart,
  pathDirect,
  hideMenu,
  onClick
}) => {
  const Icon = menu?.icon;
  const theme = useTheme();
//   const { pathname } = useLocation();
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const menuIcon =
    level > 1 ? <Icon stroke={1.5} size="1rem" /> : <Icon stroke={1.5} size="1.3rem" />;

  const handleClick = () => {
    setOpen(!open);
  };

  // menu collapse for sub-levels
//   React.useEffect(() => {
//     setOpen(false);
//     menu?.children?.forEach((item) => {
//       if (item?.href === pathname) {
//         setOpen(true);
//       }
//     });
//   }, [pathname, menu.children]);

  const ListItemStyled = styled(ListItemButton)(() => ({
    marginBottom: '2px',
    padding: '8px 10px',
    paddingLeft: hideMenu ? '10px' : level > 2 ? `${level * 15}px` : '10px',
    backgroundColor: open && level < 2 ? theme.palette.primary.main : '',
    whiteSpace: 'nowrap',
    '&:hover': {
    //   backgroundColor: pathname.includes(menu.href) || open
    //     ? theme.palette.primary.main
    //     : theme.palette.primary.light,
    //   color: pathname.includes(menu.href) || open ? 'white' : theme.palette.primary.main,
    },
    color:
      open && level < 2
        ? 'white'
        : `inherit` && level > 1 && open
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
    borderRadius: `10px`,
  }));

  // If Menu has Children
  const submenus = menu.children?.map((item) => {
    if (item.children) {
      return (
        <NavCollapse
          key={item?.id}
          menu={item}
          level={level + 1}
          pathWithoutLastPart={pathWithoutLastPart}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
        />
      );
    } else {
      return (
        <NavItem
          key={item.id}
          item={item}
          level={level + 1}
          pathDirect={pathDirect}
          hideMenu={hideMenu}
          onClick={onClick}
        />
      );
    }
  });

  return (
    <>
      <ListItemStyled
        onClick={handleClick}
        selected={pathWithoutLastPart === menu.href}
        key={menu?.id}
      >
        <ListItemIcon
          sx={{
            minWidth: '36px',
            p: '3px 0',
            color: 'inherit',
          }}
        >
          {menuIcon}
        </ListItemIcon>
        <ListItemText color="inherit">{hideMenu ? '' : <>{t(`${menu.title}`)}</>}</ListItemText>
        {!open ? <IconChevronDown size="1rem" /> : <IconChevronUp size="1rem" />}
      </ListItemStyled>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {submenus}
      </Collapse>
    </>
  );
};
