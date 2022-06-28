import React from "react";

const PeopleItem = (props) => {
    const imgDomain = 'http://apis.chromeye.com:9191'
    return(
        <tr>
            <td><img src={imgDomain + props.data.avatar.url} width="32" height="32"/></td>
            <td>{props.data.id}</td>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td><a href={"mailto:" + props.data.email}>{props.data.email}</a></td>
            <td>{props.data.company.name}</td>
            <td>{props.data.company.department}</td>
            <td>{props.data.company.startDate}</td>
        </tr>
    )
}

export default PeopleItem;