import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  Box,
  Stack,
  CardHeader,
  IconButton,
  CardContent,
  Divider,
} from "@mui/material";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";
import Pagination from "@mui/material/Pagination";
import MainLayout from "../layouts/mainLayout/MainLayout";
import UserTable from "../components/UserTable/UserTable";
import { tableMockData } from "../constants/mockData";

type Mode = "light" | "dark";

export const User: React.FC = () => {
  const [mode, setMode] = useState<Mode>("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Box>
            <Feed />
            <MainLayout>
              <CardHeader
                action={<IconButton aria-label="settings"></IconButton>}
                title="جستجو و فیلتر"
                dir="rtl"
              ></CardHeader>
              <Divider />
              <UserTable
                tableData={tableMockData}
                tableHeaders={["ردیف", "نام کاربری", "تاریخ عضویت", "نقش"]}
              />
              <CardContent>
                <Stack spacing={1} marginTop={"300px"} marginRight={"400px"}>
                  <Pagination count={10} color="secondary" />
                </Stack>
              </CardContent>
            </MainLayout>
          </Box>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default User;
