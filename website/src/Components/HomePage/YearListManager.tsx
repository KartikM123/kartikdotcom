import { Component } from "react";
import {default as ActivitiesJson} from "../../Static/activities.json";
import React from "react";
import { YearListComponent } from "./YearList";
interface YearListManagerProps
{
}
export class YearListManagerComponent extends Component<YearListManagerProps,{allYears: any[]}>
{
    constructor(props: YearListManagerProps)
    {
        super(props);
        this.state = {
            allYears: []
        };

        this.relevantYearsToList = this.relevantYearsToList.bind(this);
    }
    componentWillMount()
    {
        var activites = ActivitiesJson.projects;
        var relevantYears: any[] = [];
        for (var activity in activites)
        {
            var a = activites[activity];
            if (!(relevantYears.includes(a.year)))
            {
                relevantYears.push(a.year);
            }
        }
        this.setState((state, props) => {
            return ({
                allYears: relevantYears
            })
        })
    }

    relevantYearsToList()
    {
        var e= [];
        for (var year in this.state.allYears)
        {
            var y = this.state.allYears[year];
            e.push(<div><YearListComponent year={y}/></div>)
        }
        return e;
    }

    render()
    {
        var allYears= this.relevantYearsToList();
        console.log(allYears);
        return (
            <div className="yearlistmanager">
                {this.state.allYears.map(year => <YearListComponent year={year}/>)}
            </div>
        )
    }
}