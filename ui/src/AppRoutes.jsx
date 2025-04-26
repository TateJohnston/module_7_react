import { Typography } from "@mui/material";
import HomePage from "./containers/HomePage";
import { Routes, Route } from "react-router-dom";
import PageThree from "./containers/PageThree";
import PageFour from "./containers/PageFour";
import LabOne from "./containers/LabOne";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/lab-one/" element={<LabOne />} />
      <Route index element={<HomePage />} />
      <Route path="/page-two" element={<Typography>Page 2</Typography>} />
      <Route path="/page-three/:id" element={<PageThree />} />
      <Route path="/page-four" element={<PageFour />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}
export default AppRoutes;
