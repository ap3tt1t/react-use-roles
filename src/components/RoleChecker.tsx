import React from 'react'

import {useRolesHook} from './../context'

type RoleCheckerProps = {
    allowed: Array<string>
    template?: object
}

const RoleChecker:React.FC<RoleCheckerProps> = ({children, allowed, template}) => {
    const {role, defaultTemplate} = useRolesHook()
    return (
        <React.Fragment>
            {role !== null && allowed.includes(role) ? (<React.Fragment>{children}</React.Fragment>) : (
                <React.Fragment>
                    {template !== undefined ? template : defaultTemplate}
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default RoleChecker

