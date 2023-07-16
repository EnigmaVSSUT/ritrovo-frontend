import React, { useState, useEffect } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
    const [searchValue, setSearchValue] = useState("");
    const defaultSearchValue = "Search";

    useEffect(() => {
        const storedSearchValue = localStorage.getItem("searchValue");
        if (storedSearchValue) {
            setSearchValue(storedSearchValue);
        } else {
            setSearchValue(defaultSearchValue);
        }
    }, []);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
        localStorage.setItem("searchValue", value);
    };

    const handleSearchFocus = () => {
        if (searchValue === defaultSearchValue) {
            setSearchValue("");
        }
    };

    const handleSearchBlur = () => {
        if (searchValue === "") {
            setSearchValue(defaultSearchValue);
        }
    };

    return (
        <Stack marginLeft={"300px"} position={"absolute"} marginTop={"30px"} height={"100px"}>
            <TextField
                value={searchValue}
                onChange={handleSearchChange}
                variant="outlined"
                size="small"
                sx={{ width: '25ch', '& .MuiOutlinedInput-root': {
                    borderRadius: '50px',
                  }, }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ color: 'action.active' }} />
                        </InputAdornment>
                    ),
                }}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
            />
        </Stack>
    );
};
export default Topbar;