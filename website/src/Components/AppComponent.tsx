import { Component } from "react";
import React from "react";
import { TitleComponent } from "./HomePage/TitleComponent";
import { YearListManagerComponent } from "./HomePage/BodyComponent/YearListManager";
import './StyleSheets/General.css';
import { BodyComponent } from "./HomePage/BodyComponent/BodyComponet";

interface AppComponentProps 
{

}
export class AppComponent extends Component<AppComponentProps> {
    render()
    {
        return(
            <div className="main">
                <TitleComponent />
                <BodyComponent/>
            </div>
        );
    }
}