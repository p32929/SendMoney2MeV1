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
import {NodeFetchHelper} from '../Others/NodeFetchHelper'
import CircularProgress from "@material-ui/core/CircularProgress";

const getThemeObj = (theme) => {
    return {}
}

const useStyles = makeStyles((theme) => (getThemeObj(theme)))

const Whole = (props) => {
    const classes = useStyles();

    const [data, setData] = useState([])
    const [selectedOption, setSelectedOption] = useState(-1)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        NodeFetchHelper.get('https://api.npoint.io/ce98bec29331617dc4a1', null, null, (status, jsonData) => {
            setData(jsonData)
            setOpen(true)
        })
    }, [])

    const welcomeTexts = `Send money directly to `
    const receiversName = "Fayaz Bin Salam"

    return (
        <Grid container direction='column'>
            <AppBar position='sticky'>
                <Toolbar style={{backgroundColor: "#2196F3"}}>
                    <Typography variant='h6' style={{flexGrow: 1}}>
                        Send Money
                    </Typography>
                    <IconButton size='small' target="_blank" href='https://github.com/p32929/SendMoney2Me'>
                        <SvgHelper
                            path={Constants.github_icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <Paper style={{margin: 16, padding: 16}}>
                <Grid item xs container direction='column'>
                    <Typography style={{color: "#212121", fontSize: 16}}>Welcome</Typography>
                    <Typography style={{color: "#757575", fontSize: 14}}>{welcomeTexts}</Typography>
                    <Typography style={{color: "#757575", fontSize: 14}}><b>{receiversName}</b></Typography>
                </Grid>
            </Paper>

            <Paper style={{marginBottom: 16, marginLeft: 16, marginRight: 16, padding: 16}}>
                <Grid item xs container direction='column'>
                    <Typography style={{color: "#212121", fontSize: 16}}>You are sending money from</Typography>

                    {
                        data.length === 0 && <Grid container direction='row' justify='center'>
                            <CircularProgress style={{color: "#4CAF50", marginTop: 16}}/>

                        </Grid>
                    }

                    {
                        data.length > 0 && <Select open={data.length > 0 && open}
                                                   onOpen={() => {
                                                       setOpen(true)
                                                   }}
                                                   onClose={() => {
                                                       setOpen(false)
                                                   }} onChange={(event) => {
                            setSelectedOption(parseInt(event.target.value))
                        }} style={{marginRight: 16}}>
                            {
                                data?.map((item, index) => {
                                    return <MenuItem value={index}>{item?.country}</MenuItem>
                                })
                            }
                        </Select>
                    }
                </Grid>
            </Paper>

            {
                data[selectedOption]?.options.map((value, index) => {
                    return <Paper style={{marginBottom: 16, marginLeft: 16, marginRight: 16, padding: 16}}>
                        <Grid container direction='row'>
                            <Grid item>
                                <img style={{
                                    height: 36,
                                    width: 36,
                                    marginRight: 16,
                                    objectFit: 'cover'
                                }} src={data[selectedOption].options[index].logo}/>
                            </Grid>
                            <Grid item xs container direction='column'>
                                <Typography style={{
                                    color: "#212121",
                                    fontSize: 16,
                                }}>{data[selectedOption].options[index].title}</Typography>
                                <Typography style={{
                                    color: "#757575",
                                    fontSize: 14,
                                    whiteSpace: 'pre-line'
                                }}>{data[selectedOption].options[index].description}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                })
            }

        </Grid>
    );
}

export default Whole;