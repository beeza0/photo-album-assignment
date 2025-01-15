import {
  Container,
  Button,
  TextField,
  Typography,
  Box,
  Autocomplete,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import Header from "../../components/Header";
import { Album } from "../../types/albums.types";
import { useQuery } from "react-query";
import { getAlbumsByUserId } from "../../services/albums/albums";

interface PhotoForm {
  album: Album;
  title: string;
  url: string;
}

const AddPhoto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PhotoForm>();

  const { user } = useContext(UserContext);

  const { data, isLoading } = useQuery({
    queryKey: ["albums", user.id],
    queryFn: () => getAlbumsByUserId(user.id as number),
  });

  const [image, setImage] = useState("");

  const onSubmit = async (data: PhotoForm) => {
    console.log(data);
  };

  return (
    <>
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
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
              Add a new Photo
            </Typography>
            <Autocomplete
              disablePortal
              loading={isLoading}
              options={
                data?.map((album) => ({
                  ...album,
                  label: album.title,
                  value: album.id,
                })) as Album[]
              }
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select album"
                  {...register("album", { required: true })}
                />
              )}
            />
            <TextField
              label="Title"
              variant="outlined"
              {...register("title", { required: true })}
              error={errors.title ? true : false}
              helperText={errors.title ? "Title is required" : ""}
            />
            <input
              type="file"
              {...register("url", { required: true })}
              onChange={(e) =>
                setImage(
                  e.target.files ? URL.createObjectURL(e.target.files[0]) : ""
                )
              }
            />
            {image && (
              <img
                src={image}
                alt=""
                style={{ width: 200, alignSelf: "center" }}
              />
            )}
            <Button variant="contained" type="submit">
              Add Photo
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default AddPhoto;
