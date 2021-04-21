import React from "react";
import {Switch, Route} from "react-router-dom";
import About from "./Components/About/About.component";
import Home from "./Components/Home/Home.component";
import {Products} from "./Components/Products/Products.component"
export default class Routers extends React.Component{
    render(){
        return(
        <section>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/products" exact component={Products}/>
                <Route path="/about" exact component={About}/>
            </Switch>
        </section>
        );
    }
}