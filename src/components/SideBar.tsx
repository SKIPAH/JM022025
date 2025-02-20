import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";

import logoipsum from "../images/logoipsum.svg";
import SearchBar from "./SearchBar";
import { List, ListItem } from "@mui/material";

import ListItemText from "@mui/material/ListItemText";

import IconButton from "@mui/material/IconButton";
import { MoreVert } from "@mui/icons-material";

const drawerWidth = 250;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          component="img"
          sx={{
            height: 50,
            width: 150,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
            paddingTop: 2,
          }}
          alt="Logoipsum logo for sidebar"
          src={logoipsum}
        />
        <SearchBar></SearchBar>
        <List
          sx={{ width: "100%", maxWidth: 320, bgcolor: "background.paper" }}
        >
          {[1, 2, 3, 4].map((value) => (
            <ListItem
              key={value}
              disableGutters
              secondaryAction={
                <IconButton aria-label="comment">
                  <MoreVert />
                </IconButton>
              }
            >
              <ListItemText primary={`Line item ${value}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      ></Box>
    </Box>
  );
}
