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
    tagFilters: string [];
}


export class BodyComponent extends Component<BodyProps, BodyState>
{
    constructor(props: BodyProps)
    {
        super(props);

        let dummy: IEventsStruct = {name: "", date: "", year: "", tag: ""};
        let dummyActivities: IActivitiesStruct = {version: "", projects: [dummy]};
        this.state = {
            activities: dummyActivities,
            tagFilters: []
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

    toggleSearch(tag: string) 
    {
        if (this.state.tagFilters.includes(tag)){
            this.setState(() => {
                return {
                    activities: ActivitiesJson,
                    tagFilters: []
                };
            });
            return;
        }
        var test: IActivitiesStruct = {version: "", projects: []};
        test.version = this.state.activities.version;
        console.log(tag)
        this.state.activities.projects.forEach((value: IEventsStruct) => {
            if (value.tag == tag) {
                test.projects.push(value);
            }
        })
        
        var newTagFilters: string[] = this.state.tagFilters;
        newTagFilters.push(tag);

        this.setState(() => {
            return {
                activities: test,
                tagFilters: newTagFilters
            };
        });
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