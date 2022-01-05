import { Component } from "react";
import React from "react";
import { YearListComponent } from "./YearList";
import { IActivitiesStruct } from "../../Utils/Interfaces/IActivities";


interface YearListManagerProps
{
    activities: IActivitiesStruct;
    toggleSearch: () => void;
}

interface YearListManagerState
{
    allYears: any[],
    activities: IActivitiesStruct
}

export class YearListManagerComponent extends Component<YearListManagerProps, YearListManagerState>
{
    constructor(props: YearListManagerProps)
    {
        super(props);
        this.state = {
            allYears: [],
            activities: this.props.activities
        };

        this.relevantYearsToList = this.relevantYearsToList.bind(this);
    }
    componentWillMount()
    {
    
        this.renderProjects();
    }
    sameArrays(arr1: any[], arr2: any[])
    {
        if ( arr1.length != arr2.length)
        {
            return false;
        }
        return (arr1.every((val, index) => {  console.log(val); return arr2.includes(val);}))
    }

    renderProjects()
    {
        var activites = this.state.activities.projects;
        var relevantYears: any[] = [];
        for (var activity in activites)
        {
            var a = activites[activity];
            if (!(relevantYears.includes(a.year)))
            {
                relevantYears.push(a.year);
            }
        }
        if (!this.sameArrays(relevantYears, this.state.allYears))
        {
            console.log('UPDATE MANAGER')
            console.log(relevantYears);
            console.log(this.state.allYears);
            this.setState((state, props) => {
                return ({
                    allYears: relevantYears
                })
            })
        }
    }

    relevantYearsToList()
    {
        var e= [];
        for (var year in this.state.allYears)
        {
            var y = this.state.allYears[year];
            e.push(<div><YearListComponent year={y} activities={this.state.activities}/></div>)
        }
        return e;
    }

    render()
    {
        this.renderProjects();
        var allYears= this.relevantYearsToList();
        //console.log(allYears);
        return (
            <div className="yearlistmanager" onClick={this.props.toggleSearch}>
                {this.state.allYears.map(year => <YearListComponent activities={this.props.activities} year={year}/>)}
            </div>
        )
    }
}