import React from 'react'

import {useRolesHook} from './../context'

type ModeType = "includes" | "none"

type RoleCheckerProps = {
    allowed: Array<string>
    template?: object,
    mode?: ModeType
}

const RoleChecker:React.FC<RoleCheckerProps> = ({children, allowed, template, mode="includes"}) => {
    const {role, defaultTemplate} = useRolesHook()
    let isAllowed = false
    switch (mode) {
        case "includes": 
            (role !== null && allowed.includes(role)) ? isAllowed = true : isAllowed = false;
            break;
        case "none": 
            (role !== null && allowed.every(test => test !== role)) ? isAllowed = true : isAllowed = false;
            break;
        default: 
            return null;
            break;
    }
    return (
        <React.Fragment>
            {isAllowed ? (<React.Fragment>{children}</React.Fragment>) : (
                <React.Fragment>
                    {template !== undefined ? template : defaultTemplate}
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default RoleChecker

