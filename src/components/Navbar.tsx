import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import AccountBoxSharpIcon from "@mui/icons-material/AccountBoxSharp";
import { Mail, Notifications } from "@mui/icons-material";



const StyledToolBar = styled(Toolbar)({
  direction:"ltr",
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "20%",
  direction:"ltr"
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "10px",
  padding: "0 10px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// Navbar component
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <AppBar position="sticky" >
      <StyledToolBar >
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block"} }}>
          MUI DEV
        </Typography>
        <AccountBoxSharpIcon sx={{display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase sx={{Directions:"ltr"}} placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Travis Howard"
            
            src="/static/images/avatar/2.jpg"
            onClick={() => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={() => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            alt="Travis Howard"
            src="/static/images/avatar/2.jpg"
          />
          <Typography variant="body2">John Doe</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
