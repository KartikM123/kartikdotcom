import React, { Component } from "react";

interface YearListProps
{
    year: string;
}
export class YearListComponent extends Component<YearListProps>
{
    render()
    {
        return (
            <div>
                <p> {this.props.year} </p>
            </div>
        );
    }
}