import React from "react";
import UiInput from "./UI/input/UiInput";
import UiPagination from "./UI/pagination/UiPagination";
import UiSelect from "./UI/select/UiSelect";

const DataFilter = ({filter, setFilter}) => {
    return(
        <div className="dataFilter">
            <UiInput 
                className="dataFilter__search"
                value={filter.search}
                onChange={e => setFilter({...filter, search: e.target.value})}
                placeholder='Enter Keyword'
            />
            <UiPagination
                className="dataFilter__nav"
                value={filter.pageActive}
                pageActive={e => setFilter({...filter, pageActive: e})}
                totalCount={filter.dataCount} 
                limit={filter.perPage}
            />
            <UiSelect 
                className="dataFilter__perPage"
                title="Per Page"
                value={filter.perPage}
                onChange={e => setFilter({...filter, pageActive: 0, perPage: e == 'all' ? filter.dataCount : e, })}
                options={[
                    {value: '1', name: "1"},
                    {value: '3', name: "3"},
                    {value: '5', name: "5"},
                    {value: 'all', name: "All"},
                ]}
            />
      </div>
    )
}

export default DataFilter;