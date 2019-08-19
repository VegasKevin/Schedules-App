import React from 'react';

class ConfirmTemplateContent extends React.Component{

    pairMinistryRoles () {
        let pairedArray = 
        this.props.ministryArray.map(ministry => {
            console.log("ministry: " + JSON.stringify(ministry))
           let roleMatches = this.props.backGroundCheckArray.filter((roleObject => roleObject.parentMinistry === ministry.ministryName));
           let aMinistryName = ministry.ministryName;
          // pairedArray.push(ministry.ministryName : roleMatches)})
           return { aMinistryName : roleMatches};
        })
       

        //this.renderRoleList(pairedArray);
    }

    renderRoleList (aMinistry){
        return (
            aMinistry.rolesArray.map((aRoleArray, index)=>{
                     return (
                        <div key={index} style={{display:'flex', flexDirection:"row"}}>
                            Role Name: {aRoleArray.roleName}    Requires BackGroundCheck:  {(aRoleArray.backGroundCheckRequired === true) ? "Yes" : "No"}
                        </div>
            )})
         )
    }

    render() {
        return (
            this.props.ministryArray.map((ministry, index)=> {
                return (                    
                    <div key={index}>
                        <br></br>
                            <h4>Ministry Name: {ministry.ministryName}</h4>
                         {this.renderRoleList(ministry)} 
                        {this.pairMinistryRoles()}

                    </div>
                )
            })
           
        )
    }
}
export default ConfirmTemplateContent;