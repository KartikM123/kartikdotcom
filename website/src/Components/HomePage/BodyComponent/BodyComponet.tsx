import { Component } from "react";
import { YearListManagerComponent } from "./YearListManager";
import '../../StyleSheets/BodyStyles/Body.css';
import '../../StyleSheets/Tags.css';
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
    tagFilter: string;
}

const knownTags = ["project", "research"]

export class BodyComponent extends Component<BodyProps, BodyState>
{
    constructor(props: BodyProps)
    {
        super(props);

        let dummy: IEventsStruct = {name: "", date: "", year: "", tag: ""};
        let dummyActivities: IActivitiesStruct = {version: "", projects: [dummy]};
        this.state = {
            activities: dummyActivities,
            tagFilter: ""
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
        if (this.state.tagFilter == tag){
            this.setState(() => {
                return {
                    activities: ActivitiesJson,
                    tagFilter: ""
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

        this.setState(() => {
            return {
                activities: test,
                tagFilter: tag
            };
        });
    }

    tagClickProxy(tag:string) { 
        return (() => {this.toggleSearch(tag)});
    }

    generateTags()
    {
        var e = [];
        console.log(this.state.tagFilter + "ASdva")
        
        for (var t in knownTags) {
            var tag = knownTags[t];
            if (this.state.tagFilter == "" || this.state.tagFilter == tag) {
                var tagClassName = tag + "Tag";
                e.push(<p className={tagClassName + " genericTag"} onClick={this.tagClickProxy(tag)}> {tag} </p>)
            }
        }

        return e;
    }
    
    render()
    {
        console.log(this.state.activities);
        var tagsGenerated = this.generateTags();
        return(
            <div className = "body">
                <div>
                    {tagsGenerated}
                </div>
                <YearListManagerComponent activities={this.state.activities} toggleSearch={this.toggleSearch} />
            </div>
        );
    }
}