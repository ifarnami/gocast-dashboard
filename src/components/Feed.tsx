import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import MainLayout from "../layouts/mainLayout/MainLayout";

const Feed: React.FC = () => {
  return (
    <Box flex={4} p={2} display={"flex"} gap={"20px"}>
      <MainLayout>
        <CardContent sx={{ gap: "40px", display: "flex" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ direction: "ltr", display: "flex", gap: "10px" }}
          >
            <Avatar sx={{ bgcolor: "skyblue" }}>
              <PersonOutlineOutlinedIcon />
            </Avatar>
            12.396 نفر
            <br />
            {"تعداد تمام کاربران"}
          </Typography>
        </CardContent>
      </MainLayout>
      <MainLayout>
        <CardContent sx={{ gap: "40px", display: "flex", direction: "ltr" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              direction: "ltr",
              display: "flex",
              gap: "10px",
              fontSize: "15px",
            }}
          >
            <Avatar sx={{ bgcolor: "#ee4f69" }}>
              <UnarchiveOutlinedIcon />
            </Avatar>
            107 عدد
            <br />
            {" تعداد محصولات"}
          </Typography>
        </CardContent>
      </MainLayout>
      <MainLayout>
        <CardContent sx={{ gap: "40px", display: "flex" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ direction: "ltr", display: "flex", gap: "10px" }}
          >
            <Avatar sx={{ bgcolor: "#b594f7" }}>
              <TrendingUpOutlinedIcon />
            </Avatar>
            2.179 سفارش
            <br />
            {" تعداد فروش"}
          </Typography>
        </CardContent>
      </MainLayout>
      <MainLayout>
        <CardContent sx={{ gap: "40px", display: "flex" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ direction: "ltr", display: "flex", gap: "10px" }}
          >
            <Avatar sx={{ bgcolor: "#41f36f" }}>
              <AttachMoneyOutlinedIcon />
            </Avatar>
            432.000.000
            <br />
            {"  مقدار فروش "}
          </Typography>
        </CardContent>
      </MainLayout>
    </Box>
  );
};

export default Feed;
