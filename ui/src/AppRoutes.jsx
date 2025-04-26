import HomePage from "./containers/HomePage";
import { Routes, Route } from "react-router-dom";
import LabOne from "./containers/LabOne";
import LabTwo from "./containers/LabTwo";
import LabThree from "./containers/LabThree";
import LabFive from "./containers/LabFive";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/lab-one/" element={<LabOne />} />
      <Route path="/lab-two/" element={<LabTwo />} />
      <Route path="/lab-three/" element={<LabThree />} />
      <Route path="/lab-five/" element={<LabFive />} />
      <Route index element={<HomePage />} />
    </Routes>
  );
}
export default AppRoutes;
