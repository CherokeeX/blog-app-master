// import React, { Component } from 'react'
// import  {connect} from 'react-redux';
// import { Redirect, Route } from 'react-router-dom';

// const PrivateRoute = ({isAuthenticated, component = Component , ...rest}) => (
    
//         <Route {...rest} 
//         component={(props)=>(isAuthenticated ? 
//             (<Component {...props} />):
//             (<Redirect to='/'/>) )}/>
    
// );

// const mapStateToProps = (state)=> ({
//     isAuthenticated: !!state.auth.uid
// })

// export default connect(mapStateToProps)(PrivateRoute) 

import React from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({isAutenticated,companent:Component,...rest}) => (
    <Route {...rest} component={(props)=>(isAutenticated ? 
        (<Component {...props}/>):
        (<Redirect to="/"/>)
        
        )}/>
)

const mapStateToProps = (state)=>({
    isAutenticated : !!state.auth.uid //eger set edilmise bize true degerei  getirecek. eger false deger gelirse login olmamis olarak algilanir
});



export default connect (mapStateToProps) (PrivateRoute)