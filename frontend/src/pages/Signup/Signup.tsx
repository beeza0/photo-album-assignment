import { Container, Button, TextField, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { signup } from "../../services/users/users";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import { User } from "../../types/users.types";
import { useNavigate } from "react-router-dom";

interface SignupForm {
  username: string;
  email: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>();

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onSubmit = async (data: SignupForm) => {
    const response = await signup(data.username, data.email);
    if (response === "User already exists") {
      alert(response);
    } else {
      setUser(response as User);
      navigate("/home");
    }
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "20vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          marginTop={20}
          display="flex"
          flexDirection="column"
          gap={2}
          alignContent="center"
        >
          <Typography variant="h4" textAlign="center">
            Sign Up
          </Typography>
          <TextField
            label="username"
            variant="outlined"
            {...register("username", { required: true })}
            error={errors.username ? true : false}
            helperText={errors.username ? "Username is required" : ""}
          />
          <TextField
            label="email"
            variant="outlined"
            {...register("email", { required: true })}
            error={errors.email ? true : false}
            helperText={errors.email ? "Email is required" : ""}
          />
          <Button variant="contained" type="submit">
            Sign up
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Signup;
