import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";



function App() {
    return (
        <Router>
            <div>
                <Header />
                <NavBar />
                <Switch>
                    <Route exact path={["/", "/search"]}>
                        <Search />
                    </Route>
                    <Route exact path='/saved'>
                        <Saved />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App;