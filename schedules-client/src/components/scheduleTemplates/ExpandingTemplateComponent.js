import React from 'react';

class ExpandingTemplateComponent extends React.Component{
    render() {
        return (
            <div>
                <div>
                    {this.props.renderMinistries}
                </div>
                <div>
                    {this.props.renderRoles}
                </div>
            </div>
)}
}

export default ExpandingTemplateComponent;

