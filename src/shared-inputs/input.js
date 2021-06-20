import React, { Fragment } from "react";



const InputText = (props, ref) => {

    return (
        <Fragment>
           <input type={props.type} ref={ref}/>
        </Fragment>
    )
}

const IText = React.forwardRef(InputText)

export default IText;