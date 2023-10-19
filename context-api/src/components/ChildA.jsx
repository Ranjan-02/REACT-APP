import React, { memo } from 'react'
import ChildB from './ChildB'

function ChildA({ myFunction }) {
    console.log('i am child A');


    return (
        <>
            {/* <ChildB /> */}

        </>



    )
}

export default memo(ChildA)