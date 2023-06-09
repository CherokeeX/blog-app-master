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
import Header from '../components/Header';


const PrivateRoute = ({isAutenticated,component: Component,...rest}) => (
    <Route {...rest} component={(props)=>(isAutenticated ?  
        
        (
            <div>
               
               <Header></Header>
                 <Component {...props}/>
            </div>
       
        
        
        ):
        (<Redirect to="/"/>)
        
        )}/>
)

const mapStateToProps = (state)=>({
    isAutenticated : !!state.auth.uid //eger set edilmise bize true degerei  getirecek. eger false deger gelirse login olmamis olarak algilanir
});



export default connect (mapStateToProps) (PrivateRoute)