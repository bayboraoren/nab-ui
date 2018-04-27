import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles';
import {Paper} from "material-ui";

const styles = theme => ({
    root: theme.mixins.gutters({
        margin: '0 auto',
        width: '50%',
        marginTop: theme.spacing.unit * 3,
    }),
});

class FxDashboardPanel extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper elevation={2} className={classes.root}>
                HELLO
            </Paper>
        )
    }
}

FxDashboardPanel.propTypes = {};

export default withStyles(styles)(FxDashboardPanel);