
import TabBar from 'components/TabBar';
import Categories from 'pages/Categories';
import Home from 'pages/Home/Home';
import Reservations from 'pages/Reservations';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

const Routes: React.FC = () => {
    return (
        <Router>
            <TabBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/categories" component={Categories} />
                <Route exact path="/reservations" component={Reservations} />
            </Switch>
        </Router>

    );
};

export default Routes