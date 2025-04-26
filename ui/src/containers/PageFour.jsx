import { useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const PageFour = () => {
  // VARIABLES/STATE LIVE HERE
  const [searchParams] = useSearchParams();
  const searchParamOfSomething = searchParams.get("id");
  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box>
      <Typography>This is page Four </Typography>
      <Typography>{searchParamOfSomething}</Typography>
    </Box>
  );
};

export default PageFour;
