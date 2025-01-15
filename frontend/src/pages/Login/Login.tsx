import {
  Container,
  Button,
  TextField,
  Typography,
  Box,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { login } from "../../services/users/users";

interface LoginForm {
  username: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const onSubmit = async (data: LoginForm) => {
    const response = await login(data.username);
    console.log(response);
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
      <Typography variant="h3" textAlign="center">
        Welcome to Photo Album Application!
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          marginTop={20}
          display="flex"
          flexDirection="column"
          gap={2}
          alignContent="center"
        >
          <Typography variant="h4" textAlign="center">
            Sign In
          </Typography>
          <TextField
            label="username"
            variant="outlined"
            {...register("username", { required: true })}
            error={errors.username ? true : false}
            helperText={errors.username ? "Username is required" : ""}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Link href="/signup" underline="hover">
            Don't have an username? Sign up here
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
