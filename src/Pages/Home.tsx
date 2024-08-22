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
import UserTable, { UserTableData } from "../components/UserTable/UserTable";

type Mode = "light" | "dark";

export const tableMockData: UserTableData[] = [
  {
    id: 1,
    username: "John Doe",
    created_at: "7/20/2024",
    role: "66-1949148",
  },
  {
    id: 2,
    username: "Brig",
    created_at: "3/23/2024",
    role: "admin",
  },
  {
    id: 3,
    username: "Bradford",
    created_at: "4/3/2024",
    role: "user",
  },
  {
    id: 4,
    role: "user",
    username: "Giorgi",
    created_at: "10/8/2023",
  },
];

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
