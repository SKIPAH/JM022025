import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import logoipsum from "../images/logoipsum.svg";
import SearchBar from "./SearchBar";
import { Menu, MenuItem, List, ListItem } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import { Edit, Delete } from "@mui/icons-material";
import ModalWindow from "./ModalWindow";

export default function SideBar() {
  const drawerWidth = 250;
  const [listItems, setListItems] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const open = Boolean(anchorEl);

  const handleAddChart = (chartName: string) => {
    setListItems([...listItems, chartName]);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  const handleDeleteListItem = () => {
    if (selectedIndex !== null) {
      setListItems((prevItems) =>
        prevItems.filter((_, index) => index !== selectedIndex)
      );
      handleClose();
    }
  };

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
            alignContent: "center",
            alignItems: "center",
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
        <SearchBar />
        <ModalWindow onAddChart={handleAddChart}></ModalWindow>

        {
          <List
            sx={{
              width: "100%",
              maxWidth: 320,
              bgcolor: "background.paper",
            }}
          >
            {listItems.length === 0 ? (
              <ListItem>
                <ListItemText primary="No Charts" />
              </ListItem>
            ) : (
              listItems.map((item, index) => (
                <ListItem
                  key={index}
                  disableGutters
                  secondaryAction={
                    <IconButton
                      aria-label="comment"
                      id="demo-positioned-button"
                      aria-controls={open ? "demo-positioned-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={(e) => handleClick(e, index)}
                    >
                      <MoreVert />
                    </IconButton>
                  }
                >
                  <ListItemText primary={item} />
                </ListItem>
              ))
            )}
          </List>
        }
      </Drawer>

      {
        <Menu
          id={`menu-${selectedIndex}`}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": `menu-button-${selectedIndex}`,
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>
            <Edit sx={{ mr: 1 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleDeleteListItem}>
            <Delete sx={{ mr: 1 }} />
            Delete
          </MenuItem>
        </Menu>
      }
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      ></Box>
    </Box>
  );
}
