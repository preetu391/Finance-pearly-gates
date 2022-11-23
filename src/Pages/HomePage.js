import React, { useEffect, useState } from 'react'
import ResponsiveDrawer from '../Components/sidebar/SideBarResponsive'
import { Box } from "@mui/system";
import data from '../Components/data.json'
import { Outlet } from 'react-router-dom';

const HomePage = () => {

    const [searchField, setSearchField] = useState('')
    const [filteredData, setFilteredData] = useState(data)

    console.log(data)

    useEffect(() => {
        const newFilteredData = data.filter((ele) => {
            return ele.ShortName.toLocaleLowerCase().includes(searchField);
        })

        setFilteredData(newFilteredData)
    }, [searchField])


    const onSearchChange = (event) => {

        const searchFieldString = event.target.value.toLocaleLowerCase();

        setSearchField(searchFieldString)
    }

    const drawerWidth = 240;
    const topHeight = 60;

    return (
        <>
            <Box sx={{backgroundColor: "#42C2FF"}}><ResponsiveDrawer onChangeHandler={onSearchChange} /></Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 2,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    height: { sm: `calc(100% - ${topHeight}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    mt: { xs: `${topHeight + 50}px`, sm: `${topHeight+50}px` },
                }}
            >
                <Outlet context={[filteredData]}/>
            </Box>
        </>
    )
}

export default HomePage