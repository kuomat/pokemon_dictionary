import React from 'react'

import classes from './PokeRoot.module.css'
import SearchBar from './SearchBar'
import PokeTable from './PokeTable'


const PokeRoot = () => {
    return <React.Fragment>
        <SearchBar />
        <PokeTable />
    </React.Fragment>
}

export default PokeRoot