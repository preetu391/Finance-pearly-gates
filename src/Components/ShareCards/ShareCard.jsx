import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function ImgMediaCard({ share }) {
  return (
    <>
      <Box mt={10}>
        <Card sx={{ minWidth: 350, backgroundColor: "#f5f5f5" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {(share.companyName[0]).toUpperCase()+(share.companyName).substring(1)}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              Number of Shares you have: {share.noOfShare}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Delete</Button>
            <Button size="small">Edit</Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
