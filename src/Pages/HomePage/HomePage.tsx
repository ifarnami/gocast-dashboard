import { Box, Button } from "@mui/material";
import useThemeContext from "../../hooks/useThemeContext";

const HomePage = () => {
  const { toggleThemeMode, mode } = useThemeContext();

  return (
    <Box>
      <Button onClick={toggleThemeMode}>Mode: {mode}</Button>
    </Box>
  );
};

export default HomePage;
