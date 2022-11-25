import React, { useState, useEffect } from "react";
import ShareCard from "./ShareCard";
import axios from "axios";
import Grid from '@mui/material/Grid';

export const ShareCards = () => {

  const [shares, setShares] = useState([])

  const getShares = async () => {
    try {
      const res = await axios.get(`https://finance-apppp-backend.herokuapp.com/api/addshare?id=${
        JSON.parse(localStorage.getItem("user"))._id
      }`)
      setShares(res.data)
      console.log(res);
    } catch (err) {
      alert(err.message);
    }
  }

  useEffect(() => {
    getShares();
  }, []);

  return (
    <Grid item xs={12} mt={3} justifyContent="center" >
      <Grid container justifyContent="center" spacing={3}>
        {shares?.map((share, index) => (
          <Grid key={index} item>
            <ShareCard key={share._id} share={share} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default ShareCards;
