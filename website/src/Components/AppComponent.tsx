import { Component } from "react";
import React from "react";
import { TitleComponent } from "./HomePage/TitleComponent";
import './StyleSheets/General.css';
import { TimelineComponent } from "./HomePage/TimelineComponent/TimelineComponet";
import { MenuComponent } from "./HomePage/MenuComponent/MenuComponent";
import { LatestComponent } from "./HomePage/LatestComponent/LatestComponent";

interface AppComponentProps 
{

}

interface AppComponentState
{
    activeBody: string | null;
}
export class AppComponent extends Component<AppComponentProps, AppComponentState> {
    constructor(props: AppComponentProps) {
        super(props);
        this.state = {
            activeBody: ""
        }
    }
    menuCallBack = (item: string) => {
        this.setState({
                activeBody: item
            }
        );
    }
    render()
    {
        let bodyComponent;
        switch (this.state.activeBody) {
            case "Latest": 
                bodyComponent = <LatestComponent />
                break;
            case "Timeline":
                bodyComponent = <TimelineComponent />
                break;
            default:
                bodyComponent = <LatestComponent />
        }

        return(
            <div className="background">
                <div className="main">
                    <TitleComponent />
                    <MenuComponent menuCallback={this.menuCallBack}/>
                    {bodyComponent}
                </div>
            </div>
        );
    }
}