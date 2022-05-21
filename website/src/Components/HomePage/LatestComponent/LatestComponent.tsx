import React from "react";
import { Component } from "react";
interface LatestComponentProps
{
}
export class LatestComponent extends Component<LatestComponentProps>
{
    constructor(props: LatestComponentProps)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="body">
                <video autoPlay playsInline muted loop>
                    <source src="https://dwvo2npct47gg.cloudfront.net/videos/yamsday2021.mp4" type="video/mp4"/>
                </video>
            </div>
        )
    }
}