import { Box, CircularProgress, Container, Typography } from "@mui/material";
import Header from "../../components/Header";
import { useQuery } from "react-query";
import { getUsers } from "../../services/users/users";
import SimpleCard from "../../components/SimpleCard";
import { useNavigate } from "react-router-dom";

const MyUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const navigate = useNavigate();

  const renderUsers = () =>
    data?.map((user) => (
      <SimpleCard
        key={user.id}
        title={user.username}
        description={user.email}
        action={() =>
          navigate(`/user-albums/${user.id}`, {
            state: { username: user.username, email: user.email },
          })
        }
      />
    ));

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" marginTop={2}>
          My Users
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {isLoading ? <CircularProgress /> : renderUsers()}
        </Box>
      </Container>
    </>
  );
};

export default MyUsers;
