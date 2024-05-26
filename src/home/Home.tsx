import * as React from "react";
import { Header, TitleSize } from "azure-devops-ui/Header";
import { Page, IPageProps, Orientation } from "azure-devops-ui/Page";
import { Card } from "azure-devops-ui/Card";
import { IHeaderCommandBarItem } from "azure-devops-ui/HeaderCommandBar";
import * as SDK from "azure-devops-extension-sdk";
import "azure-devops-ui/Core/override.css";
import { showRootComponent } from "../Common";


export class HomePage extends React.Component<{}, {}> {
    public componentDidMount() {
        SDK.init();
    }

    public render() : JSX.Element {
        return (
            <div style={{width:"100%"}}>
                <Header title="My first extension" titleSize={TitleSize.Large}/>
                <div className="page-content flex-grow" style={{marginTop: "20px", marginLeft: "20px", marginRight: "20px"}}>
                    <Card>Page content</Card>
                </div>
            </div>
        );
    }
}
export default HomePage;


showRootComponent(<HomePage />);