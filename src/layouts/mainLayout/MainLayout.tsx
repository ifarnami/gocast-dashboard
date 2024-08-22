import { PropsWithChildren } from "react";
import { Box } from "@mui/material";


interface IMainLayoutProps extends PropsWithChildren {}

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{      
        border: "2px ridge",
        borderRadius: "20px",
        maxWidth: "810px",
        maxHeight:"500px", 
        marginTop:"20px",
        marginBottom:"40px",
       padding:" 0 10px"
        
      }}
    >
      {children}
    </Box>
  );
};

export default MainLayout;
