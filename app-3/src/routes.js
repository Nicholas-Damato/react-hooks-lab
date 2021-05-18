import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Fflist from './components/Fflist'
import Ffchar from './components/Ffchar'


export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/list' component={Fflist} />
        <Route path='/character/:id' component={Ffchar} />
    </Switch>
)