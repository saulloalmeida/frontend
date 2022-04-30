import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import HomeIcon from "@mui/icons-material/Home";
import PermMediaOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActual";
import Box from "@mui/material/Box";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import { Link } from "react-router-dom";

type categoriesType = {
  id: string;
  children: [
    {
      id: string;
      icon: JSX.Element;
      active: boolean;
      link?: string;
    }
  ];
};
const categories = [
  {
    id: "Build",
    children: [
      {
        id: "Cadastrar Profissoes",
        icon: <DnsRoundedIcon />,
        link: "/profissoes/novo",
      },
      {
        id: "Cadastrar Profissionais",
        icon: <PermMediaOutlinedIcon />,
        link: "/profissionais/novo",
      },
      {
        id: "Profissionais",
        icon: <PermMediaOutlinedIcon />,
        link: "/profissionais",
      },
      {
        id: "Profissoes",
        icon: <PermMediaOutlinedIcon />,
        link: "/profissoes",
      },
    ],
  },
];
const item = {
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 2,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{
            ...item,
            ...itemCategory,
            fontSize: 22,
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Desafio FullStack
        </ListItem>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ListItem sx={{ ...item, ...itemCategory }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "primary" }}>
            {children.map(({ id: childId, icon, link }) => (
              <Link to={link} key={childId} style={{ textDecoration: "none" }}>
                <ListItem disablePadding>
                  <ListItemButton sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
