import React from 'react';
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom'

const Card = ({ name, url, sector, industry, revenue, symbol }) => {

    return (
        <>
            <Box display="flex" flexDirection="column" p={1} m={1} justifyContent="center" alignItems="center">
                <Box m={1} mt={2} component="img" sx={{
                    height: 65,
                    width: 80,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    borderRadius: 1,
                    display: "flex",
                }}
                    alt="image"
                    src={url}>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "700", fontSize: "19px" }} variant="body1" color="black">
                        {name}
                    </Typography>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="caption" color="black">
                        Industry: <Chip style={{ size: '1em' }} label={industry} variant="outlined" color="primary" sx={{ color: "#00cc00", borderColor: "#00cc00", boxShadow: 3 }} />
                    </Typography>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="caption" color="black">
                        Sector: <Chip style={{ size: '1em' }} label={sector} color="primary" variant="outlined" sx={{ color: "#00cc00", borderColor: "#00cc00", boxShadow: 2 }} />
                    </Typography>
                </Box>
                <Box m={1}>
                    <Typography sx={{ ml: 2, mr: 0.5, fontWeight: "500" }} variant="h6" color="black">
                        Revenue: {(revenue / 100000000).toFixed(2)} billion $
                    </Typography>
                </Box>
                <Divider sx={{ width: "100%", marginBottom: "20px", color: "black" }} />
                <Box m={1}>
                    <NavLink to={`/company/${symbol}`} style={{textDecoration: 'none'}}>
                        <Button variant="contained" sx={{ backgroundColor: "#000000", "&:hover": { backgroundColor: "#484848" } }}>Learn more</Button>
                    </NavLink>
                </Box>
            </Box>
        </>
    )
}

export default Card