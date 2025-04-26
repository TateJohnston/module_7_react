import HomePage from "./containers/HomePage";
import { Routes, Route } from "react-router-dom";
import LabOne from "./containers/LabOne";
import LabTwo from "./containers/LabTwo";
import LabThree from "./containers/LabThree";
import { PostsPage, Post, PostList } from "./containers/pages/PostsPages";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/lab-one/" element={<LabOne />} />
      <Route path="/lab-two/" element={<LabTwo />} />
      <Route path="/lab-three/" element={<LabThree />} />
      <Route index element={<HomePage />} />
      <Route path="/lab-five" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
