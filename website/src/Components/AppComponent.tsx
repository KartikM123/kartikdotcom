import { Component } from "react";
import React from "react";
import { TitleComponent } from "./HomePage/TitleComponent";
import { YearListManagerComponent } from "./HomePage/YearListManager";

interface AppComponentProps 
{

}
export class AppComponent extends Component<AppComponentProps> {
    render()
    {
        return(
            <div>
                <TitleComponent />
                <YearListManagerComponent/>
            </div>
        );
    }
}