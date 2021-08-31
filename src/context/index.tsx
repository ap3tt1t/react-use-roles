import React, {createContext, useContext, useState} from "react";
import styles from './../styles.module.css'

type RolesContent = {
    role: string | null,
    setRole: (r: string | null)  => void,
    defaultTemplate: object,
    setDefaultTemplate: (t: object) => void
}

const RolesContext = createContext<RolesContent>({role: null, setRole: () => {}, defaultTemplate: (<p className={styles.accessDenied}>Access Denied</p>), setDefaultTemplate: () => {}})
export const useRolesHook = () => useContext(RolesContext)

const RolesProviderComponent:React.FC = ({children}) => {
    const [role, setRole] = useState<string | null>(null)
    const [defaultTemplate, setDefaultTemplate] = useState<object>(<p className={styles.accessDenied}>Access Denied</p>)
    return (
        <RolesContext.Provider value={{role, setRole, defaultTemplate, setDefaultTemplate}}>
            {children}
        </RolesContext.Provider>
    )
}

export default RolesProviderComponent