import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyUsers from "./pages/MyUsers";
import UserAlbums from "./pages/UserAlbums";
import AlbumPhotos from "./pages/AlbumPhotos";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/myusers" element={<MyUsers />} />
      <Route path="/user-albums/:id" element={<UserAlbums />} />
      <Route path="/album-photos/:id" element={<AlbumPhotos />} />
      {/* <Route path="/not-found" element={<h1>NOT FOUND</h1>} /> */}
    </Routes>
  </BrowserRouter>
);

export default Routers;
