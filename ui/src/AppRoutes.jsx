import { Typography } from "@mui/material";
import HomePage from "./containers/HomePage";
import { Routes, Route } from "react-router-dom";
import PageThree from "./containers/PageThree";
import PageFour from "./containers/PageFour";
import LabOne from "./containers/LabOne";
import LabTwo from "./containers/LabTwo";
import LabThree from "./containers/LabThree";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/lab-one/" element={<LabOne />} />
      <Route path="/lab-two/" element={<LabTwo />} />
      <Route path="/lab-three/" element={<LabThree />} />
      <Route index element={<HomePage />} />
      <Route path="/page-two" element={<Typography>Page 2</Typography>} />
      <Route path="/page-three/:id" element={<PageThree />} />
      <Route path="/page-four" element={<PageFour />} />
      {/* <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
}
export default AppRoutes;
