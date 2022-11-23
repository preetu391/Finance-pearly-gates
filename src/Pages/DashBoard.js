import React from 'react'
import CardContainer from '../Components/Cards/CardContainer';
import { useOutletContext } from "react-router-dom";

const DashBoard = () => {

    const [array] = useOutletContext();

    return (
        <>
            <CardContainer array={array} />
        </>
    )
}

export default DashBoard