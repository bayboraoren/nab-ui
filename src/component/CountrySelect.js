import React, {Component} from 'react'
import {withStyles} from 'material-ui/styles';
import {InputLabel} from "material-ui/Input/index";
import {FormControl, MenuItem, Select} from "material-ui";
import PropTypes from 'prop-types'
import * as logger from "../Logger"

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});


class CountySelect extends Component {

    state = {
        country_code: '',
        name: 'hai',
    };


    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };


    render() {
        const {classes, countries} = this.props;

        logger.info(this, "country list is," + JSON.stringify(countries))

        return (
            <div>
                <form className={classes.root} autoComplete="off">
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="country-input">Select Country</InputLabel>
                        <Select
                            value={this.state.country_code}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'country_code',
                                id: 'country-input',
                            }}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>

                            {countries.map((country) =>
                                <MenuItem
                                    key={country.code}
                                    value={country.code}>
                                    <img src={"flags/"+country.code+".png"}/>
                                    <span>{country.name}</span>
                                </MenuItem>
                            )}

                        </Select>
                    </FormControl>
                </form>
            </div>
        )
    }
}

CountySelect.propTypes = {
    countries: PropTypes.array.isRequired,
};

export default withStyles(styles)(CountySelect);