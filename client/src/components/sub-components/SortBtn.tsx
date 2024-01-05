import React from "react"

interface IProps{
    flag:boolean;
    handler: ()=> void;
}


const SortBtn: React.FC<IProps> = ({flag,handler}) => { 
    return (<React.Fragment> 
        <div className="sortBtn" data-desc={`${(flag)? '':'yes'}`} onClick={handler} title={`${flag? 'ascending':'descending'}`}>
            <button  style={{ "--clr": "#0FF0FC" } as React.CSSProperties}>   <span><i className={`fa-solid fa-arrow-down-${flag?'short-wide':'wide-short'}`}></i></span><i></i></button>
        </div>
    </React.Fragment>)
}
export default SortBtn