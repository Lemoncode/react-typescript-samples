import { createStyles } from "@mui/material";
import { makeStyles } from "@mui/material/styles";
import * as React from "react";
import { RouteComponentProps } from "react-router-dom";

const useStyles = makeStyles(theme =>
    createStyles({
        card: {
            maxWidth: 400,
            margin: "0 auto"
        }
    })
)

interface Props extends Route { }