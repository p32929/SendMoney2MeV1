import React, {useEffect} from 'react';
import {useOvermind} from '../Others/OvermindHelper'
import Grid from "@material-ui/core/Grid";
import TopWelcomeMessages from "./TopWelcomeMessages";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {NodeFetchHelper} from "../Others/NodeFetchHelper";
import CircularProgress from "@material-ui/core/CircularProgress";
import OurListItem from "./Items/OurListItem";
import Typography from "@material-ui/core/Typography";

const Whole = (props) => {
    const {actions, state} = useOvermind()
    useEffect(() => {
        if (!state.countries) {
            NodeFetchHelper.get('https://api.npoint.io/7d794873dd098890278d', null, (status, data) => {
                actions.setCountried(data)
                actions.setSelectedIndex(1)
            })
        }
    }, [])

    return (
        <Grid style={{padding: 8}} container direction='column' justify='flex-start' alignContent='center'
              alignItems='center'>

            <TopWelcomeMessages/>

            {
                state.countries ?
                    <FormControl style={{width: '90%', backgroundColor: 'transparent'}} variant="filled">
                        <InputLabel
                            filled
                            required>Select your country</InputLabel>
                        <Select
                            onChange={(e) => {
                                var index = parseInt(e.target.value)
                                actions.setSelectedIndex(index)
                            }}
                            style={{backgroundColor: 'transparent'}} native displayEmpty>
                            <option aria-label="None" value={0}/>
                            {
                                state.countries?.map((item, index) => {
                                    return <option value={index + 1}>{item.country}</option>
                                })
                            }
                        </Select>
                    </FormControl>
                    : <CircularProgress/>
            }

            {
                state.selectedIndex > 0 && <Grid container style={{width: '95%', marginTop: 16}}>
                    {
                        state.countries[state.selectedIndex - 1].options.map((item, index) => {
                            return <OurListItem item={item}/>
                        })
                    }
                </Grid>
            }

        </Grid>
    );
};

export default Whole;