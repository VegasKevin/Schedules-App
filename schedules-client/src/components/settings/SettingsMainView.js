import React from 'react';
import { Button } from 'semantic-ui-react';
import history from '../../history';

class SettingsMainView extends React.Component {

    render() {
        return (
            <div>
                SettingsMainView.js
                <Button color="blue" onClick={() => history.push("/settings/createtemplate")}>Create Schedule Template</Button>
            </div>
        )
    }
}
export default SettingsMainView;