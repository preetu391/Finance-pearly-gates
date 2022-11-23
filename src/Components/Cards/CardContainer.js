import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from './Card';

const CardContainer = ({array}) => {
    return (
        <>
            <Grid item xs={12} mt={3} justifyContent="center" >
                <Box>
                    {/* <SearchBox onChangeHandler={onSearchChange} /> */}
                </Box>
                <Grid container justifyContent="center" spacing={3}>
                    {array.map((company,index) => (
                        <Grid key={index} item>
                            <Paper
                                sx={{
                                    height: 380,
                                    width: 350,
                                    backgroundColor: "#F8F8F8"
                                }}
                                alignItems="center"
                            >
                                <Card name={company.ShortName} sector={company.Sector} industry={company.Industry} revenue={company.Revenue} url={company.ImageUrl} symbol={company.Symbol}/>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </>
    )
}

export default CardContainer