import React, { useState } from "react";
import {
  Box,
  Stack,
  CardHeader,
  IconButton,
  CardContent,
  Button,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

import MainLayout from "../layouts/mainLayout/MainLayout";
import UserTable from "../components/UserTable/UserTable";
import { tableMockData } from "../constants/mockData";

type Mode = "light" | "dark";

export const Home: React.FC = () => {
  const [mode, setMode] = useState<Mode>("light");
  const theme = createTheme({
    direction: "rtl",
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Box>
            <Feed />
            <MainLayout>
              <CardHeader
                action={<IconButton aria-label="settings"></IconButton>}
                title="کاربران جدید"
                dir="rtl"
              ></CardHeader>
              <CardContent>
                <UserTable
                  tableData={tableMockData}
                  tableHeaders={["ردیف", "نام کاربری", "تاریخ عضویت", "نقش"]}
                />
                <Button
                  sx={{ marginRight: "300px", marginTop: "300px" }}
                  variant="contained"
                >
                  مشاهده تمام کاربران
                </Button>
              </CardContent>
            </MainLayout>
          </Box>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
