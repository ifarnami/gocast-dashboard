import React, { useState } from "react";
import {
  Box,
  Stack,
  Card,
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
            <Card sx={{ minWidth: 800, minHeight: "400px", padding: "40px" }}>
              <CardHeader
                action={<IconButton aria-label="settings"></IconButton>}
                title="کاربران جدید"
                dir="rtl"
              ></CardHeader>
              <CardContent>
                <Button
                  sx={{ marginRight: "300px", marginTop: "300px" }}
                  variant="contained"
                >
                  مشاهده تمام کاربران
                </Button>
              </CardContent>
            </Card>
          </Box>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};