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
import Chart from '../Components/Chart/Chart';

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

const defs = [
    `It is the total amount of money brought in by a company's operations, measured over a set amount of time.`,
    `Total revenue earned per share over an year`,
    `Earnings before interest, taxes, depreciation, and amortization (EBITDA) is a widely used measure of core corporate profitability. EBITDA is calculated by adding interest, tax, depreciation, and amortization expenses to net income.`,
    `Gross profit is the profit a business makes after subtracting all the costs that are related to manufacturing and selling its products or services.`,
    `Return on equity (ROE) is a measure of financial performance calculated by dividing net income by shareholders' equity.`
]

const CompanyPage = () => {

    const params = useParams();
    let url

    for (let i = 0; i < data.length; i++) {
        if (data[i].Symbol === params.symbol) {
            url = data[i].ImageUrl
        }
    }

    const [comp, setComp] = useState([])
    const [des, setDes] = useState([])

    const getComp = async () => {
        try {
            const res = await axios.get(`https://api.aletheiaapi.com/StockData?symbol=${params.symbol}&key=E6D85BFBD90E44F4B94E95D3CA7AE9CF&Accept-Version=2`)
            setComp(res.data)
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    }

    const getDes = async () => {
        try {
            const res = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.symbol}&apikey=8TRCETRAA6QT8B7T`)
            setDes(res.data)
            console.log(res);
        } catch (err) {
            alert(err.message);
        }
    }

    useEffect(() => {
        getComp();
        getDes();
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
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box m={2} sx={{ pr: 5, pl: 5 }}>
                    <Typography sx={{ fontWeight: "500", fontSize: "15px" }} variant="body2" >
                        {des.Description}
                    </Typography>

                </Box>
                <Box p={2} sx={{ margin: "auto" }}>
                    <Box display="flex" flexDirection="column">
                        <Box>
                            <Typography sx={{ mr: { xs: 1, sm: 8 }, mt: { xs: 1, sm: 5 }, fontWeight: "500", fontSize: "25px" }} variant="h6" color="black">
                                <strong>Price history graph</strong>
                            </Typography>
                        </Box>
                        <Tooltip arrow title={
                            <Box display="flex" flexDirection="column">
                                <Box>
                                    <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                        This graph represents monthly high and low of different years. You can map how the company has grown and fallen using this graph.
                                    </Typography>
                                </Box>
                            </Box>
                        }
                            position="right"
                            componentsProps={{
                                tooltip: {
                                    sx: {
                                        bgcolor: '#4d5d53',
                                        margin: "auto",
                                        p: 2,
                                        margin: "auto",
                                        '& .MuiTooltip-arrow': {
                                            color: '#4d5d53',
                                        },
                                    },
                                },
                            }}>
                            <Box sx={{ pt: 3 }}>
                                <Chart />
                            </Box>
                        </Tooltip>
                    </Box>
                </Box>
                <Box p={1} pl={2} sx={{ ml: { xs: 0, sm: 8 } }}>
                    <Typography sx={{ mr: { xs: 1, sm: 8 }, mt: { xs: 1, sm: 5 }, fontWeight: "500", fontSize: "25px" }} variant="h6" color="black">
                        <strong>Financial factors of the company for the current year</strong>
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
                                {rows.map((row, index) => (
                                    <StyledTableRow key={row.Factor}>
                                        <Tooltip arrow title={
                                            <Box display="flex" flexDirection="column">
                                                <Box>
                                                    <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                                        {defs[index]}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        }
                                            position="left"
                                            componentsProps={{
                                                tooltip: {
                                                    sx: {
                                                        bgcolor: '#4d5d53',
                                                        margin: "auto",
                                                        p: 2,
                                                        '& .MuiTooltip-arrow': {
                                                            color: '#4d5d53',
                                                        },
                                                    },
                                                },
                                            }}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.Factor}
                                            </StyledTableCell>
                                        </Tooltip>
                                        <StyledTableCell>{row.FY22}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box p={1} pl={2} sx={{ ml: { xs: 0, sm: 8 } }}>
                    <Tooltip arrow title={
                        <Box display="flex" flexDirection="column">
                            <Box>
                                <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                    Bid and ask price are market terms representing supply and demand for a stock.The difference between bid and ask is called the spread.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                    Generally speaking, the larger the spread, the less liquid the stock is. If the stock is especially illiquid (not easily convertable to cash), there is a danger that a large order could cause the price to fall due to slippage (Slippage refers to the difference between the expected price of a trade and the price at which the trade is executed.).
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
                                    margin: "auto",
                                    '& .MuiTooltip-arrow': {
                                        color: '#4d5d53',
                                    },
                                },
                            },
                        }}>
                        <Typography sx={{ mr: { xs: 1, sm: 8 }, mt: { xs: 1 }, fontWeight: "500", fontSize: "25px" }} variant="h6" color="black">
                            <strong>Bid / Ask Spread</strong>
                        </Typography>
                    </Tooltip>
                </Box>
                <Box sx={{ padding: 2, ml: { xs: 0, sm: 8 } }}>
                    <TableContainer component={Paper} sx={{ maxWidth: 650 }}>
                        <Table sx={{ maxWidth: 650 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <Tooltip arrow title={
                                        <Box display="flex" flexDirection="column">
                                            <Box>
                                                <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                                    In the context of stock trading, the bid price refers to the highest amount of money a prospective buyer is willing to spend for it.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    }
                                        placement="bottom"
                                        componentsProps={{
                                            tooltip: {
                                                sx: {
                                                    bgcolor: '#4d5d53',
                                                    margin: "auto",
                                                    p: 2,
                                                    margin: "auto",
                                                    '& .MuiTooltip-arrow': {
                                                        color: '#4d5d53',
                                                    },
                                                },
                                            },
                                        }}>
                                        <StyledTableCell>Bid Price</StyledTableCell>
                                    </Tooltip>
                                    <Tooltip arrow title={
                                        <Box display="flex" flexDirection="column">
                                            <Box>
                                                <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                                    The ask is the lowest price where someone is willing to sell a share.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    }
                                        placement="bottom"
                                        componentsProps={{
                                            tooltip: {
                                                sx: {
                                                    bgcolor: '#4d5d53',
                                                    margin: "auto",
                                                    p: 2,
                                                    margin: "auto",
                                                    '& .MuiTooltip-arrow': {
                                                        color: '#4d5d53',
                                                    },
                                                },
                                            },
                                        }}>
                                        <StyledTableCell>Ask Price</StyledTableCell>
                                    </Tooltip>
                                    <Tooltip arrow title={
                                        <Box display="flex" flexDirection="column">
                                            <Box>
                                                <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                                    Beta is a concept that measures the expected move in a stock relative to movements in the overall market. A beta greater than 1.0 suggests that the stock is more volatile than the broader market, and a beta less than 1.0 indicates a stock with lower volatility.
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ fontWeight: "500", fontSize: "13px" }} variant="body2" >
                                                    A volatile stock is the one whose price fluctuates wildly i.e. hits new highs and lows or moves erratically.
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
                                                    margin: "auto",
                                                    '& .MuiTooltip-arrow': {
                                                        color: '#4d5d53',
                                                    },
                                                },
                                            },
                                        }}>
                                        <StyledTableCell>Beta</StyledTableCell>
                                    </Tooltip>
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
        </>
    )
}

export default CompanyPage


