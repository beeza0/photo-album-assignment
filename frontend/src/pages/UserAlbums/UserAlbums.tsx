import { useQuery } from "react-query";
import Header from "../../components/Header";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAlbumsByUserId } from "../../services/albums/albums";
import SimpleCard from "../../components/SimpleCard";
import { Box, CircularProgress, Container, Typography } from "@mui/material";

const UserAlbums = () => {
  const { id } = useParams();
  const location = useLocation();
  const userInfo = location.state;
  const { data, isLoading } = useQuery({
    queryKey: ["albums", id],
    queryFn: () => getAlbumsByUserId(id as string),
  });
  const navigate = useNavigate();

  const renderAlbums = () =>
    data?.map((album) => (
      <SimpleCard
        key={album.id}
        title={album.title}
        description={`${userInfo?.username} - ${userInfo?.email}`}
        action={() =>
          navigate(`/album-photos/${album.id}`, { state: userInfo })
        }
      />
    ));

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h3" marginTop={2}>
          Albums of {userInfo?.username}
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {isLoading ? <CircularProgress /> : renderAlbums()}
        </Box>
      </Container>
    </>
  );
};

export default UserAlbums;
