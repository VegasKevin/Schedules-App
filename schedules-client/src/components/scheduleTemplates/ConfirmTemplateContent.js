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
        // let aRoleArrayKey = 0;
        
         return (
            aMinistry.rolesArray.map((aRoleArray, index)=>{
                console.log("aRoleArray for modal: " + JSON.stringify(aRoleArray))
                // aRoleArray.map(aRole => {
                    // aRoleArrayKey++;
                    // console.log("aMinistry: " + JSON.stringify(aRoleArray));
                     return (
                        <div key={index} style={{display:'flex', flexDirection:"row"}}>
                            Role Name: {aRoleArray.roleName}    Requires BackGroundCheck:  {(aRoleArray.backGroundCheckRequired === true) ? "Yes" : "No"}
                        </div>
                    // )
            )})
            // })
         )
    }

    render() {
        return (
            this.props.ministryArray.map((ministry, index)=> {
                return (                    
                    <div key={index}>
                        <br></br>
                        {/* <div> */}
                            <h4>Ministry Name: {ministry.ministryName}</h4>
                        {/* </div> */}
                         {this.renderRoleList(ministry)} 
                        {this.pairMinistryRoles()}

                    </div>
                )
            })
           
        )
    }
}
export default ConfirmTemplateContent;