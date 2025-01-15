import { Box, Card, CardContent, Typography } from "@mui/material";
import { ReactNode } from "react";

interface SimpleCardProps {
  title: string;
  description?: ReactNode;
  action: () => void;
}

const SimpleCard = ({ title, description, action }: SimpleCardProps) => {
  return (
    <Box margin={2} width={300}>
      <Card onClick={action} sx={{ cursor: "pointer", height: 180 }}>
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            sx={{ maxHeight: 110, overflow: "auto" }}
          >
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SimpleCard;
