import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, handleLogOut } = useContext(UserContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photo Album App - {user.username}
          </Typography>
          <Button color="inherit" onClick={() => navigate("/myusers")}>
            My Users
          </Button>
          <Button
            color="inherit"
            onClick={() =>
              navigate(`/user-albums/${user.id}`, {
                state: { username: user.username, email: user.email },
              })
            }
          >
            My Albums
          </Button>
          {/* <Button color="inherit" onClick={() => navigate("/add-photo")}>
            Add photo
          </Button> */}
          <Button color="inherit" onClick={handleLogOut}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
