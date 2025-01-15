import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyUsers from "./pages/MyUsers";
import UserAlbums from "./pages/UserAlbums";
import AlbumPhotos from "./pages/AlbumPhotos";
import AddPhoto from "./pages/AddPhoto";
import { useContext } from "react";
import UserContext from "./context/UserContext";

const Routers = () => {
  const { user } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {user.id && <Route path="/myusers" element={<MyUsers />} />}
        {user.id && <Route path="/user-albums/:id" element={<UserAlbums />} />}
        {user.id && (
          <Route path="/album-photos/:id" element={<AlbumPhotos />} />
        )}
        {user.id && <Route path="/add-photo" element={<AddPhoto />} />}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
