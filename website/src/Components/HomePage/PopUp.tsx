import React, { Component } from "react";
import {default as ActivitiesJson} from "../../Static/activities.json";
import '../StyleSheets/PopUp.css';
interface PopUpProps
{
    year: string;
    eventName: string;
    toggle: () => void;
}
interface PopUpState
{
    open: boolean
}

export class PopUpComponent extends Component<PopUpProps, PopUpState>
{
    constructor(props:PopUpProps)
    {
        super(props);
        this.state = 
        {
            open: true
        }
    }

    handleClick = () => {
        this.props.toggle();
    }

    render()
    {
        return (
            <div className="modal">
                <div className="modal_content">
                    <span className="close" onClick={this.handleClick}>&times;    </span>
                    <p>I'm A Pop Up!!!</p>
            </div>
        </div>
        )
    }
}