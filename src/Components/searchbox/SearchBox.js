import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const SearchBox = ({ onChangeHandler }) => {

    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '80%' },
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    border: 0,
                    borderColor: "white"
                }}
                noValidate
                autoComplete="off"
                margin="auto"
            >
                <TextField sx={{borderRadius: 1, borderColor: "white", textDecorationColor: "white", backgroundColor: "white", border: 0}} label="Search any company..." variant="outlined" onChange={onChangeHandler}/>
            </Box>
        </div>
    )
}

export default SearchBox