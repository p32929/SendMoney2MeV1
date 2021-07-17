import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgHelper from "./SvgHelper";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import {Constants} from "./Constants";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const getThemeObj = (theme) => {
    return {}
}

const useStyles = makeStyles((theme) => (getThemeObj(theme)))

const jsonData = [
    {
        country: "Bangladesh",
        options: [
            {
                title: "bKash",
                logo: "https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg",
                descriptopm: "Account number: 01796306262"
            }
        ]
    },
    {
        country: "Bangladesh",
        options: [
            {
                title: "bKash",
                logo: "https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg",
                descriptopm: "Account number: 01796306262"
            }
        ]
    },
    {
        country: "Bangladesh",
        options: [
            {
                title: "bKash",
                logo: "https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg",
                descriptopm: "Account number: 01796306262"
            }
        ]
    },

]

const Whole = (props) => {
    const classes = useStyles();

    const [data, setData] = useState(jsonData)
    const [selectedOption, setSelectedOption] = useState(-1)
    const [open, setOpen] = useState(true)

    useEffect(() => {
        // NodeFetchHelper.get('https://api.npoint.io/4d142c7ac93099c77456', null, null, (status, jsonData) => {
        //     setData(jsonData)
        // })
    }, [])

    const welcomeTexts = `Send money directly to `
    const receiversName = "Fayaz Bin Salam"

    return (
        <Grid container direction='column'>
            <AppBar position='sticky'>
                <Toolbar style={{backgroundColor: "#2196F3"}}>
                    <Typography variant='h6' style={{flexGrow: 1}}>
                        SendMoney2Me
                    </Typography>
                    <IconButton>
                        <SvgHelper
                            path={Constants.github_icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Paper style={{margin: 16, padding: 16}}>
                <Grid container direction='row'>
                    <Grid item style={{marginRight: 16}}>
                        <SvgHelper size={36} color="#757575" path={Constants.gift_icon}/>
                    </Grid>
                    <Grid item xs container direction='column'>
                        <Typography style={{color: "#212121", fontSize: 16}}>Welcome</Typography>
                        <Typography style={{color: "#757575", fontSize: 14}}>{welcomeTexts}</Typography>
                        <Typography style={{color: "#757575", fontSize: 14}}><b>{receiversName}</b></Typography>
                    </Grid>
                </Grid>
            </Paper>

            <Paper style={{marginBottom: 16, marginLeft: 16, marginRight: 16, padding: 16}}>
                <Grid container direction='row'>
                    <Grid item style={{marginRight: 16}}>
                        <SvgHelper size={36} color="#757575" path={Constants.menu_icon}/>
                    </Grid>
                    <Grid item xs container direction='column'>
                        <Typography style={{color: "#212121", fontSize: 16}}>Select an option from below</Typography>
                        <Select open={open}
                                onOpen={()=> {
                                    setOpen(true)
                                }}
                                onClose={() => {
                                    setOpen(false)
                                }} onChange={(event) => {
                            setSelectedOption(parseInt(event.target.value))
                        }} style={{marginTop: 16, marginRight: 16}}>
                            {
                                data?.map((item, index) => {
                                    return <MenuItem value={index}>{item?.country}</MenuItem>
                                })
                            }
                        </Select>
                    </Grid>
                </Grid>
            </Paper>

            {
                selectedOption
            }
        </Grid>
    );
}

export default Whole;