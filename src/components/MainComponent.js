import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Contact from "./ContactComponent";
import Home from "./HomeComponent";
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { Redirect, Route, Switch } from "react-router-dom";
import DishDetail from "./DishdetailComponent";
import About from "./AboutComponent";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        };
    }

    render() {
        const HomePage = () => {
            return (
                //Tai sao dung filter lại ko chạy được.
                console.log(this.state.dishes.filter((dish) => dish.featured === true)),
                <Home
                    dish={this.state.dishes.find((dish) => dish.featured === true)}
                    promotion={this.state.promotions.find((promo) => promo.featured === true)}
                    leader={this.state.leaders.find((leader) => leader.featured === true)}
                />
            )
        }
        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.state.dishes.find((dish) => dish.id === parseInt(match.params.dishId, 10))}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        };
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default Main;