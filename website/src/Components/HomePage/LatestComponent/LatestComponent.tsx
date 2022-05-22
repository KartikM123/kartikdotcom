import React from "react";
import { Component } from "react";
import "../../StyleSheets/BodyStyles/Body.css"
import packageJSON from "../../../../package.json";
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
        let version = packageJSON.version;
        return (
            <div className="body fadeIn">
                <video autoPlay playsInline muted loop className="video">
                    <source src="https://dwvo2npct47gg.cloudfront.net/videos/yamsday2021.mp4" type="video/mp4"/>
                </video>
                <a className="version" href="https://github.com/KartikM123/kartikdotcom/blob/main/CHANGELOG.md">
                    version v{version} 
                </a>
            </div>
        )
    }
}