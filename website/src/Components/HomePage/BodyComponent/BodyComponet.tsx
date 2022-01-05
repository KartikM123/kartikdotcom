import { Component } from "react";
import { YearListManagerComponent } from "./YearListManager";
import '../../StyleSheets/BodyStyles/Body.css';
import React from "react";
import { IActivitiesStruct, IEventsStruct } from "../../Utils/Interfaces/IActivities";
import {default as ActivitiesJson} from "../../../Static/activities.json";
import { randomFill, randomInt } from "crypto";

interface BodyProps
{
}

interface BodyState
{
    activities: IActivitiesStruct;
}
export class BodyComponent extends Component<BodyProps, BodyState>
{
    constructor(props: BodyProps)
    {
        super(props);

        let dummy: IEventsStruct = {name: "", date: "", year: "", tag: ""};
        let dummyActivities: IActivitiesStruct = {version: "", projects: [dummy]};
        this.state = {
            activities: dummyActivities
        }

        this.toggleSearch = this.toggleSearch.bind(this);

    }

    componentWillMount()
    {
        this.setState(() => {
            return {
                activities: ActivitiesJson
            }
        })
    }
    toggleSearch() 
    {
        var test = this.state.activities;
        test.projects.splice(0,1);
 
        this.setState(() => {
            return {
                activities: test
            };
        })
        this.forceUpdate();  //

    }
    
    render()
    {
        console.log(this.state.activities);
        return(
            <div className = "body">
                <YearListManagerComponent activities={this.state.activities} toggleSearch={this.toggleSearch} />
            </div>
        );
    }
}