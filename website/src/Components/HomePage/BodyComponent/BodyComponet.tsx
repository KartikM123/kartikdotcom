import { Component } from "react";
import { YearListManagerComponent } from "./YearListManager";
import '../../StyleSheets/BodyStyles/Body.css';
import React from "react";

interface BodyProps
{

}
export class BodyComponent extends Component<BodyProps, {}>
{
    constructor(props: BodyProps)
    {
        super(props);
    }
    
    render()
    {
        return(
            <div className = "body">
                <YearListManagerComponent />
            </div>
        );
    }
}