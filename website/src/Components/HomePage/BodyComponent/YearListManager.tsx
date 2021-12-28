import { Component } from "react";
import React from "react";
import { YearListComponent } from "./YearList";
import { IActivitiesStruct } from "../../Utils/Interfaces/IActivities";


interface YearListManagerProps
{
    activities: IActivitiesStruct;
    toggleSearch: () => void;
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
        var activites = this.props.activities.projects;
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
            e.push(<div><YearListComponent year={y} activities={this.props.activities}/></div>)
        }
        return e;
    }

    render()
    {
        var allYears= this.relevantYearsToList();
        console.log(allYears);
        return (
            <div className="yearlistmanager" onClick={this.props.toggleSearch}>
                {this.state.allYears.map(year => <YearListComponent activities={this.props.activities} year={year}/>)}
            </div>
        )
    }
}