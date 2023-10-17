import React from 'react'
import { data, data1, data2 } from '../App'

function ChildC() {

    return (
        <>
            <data.Consumer>
                {
                    (myname) => {
                        return (
                            <data1.Consumer>
                                {
                                    (age) => {
                                        return (
                                            <data2.Consumer>
                                                {
                                                    (gende) => {
                                                        return (
                                                            <p>My name is :{myname},age is {age} and gender:{gende}</p>
                                                        )
                                                    }
                                                }
                                            </data2.Consumer>

                                        )
                                    }
                                }
                            </data1.Consumer>

                        )
                    }
                }
            </data.Consumer>

        </>
    )
}

export default ChildC