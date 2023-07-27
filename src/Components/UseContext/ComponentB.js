import React, { Component } from 'react'
import { UserContext, admincontext } from './ContextFunction'
import ComponentC from './ComponentC'

export class ComponentB extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {user => {
                        return (
                            <admincontext.Consumer>
                                {
                                    admin => {
                                        return (
                                            <div>
                                              --- Using class ---
                                               <div> UserName : {user} - AdminName : {admin}</div>
                                            </div>
                                        )
                                    }
                                }
                            </admincontext.Consumer>
                        )
                    }}
                </UserContext.Consumer>

             <ComponentC />

            </div>
        )
    }
}

export default ComponentB
