import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useUserContext } from "../stores/userStore";

const PageThree = () => {
  // VARIABLES/STATE LIVE HERE
  const { currentUser } = useUserContext();
  const { id } = useParams();
  // FUNCTIONS/EFFECTS LIVE HERE
  const displayUserGreeting = () => {
    if (currentUser) {
      return `Hello ${currentUser}, `;
    }
  };
  // RETURN LIVES HERE
  // Create a button that when you click it it changes the currentUser
  // use for miniproj
  return (
    <Box>
      <Typography>{displayUserGreeting()} This is page Three </Typography>
      <Typography>{id}</Typography>
    </Box>
  );
};

export default PageThree;
