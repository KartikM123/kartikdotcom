import React, { Component } from "react";
import {default as ActivitiesJson} from "../../Static/activities.json";
interface YearListProps
{
    year: string;
}
interface YearListState
{
    events: any[],
    renderSuccess: boolean
}
export class YearListComponent extends Component<YearListProps, YearListState>
{
    constructor(props: YearListProps)
    {
        super(props);
        this.state = 
        {
            events: [],
            renderSuccess: false
        }

        this.activitiesToElement = this.activitiesToElement.bind(this);
    }

    componentWillMount()
    {
        var activites = ActivitiesJson.projects;
        var relevantActivities: any[] = [];
        for (var activity in activites)
        {
            var element = activites[activity];
            if (element.year == this.props.year)
            {
                relevantActivities.push(element);
            }
        }

        this.setState((state,props) => {
            return {
                events: relevantActivities,
                renderSuccess: true
            }
        })
    }

    activitiesToElement()
    {
        var e = []
        var allEvents = this.state.events;
        for (var activity in allEvents)
        {
            var i = allEvents[activity]
            e.push(<li key={i.name}>{i.name} {i.date}</li>)
        }
        return e;
    }
    render()
    {
        var activitiesElement = this.activitiesToElement()
        return (
            <div>
                <h2> {this.props.year} </h2>
                <ul>
                {activitiesElement}
                </ul>
            </div>
        );
    }
}