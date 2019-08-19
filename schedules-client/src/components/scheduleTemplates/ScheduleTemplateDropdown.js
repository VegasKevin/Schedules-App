import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const ScheduleTemplateDropdown = (props) => (
    console.log("props: " + JSON.stringify(props.scheduleTemplatesArray)),
    <Dropdown
        placeholder="Select Template for New Schedule"
        // fluid
        // selection
        options={props.scheduleTemplatesArray}
    />
)
export default ScheduleTemplateDropdown;