import { Component } from "react";
import { YearListManagerComponent } from "./YearListManager";
import '../../StyleSheets/BodyStyles/Body.css';
import React from "react";
import { IActivitiesStruct, IEventsStruct } from "../../Utils/Interfaces/IActivities";
import {default as ActivitiesJson} from "../../../Static/activities.json";

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
    }

    componentWillMount()
    {
        this.setState(() => {
            return {
                activities: ActivitiesJson
            }
        })
    }
    toggleSearch = () => 
    {
        var test = this.state.activities;
        test.projects.push(test.projects[0]);
        this.setState(() => {
            return {
                activities: test
            };
        })
        console.log("here");
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