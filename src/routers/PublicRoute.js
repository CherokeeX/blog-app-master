
import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';



const PublicRoute = ({isAutenticated,component: Component,...rest}) => (
    <Route {...rest} component={(props)=>(isAutenticated ?  
        
        (<Redirect to="/blogs"/>
            
       
        
        
        ):
        (<Component {...props}/>
        )
        
        )}/>
)

const mapStateToProps = (state)=>({
    isAutenticated : !!state.auth.uid //eger set edilmise bize true degerei  getirecek. eger false deger gelirse login olmamis olarak algilanir
});



export default connect (mapStateToProps) (PublicRoute)