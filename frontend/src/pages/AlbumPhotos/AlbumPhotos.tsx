import { useQuery } from "react-query";
import Header from "../../components/Header";
import { useLocation, useParams } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { getPhotosByAlbumId } from "../../services/photos/photos";
import PhotoCard from "../../components/PhotoCard";
import CircularProgress from "@mui/material/CircularProgress";

const AlbumPhotos = () => {
  const { id } = useParams();
  const location = useLocation();
  const userInfo = location.state;
  const { data, isLoading } = useQuery({
    queryKey: ["photos", id],
    queryFn: () => getPhotosByAlbumId(id as string),
  });

  const renderPhotos = () =>
    data?.map((photo) => (
      <PhotoCard
        key={photo.id}
        title={photo.title}
        thumbnailUrl={photo.url}
        description={userInfo?.username}
      />
    ));

  return (
    <>
      <Header />
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          marginTop={2}
          marginBottom={isLoading ? 12 : 0}
        >
          Photos of Album {id}, by {userInfo?.username}
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {isLoading ? <CircularProgress /> : renderPhotos()}
        </Box>
      </Container>
    </>
  );
};

export default AlbumPhotos;
