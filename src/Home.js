import React, {useState} from 'react'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Name from './Name'
import Programming from './Programming'
import Welding from './Welding'
import './index.css'

function Home() {
    const [navLetter, setNavLetter] = useState ('W')

    return (
        <div className='content'>
            <Router>
                <Switch>
                    <Route path='/profile' exact>
                        <Name 
                            setNavLetter={setNavLetter}
                        />
                    </Route>

                    <Route path='/programming' >
                            <Programming 
                                navLetter={navLetter}
                                setNavLetter={setNavLetter} 
                            />
                    </Route>

                    <Route path='/welding'>
                        <Welding
                            navLetter={navLetter}
                            setNavLetter={setNavLetter} 
                        />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Home
