import { Typography, Box } from "@mui/material";
import LabOne from "./LabOne";

const LabTwo = () => {
  return (
    <Box>
      <Typography sx={{ marginTop: "20px" }} variant="h4"></Typography>
      <LabOne labNumber="Two" />
    </Box>
  );
};

export default LabTwo;
