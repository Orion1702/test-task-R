import React from "react";
import classes from './UiPagination.module.css';
import UiPagArrow from "./UiPaginationArrow";

const UiPagination = ({value, onChange, pageActive, totalCount, limit}) => {
    const getPageCount= (totalCount, limit) => {
        if(limit === 'all'){
            return 1
        }
        return Math.ceil(totalCount / limit)
    }

    return(
        <div className="d-flex">
            <div className={classes.UiPagination + " UiPagination"}>
                {[...Array(getPageCount(totalCount, limit))].map((x, i) =>
                    <span
                        key={i + 1}
                        onClick={() => pageActive(i)}
                        className={value === i ? 'active' : 'page'} 
                    >
                        {i + 1}
                    </span>
                )}
            </div>

            {(() => {
                switch (value) {
                case 0:
                    return <div className="arrow__wraper"><UiPagArrow
                                pageActive={() => pageActive(value + 1)}
                                content=">"
                                className="arrow__next"
                            /></div>
                case limit-1:
                    return <div className="arrow__wraper"><UiPagArrow content="<" 
                                pageActive={() => pageActive(value - 1)}
                                className="arrow__prew" /></div>
                default:
                    return <div className="arrow__wraper">
                            <UiPagArrow 
                                content="<" 
                                pageActive={() => pageActive(value - 1)}
                                className="arrow__prew"
                                />
                            <UiPagArrow
                                pageActive={() => pageActive(value + 1)}
                                content=">"
                                className="arrow__next"
                            />
                        </div>
                }
            })()}
        </div>
    )
}

export default UiPagination;