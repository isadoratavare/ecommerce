import Home from 'pages/Home';
import { BrowserRouter, Route } from 'react-router-dom';



export const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/">
                <Home />
            </Route>
        </BrowserRouter>
    );
};