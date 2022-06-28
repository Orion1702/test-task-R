import React from "react";

const UiPagArrow = ({content, className, pageActive,}) => {
    return(
        <div className={"arrow " + className} onClick={pageActive}>
            {content}
        </div>
    )
}

export default UiPagArrow;