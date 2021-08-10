import React from "react";
import { CircularProgress, Typography } from "@material-ui/core";

const Loading = () => {

    const customStyle = {
        "textAlign": "center",
        "margin": "auto",
        "display": "block",
        "marginTop": "30px"
    };

    return (
        <div style={customStyle}>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </div>
    )
}

export default Loading