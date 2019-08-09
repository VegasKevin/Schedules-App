import React from 'react';

class ConfirmTemplateContent extends React.Component{

    renderRoleList (aMinistry){
        //console.log("aMinistry: " + JSON.stringify(aMinistry));
         return (
            aMinistry.map(aRoleArray =>{
                return (
                    <div style={{display:'flex', flexDirection:"row"}}>
                        Role Name: {aRoleArray.roleName}    Requires BackGroundCheck:  {aRoleArray.backGroundCheckRequired}
                    </div>
                )
            })
         )
    }

    render() {
        return (
            this.props.ministryArray.map(ministry => {
               // console.log("ministry for modal: " + JSON.stringify(ministry))
                return (
                    
                    <div>
                        <h4>{ministry.ministryName}</h4>
                        {this.renderRoleList(ministry)}


                    </div>
                )
            })
           
        )
    }
}
export default ConfirmTemplateContent;