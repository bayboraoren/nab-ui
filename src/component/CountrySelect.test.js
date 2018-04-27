import React from 'react'
import {mount} from 'enzyme';
import {expect} from 'chai'
import {InputLabel, Paper, Select} from "material-ui";
import CountrySelect from "./CountrySelect";
import * as CountryDTOList from "../dto/CountryDTO"

describe('<CountrySelect/>', () => {

    const testCountries = CountryDTOList.testCountyList
    const countrySelect = mount(<CountrySelect countries={testCountries}/>)

    it('when load, show component', () => {
        expect(countrySelect.find(Select)).to.have.length(1)
    })

    it('when load, show component default text is "Select Country"', () => {
        expect(countrySelect.find(InputLabel).text()).to.equal("Select Country")
    })

    it('when click, show list of country names', () => {
        //TODO implement
    })

    it('when click, show list of country flags', () => {
        //TODO implement
    })

    it('when select, show component default text is selected country', () => {
        //TODO implement
    })


    it('when select, show component default flag is selected country\'s flag', () => {
        //TODO implement
    })







})