import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import axios from 'axios';
import { Skeleton, Typography } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import data from '../Components/data.json'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const theme = createTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
        ].join(','),
    },
});

const CompanyPage = () => {

    const params = useParams();
    let url

    for (let i = 0; i < data.length; i++) {
        if (data[i].Symbol === params.symbol) {
            url = data[i].ImageUrl
        }
    }

    const [comp, setComp] = useState([])

    const getComp = async () => {
        try {
            const res = await axios.get(`https://api.aletheiaapi.com/StockData?symbol=${params.symbol}&key=E6D85BFBD90E44F4B94E95D3CA7AE9CF&Accept-Version=2`)
            setComp(res.data)
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getComp();
    }, []);

    function createData(Factor, FY22) {
        return { Factor, FY22 };
    }

    const rows = [
        createData('Revenue (billion $)', (comp.Revenue / 100000000).toFixed(2)),
        createData('Revenue Per Share', comp.RevenuePerShare),
        createData('EDBITDA', comp.EDBITDA),
        createData('Gross Profit', (comp.GrossProfit / 100000000).toFixed(2)),
        createData('Return On Equity', comp.ReturnOnEquity),
    ];

    function createData2(bidprice, askprice, beta) {
        return { bidprice, askprice, beta };
    }

    const rows2 = [
        createData2(comp.BidPrice, comp.AskPrice, comp.Beta),
    ];


    return (
        <>
            <Box display="flex" flexDirection="column" sx={{ mt: 5 }} justifyContent="center">
                <Box>
                    <Grid container alignItems="center" justifyContent="center">
                        <Grid item >
                            <Tooltip arrow title={
                                <Box display="flex" flexDirection="column">
                                    <Box>
                                        <Typography sx={{ fontWeight: "500" }} variant="body2" >
                                            Sector: {comp.Sector}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography sx={{ fontWeight: "500" }} variant="body2" >
                                            Industry: {comp.Industry}
                                        </Typography>
                                    </Box>
                                </Box>
                            }
                                placement="right"
                                componentsProps={{
                                    tooltip: {
                                        sx: {
                                            bgcolor: '#4d5d53',
                                            margin: "auto",
                                            p: 2,
                                            height: 56,
                                            margin: "auto",
                                            '& .MuiTooltip-arrow': {
                                                color: '#4d5d53',
                                            },
                                        },
                                    },
                                }}>
                                <Box>
                                    {comp.length === 0 ? <Skeleton variant="rectangular" width={400} height={60} /> :
                                        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center" sx={{ ml: { xs: 0, sm: 5 } }}>
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
                                            <Box>
                                                <ThemeProvider theme={theme}><Typography sx={{ ml: { xs: 0, sm: 1 }, mr: 0.5, fontWeight: "600", fontSize: "44px" }} variant="h2" color="black">
                                                    {comp.LongName}
                                                </Typography></ThemeProvider>
                                            </Box>

                                        </Box>}
                                </Box>
                            </Tooltip>
                        </Grid>
                        <Grid item xs>
                            <Grid container direction="row-reverse">
                                <Grid item>
                                    <Typography sx={{ mr: { xs: 1, sm: 5 }, fontWeight: "500" }} variant="body1" color="black">
                                        Number of shares you own: <strong>5</strong>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box p={1} pl={2} sx={{ ml: { xs: 0, sm: 8 } }}>
                    <Typography sx={{ mr: { xs: 1, sm: 8 }, mt: { xs: 1, sm: 5 }, fontWeight: "500", fontSize: "15px" }} variant="subtitle1" color="black">
                        <strong><u>Financial factors of the company for the current year</u></strong>
                    </Typography>
                </Box>
                <Box sx={{ padding: 2, ml: { xs: 0, sm: 8 } }}>
                    <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                        <Table sx={{ maxWidth: 650 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Factor</StyledTableCell>
                                    <StyledTableCell>FY&nbsp;(2022-23)</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.Factor}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.Factor}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.FY22}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box p={1} pl={2} sx={{ ml: { xs: 0, sm: 8 } }}>
                    <Typography sx={{ mr: { xs: 1, sm: 8 }, mt: { xs: 1 }, fontWeight: "500", fontSize: "15px" }} variant="subtitle1" color="black">
                        <strong><u>Bid / Ask Spread</u></strong>
                    </Typography>
                </Box>
                <Box sx={{ padding: 2, ml: { xs: 0, sm: 8 } }}>
                    <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                        <Table sx={{ maxWidth: 650 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Bid Price</StyledTableCell>
                                    <StyledTableCell>Ask Price</StyledTableCell>
                                    <StyledTableCell>Beta</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows2.map((row) => (
                                    <StyledTableRow key={row.bidprice}>
                                        <StyledTableCell component="th" scope="row">
                                            {row.bidprice}
                                        </StyledTableCell>
                                        <StyledTableCell>{row.askprice}</StyledTableCell>
                                        <StyledTableCell>{row.beta}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
            <Box>
                company {params.symbol}
            </Box>
        </>
    )
}

export default CompanyPage


