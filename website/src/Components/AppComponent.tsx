import { Component } from "react";
import React from "react";
import { TitleComponent } from "./HomePage/TitleComponent";
import { YearListComponent } from "./HomePage/YearList";

interface AppComponentProps 
{

}
export class AppComponent extends Component<AppComponentProps> {
    render()
    {
        return(
            <div>
                <TitleComponent />
                <YearListComponent year="2021"/>
            </div>
        );
    }
}