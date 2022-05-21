import React from "react";
import { Component } from "react";
interface MenuComponentProps
{
    menuCallback: (item:string) => void;
}

interface MenuComponentState
{
    clicked: string;
}
export class MenuComponent extends Component<MenuComponentProps, MenuComponentState>
{
    constructor(props: MenuComponentProps)
    {
        super(props);

        this.state = {
            clicked: ""
        }
    }

    clickMenuItem(item: string) {
        return ( () => {
            if (this.state.clicked != "") {
                let lastClicked = document.getElementById(this.state.clicked);

                if(lastClicked) {
                    lastClicked.className = "menuOption";
                }
            }

            let element = document.getElementById(item);
            if (element) {
                element.className += "menuClicked";
            }

            this.props.menuCallback(item);

            this.setState(() => {
                return {
                    clicked: item
                }
            });
        })
    }


    render()
    {
        return (
            <div className="menuWrapper">
                <p id="Latest" className="menuOption" onClick={this.clickMenuItem("Latest")}>
                    Latest
                </p>
                <p id="Timeline" className="menuOption" onClick={this.clickMenuItem("Timeline")}>
                    Timeline
                </p>
                <p id="About me" className="menuOption" onClick={this.clickMenuItem("About me")}>
                    About me
                </p>
            </div>
        )
    }
}