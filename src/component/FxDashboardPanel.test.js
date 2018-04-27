import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import FxDashboardPanel from "./FxDashboardPanel";
import {Paper} from "material-ui";


describe('<FxDashboardPanel/>', () => {

    const fxDashboardPanel = mount(<FxDashboardPanel/>)

    it('fx dashboard panel is visible', () => {
        expect(fxDashboardPanel.find(Paper)).to.have.length(1)
    })

})