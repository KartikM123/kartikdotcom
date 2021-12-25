import { Component } from "react";
import React from "react";
import { TitleComponent } from "./HomePage/TitleComponent";
import { YearListManagerComponent } from "./HomePage/YearListManager";
import './StyleSheets/General.css';

interface AppComponentProps 
{

}
export class AppComponent extends Component<AppComponentProps> {
    render()
    {
        return(
            <div className="main">
                <TitleComponent />
                <YearListManagerComponent/>
            </div>
        );
    }
}