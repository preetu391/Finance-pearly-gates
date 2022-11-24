import React,{useState} from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function ImgMediaCard({ share }) {

  const {id} = useParams();

  const navigate = useNavigate()

  const [data, setData] = useState({ companyName: "", noOfShare: "" });

  const postDelete = (id, e) => {
    e.preventDefault();
    axios.delete(`https://finance-apppp-backend.herokuapp.com/api/addshare/${id}`)
      .then((res) => {
        console.log("Deleted!!", res);
        const del = data.filter(item => item._id !== id);
        setData(del)
        navigate("/user/portfolio");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box mt={10}>
        <Card sx={{ minWidth: 350, backgroundColor: "#f5f5f5" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {(share.companyName[0]).toUpperCase() + (share.companyName).substring(1)}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              Number of Shares you have: {share.noOfShare}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={(e) => postDelete(share._id, e)}>Delete</Button>
            <Link size="small" style={{textDecoration: 'none'}} to={`/editshare/${share._id}`}>Edit</Link>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
