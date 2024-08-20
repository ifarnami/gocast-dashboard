import React from 'react';
import {
  Avatar,
  Box,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2}>
                <Card sx={{ maxWidth: 900, border: "3px solid #9a2ddb" }}>
        <CardHeader
          action={<IconButton aria-label="settings"></IconButton>}
          title="گزارشات سریع"
          dir="rtl"
        />
        <CardContent sx={{ gap: "40px", display: "flex", direction: "ltr" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{direction:"ltr", display: "flex",gap:"10px"}}
          >
            <Avatar sx={{ bgcolor: "skyblue" }}>
              <PersonOutlineOutlinedIcon />
            </Avatar>
          
            12.396 نفر
           <br/>
           { "تعداد تمام کاربران"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ direction:"ltr",display: "flex",gap:"10px" }}
          >
            <Avatar sx={{ bgcolor: "#ee4f69" }}>
              <UnarchiveOutlinedIcon />
            </Avatar>
            107 عدد
           <br/>
        {" تعداد محصولات"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{direction:"ltr", display: "flex", gap:"10px" }}
          >
            <Avatar sx={{ bgcolor: "#b594f7" }}>
              <TrendingUpOutlinedIcon />
            </Avatar>
            2.179 سفارش
       <br/>
            {" تعداد فروش"}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ direction:"ltr",display: "flex", gap:"10px"}}
          >
            <Avatar sx={{ bgcolor: "#41f36f" }}>
              <AttachMoneyOutlinedIcon />
            </Avatar>
            432.000.000
           <br/>
         {"  مقدار فروش "}
          </Typography>
        </CardContent>
      </Card>
     
       
    </Box>
  );
};

export default Feed;
