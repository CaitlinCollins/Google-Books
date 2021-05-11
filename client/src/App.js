import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import NoMatch from "./pages/noMatch";
import "./style.css";



function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={["/", "/search"]}>
                        <Search />
                    </Route>
                    <Route exact path='/saved'>
                        <Saved />
                    </Route>
                    <Route >
                        <NoMatch />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App;