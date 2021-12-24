import React, { Component } from "react";

interface TitleComponentProps
{
}
export class TitleComponent extends Component<TitleComponentProps>
{
    constructor(props: TitleComponentProps)
    {
        super(props);
    }
    render()
    {
        return (
            <div>
                <h1> Kartik Mahajan </h1>
            </div>
        );
    }
}