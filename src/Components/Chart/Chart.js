import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

export default function Chart() {
    const [cData, setCData] = useState({})
    const params = useParams()
    const cname = params?.symbol

    useEffect(() => {

        async function getNewsData() {
            let searchurl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${cname}&apikey=8TRCETRAA6QT8B7T`
            fetch(searchurl).then(response => response.json()).then(result => {
                setCData(result?.["Monthly Time Series"])
                // console.log(result?.["Monthly Time Series"]);
            })
        }
        getNewsData()
    }, [params])
    var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let cdata = []
    if (cData) {
        Object.entries(cData).forEach(x => {
            let date = x[0]
            let month = parseInt(date.substring(5, 7))
            let year = parseInt(date.substring(0, 4))
            cdata.push({ date: m[month - 1] + " " + year, "high": x[1]["2. high"], "low": x[1]["3. low"] })
        })
    }
    cdata.reverse()
    console.log(cdata);
    return (
        <AreaChart
            width={1000}
            height={400}
            data={cdata}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="high"
                stackId="1"
                stroke="#8884d8"
                fill="#8884d8"
            />
            <Area
                type="monotone"
                dataKey="low"
                stackId="1"
                stroke="#82ca9d"
                fill="#82ca9d"
            />
        </AreaChart>
    );
}