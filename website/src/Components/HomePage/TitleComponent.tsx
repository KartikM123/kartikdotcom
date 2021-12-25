import React, { Component } from "react";
import '../StyleSheets/HomePage.css';
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
            <div className="title">
                <div className="optionGrid">
                    <p className="githubOption"><a href="https://github.com/KartikM123">github</a></p>
                    <p className="linkedinOption"> <a href="https://www.linkedin.com/in/kartik-mahajan-36b885117/">linkedin</a> </p>
                    <p className="randomOption"> <a href="https://www.youtube.com/watch?v=ZmrJUnkOZRE&ab_channel=kyle">random</a>  </p>
                </div>
                
                <div className="nameWrapper">
                    <p className="fullName"> kartik mahajan</p><p className="fancyPeriod">.</p>
                </div>
            </div>
        );
    }
}