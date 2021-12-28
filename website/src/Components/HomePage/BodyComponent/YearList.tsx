import React, { Component } from "react";
import '../../StyleSheets/BodyStyles/YearList.css';
import '../../StyleSheets/Tags.css';
import { PopUpComponent } from "../PopUp";
import { IActivitiesStruct } from "../../Utils/Interfaces/IActivities";
interface YearListProps
{
    year: string;
    activities: IActivitiesStruct;
}

interface YearListState
{
    events: any[],
    renderSuccess: boolean,
    toggleOn: boolean,
    eventToToggle: string,
    tagToToggle: string,
    activities: IActivitiesStruct
}
export class YearListComponent extends Component<YearListProps, YearListState>
{
    constructor(props: YearListProps)
    {
        super(props);
        this.state = 
        {
            events: [],
            renderSuccess: false,
            toggleOn: false,
            eventToToggle: "",
            tagToToggle: "",
            activities: this.props.activities
        }

        this.activitiesToElement = this.activitiesToElement.bind(this);
        this.dateToString = this.dateToString.bind(this);
    }

    componentWillMount()
    {
        var activites = this.state.activities.projects;
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

    dateToString(d: string)
    {
        switch(d)
        {
            case "01":
                return "January";
            case "02":
                return "February";
            case "03":
                return "March";
            case "04":
                return "April";
            case "05":
                return "May";
            case "06":
                return "June";
            case "07":
                return "July";
            case "08":
                return "August";
            case "09":
                return "September";
            case "10":
                return "October";
            case "11":
                return "November";
            case "12":
                return "December";
            default:
                return "mistake"
        }
    }

    togglePopUp(eventName: string, tagName: string)
    {

        return (() => 
                this.setState((state,props) => {
                    return {
                        toggleOn: true,
                        eventToToggle: eventName,
                        tagToToggle: tagName
                    };
                }));
    }

    togglePopUpOff = () => 
    {
        this.setState(() => {
            return {
                toggleOn: false,
                eventToToggle: ""
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

            var date = i.date;
            var dateSplit = date.split("/");
            var monthToString = this.dateToString(dateSplit[0]);
            var donePrettyDate = "  "+ monthToString + ", " + dateSplit[1] + " " + dateSplit[2];

            var tagClassName = i.tag + "Tag"
            e.push(
            <li className={"yearTab " + tagClassName + "Tab"} key={i.name}>
                {i.name} 
                <p className="eventDate">  {donePrettyDate}  </p> 
                <p className="linkStyle" onClick={this.togglePopUp(i.name, i.tag)} >  link </p>
                <p className={tagClassName + " genericTag"}> {i.tag} </p>
            </li>)
        }
        return e;
    }
    render()
    {
        var activitiesElement = this.activitiesToElement()
        return (
            <div className="yearItem">
                <div className="yearName"> {this.props.year} </div>
                <ul className = "yearList">
                    {activitiesElement}
                </ul>
                {this.state.toggleOn ? <PopUpComponent year={this.props.year} eventName={this.state.eventToToggle} tagName={this.state.tagToToggle} toggle={this.togglePopUpOff}/> : null}
            </div>
        );
    }
}