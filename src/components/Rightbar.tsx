import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const style = {
  p: 0,
  position: "fixed",
  width: "100%",
  marginTop: "130px",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100} mb={2}>
          کاربران انلاین :
        </Typography>
        <AvatarGroup total={24}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
      </Box>
      <Divider />
      <List sx={style} aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="ایمیل ها" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="سبد خرید" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="نمودار ها" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="امتیازات" />
        </ListItem>
      </List>
    </Box>
  );
}

export default Rightbar;
