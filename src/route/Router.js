import React from 'react';
import {
    AdminHomePage,
    ApplicationFormPage,
    CreateTripPage,
    ListTripsPage,
    LoginPage,
    TripDetailsPage,
    HomePage
} from "../pages"
import { BrowserRouter, Switch, Route } from "react-router-dom";
export const Router = () => {
    return (
      
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"}>
                    <HomePage />
                </Route>
                <Route exact path={"/trips/list"}>
                    <ListTripsPage />
                </Route>
                <Route exact path={"/trips/application"}>
                    <ApplicationFormPage />
                </Route>
                <Route exact path={"/login"}>
                    <LoginPage />
                </Route>
                <Route exact path={"/admin/trips/list"}>
                    <AdminHomePage />
                </Route>
                <Route exact path={"/admin/trips/create"}>
                    <CreateTripPage />
                </Route>
                <Route exact path={"/admin/trips/:id"}>
                    <TripDetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
       
    );
};

