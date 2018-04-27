import React, {Component} from 'react'
import './App.css'
import FxDashboardPanel from "./component/FxDashboardPanel"
import CountrySelect from "./component/CountrySelect"
import * as CountryDTOList from "./dto/CountryDTO"

class App extends Component {

    testCountries = CountryDTOList.testCountyList

    render() {
        return (
            <div>
                <FxDashboardPanel/>
                <CountrySelect countries={this.testCountries}/>
            </div>
        );
    }
}

export default App;
