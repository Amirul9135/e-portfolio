import React from "react"

interface IProps {
    text: string;
    flag: boolean;
    handler: () => void;
    color?: string;
}


const ToggleBtn: React.FC<IProps> = ({ text,color, flag, handler }) => {
    return (<React.Fragment>
        <div className="toggleBtn" data-enable={`${(flag)? 'true':''}`} onClick={handler}>
            <button style={{ "--clr": (color)? color : "#0FF0FC" } as React.CSSProperties}><span>{text}</span><i></i></button>
        </div>
    </React.Fragment>)
}
export default ToggleBtn