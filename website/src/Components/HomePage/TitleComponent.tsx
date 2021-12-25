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
                <div className="gridWrapper">
                        <div className="githubOption"><a href="https://github.com/KartikM123">github</a></div>
                        <div className="linkedinOption"> <a href="https://www.linkedin.com/in/kartik-mahajan-36b885117/">linkedin</a> </div>
                        <div className="randomOption"> <a href="https://www.youtube.com/watch?v=ZmrJUnkOZRE&ab_channel=kyle">random</a>  </div> 
                </div>
            
                <div className="nameWrapper">
                    <div className="fullName"> kartik mahajan</div><div className="fancyPeriod">.</div>
                </div>
            </div>
        );
    }
}