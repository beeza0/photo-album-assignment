import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface PhotoCardProps {
  title: string;
  thumbnailUrl: string;
  description?: ReactNode;
}

const PhotoCard = ({ title, description, thumbnailUrl }: PhotoCardProps) => {
  return (
    <Box margin={2} width={300}>
      <Card sx={{ height: 250 }}>
        <CardContent>
          <img src={thumbnailUrl} alt="photo-image" style={{ height: 100 }} />
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            by {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PhotoCard;
