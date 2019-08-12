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
        console.log("aMinistry: "+ JSON.stringify(aMinistry)); 
        let aRoleArrayKey = 0;
        
         return (
            aMinistry./*rolesArray.*/map(aRoleArray =>{
                aRoleArray.map(aRole => {
                    aRoleArrayKey++;
                    console.log("aMinistry: " + JSON.stringify(aRoleArray));
                    return (
                        <div key={aRoleArrayKey} style={{display:'flex', flexDirection:"row"}}>
                            Role Name: {aRole/*Array*/.roleName}    Requires BackGroundCheck:  {/*{aRoleArray.backGroundCheckRequired}*/}
                        </div>
                    )
                })
            })
         )
    }

    render() {
        return (
            
            this.props.ministryArray.map(ministry => {
               // console.log("ministry for modal: " + JSON.stringify(ministry))
                return (                    
                    <div>
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