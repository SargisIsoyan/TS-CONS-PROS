import * as React from "react";

interface IHeaderProps {
}

export default class Header extends React.Component<IHeaderProps> {
    render():JSX.Element{
        return(
            <div className="header-content">
                <span>Should I eat at McDonalds?</span>
            </div>
        );
    }
}