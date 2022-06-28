import React from "react";
import PeopleItem from "./PeopleItem";

const PeopleTable = (props) => {

    if(!props.peoples.length) {
        return(
            <div>
                <h1>NO peoples</h1>
            </div>
        )
    }

    return (
        <div>
            <table className="w100 table">
                <thead>
                    <tr key="0">
                        <th>Avatar</th>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Department</th>
                        <th>Start Date</th>
                    </tr>
                </thead>
                <tbody className="table table-striped">
                    {props.peoples.map(people => 
                        <PeopleItem key={people.id} data={people} />
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PeopleTable;