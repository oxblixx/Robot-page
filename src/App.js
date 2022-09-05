import React, { Component } from 'react'
import Cardlist from './Cardlist'
import { robots } from './robots'
import Searchbox from './Searcbox'



class App extends Component {
    render (){
        return(
            <div className='tc'>
                <h1 className='green'>Robofriends Site</h1>
                <Searchbox />
                <Cardlist className="nb5" robots = { robots } />
            </div>
        )
    }
}
export default App