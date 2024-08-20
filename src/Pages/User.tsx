import React, { useState } from 'react';
import { ThemeProvider, createTheme, Box, Stack, Card, CardHeader, IconButton, CardContent, Divider } from '@mui/material';
import Feed from "../components/Feed"
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';
import Sidebar from '../components/Sidebar';
import Pagination from '@mui/material/Pagination';

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
          <Card  sx={{ minWidth: 800, minHeight: "400px", padding: "40px" }}>
        <CardHeader
             action={<IconButton aria-label="settings"></IconButton>}
             title="جستجو و فیلتر"
             dir="rtl"
             ></CardHeader>
             <Divider/>
             <CardContent>
             <Stack spacing={1} marginTop={"400px"} marginRight={"400px"}>
        <Pagination count={10} color="secondary" />
    
    </Stack>
               
             </CardContent>
            </Card>
          </Box>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default User;