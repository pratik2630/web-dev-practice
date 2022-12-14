function Card(props){
    return (
       
        <div className="card">
            <div className="top">
                <div className="logoimage">
                    <img className="mylogo" src={props.logoimg} />
                </div>
                <div className="buttoncontrols">restart stop</div>
                <div className="currentstatus">
                    {props.status}
                </div>
            </div>
            <div className="bottom">
                <div className="live-terminal">{props.terminal}</div>
                <div className="run-script">script here</div>
            </div>
    </div>
    )
}

export {Card}