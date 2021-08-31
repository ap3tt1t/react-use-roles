import React, { useEffect } from 'react'

import { RoleChecker, RolesProvider, useRoles } from 'react-use-roles'

const App = () => {
	return <RolesProvider>
		<RoleBasedComponent />
	</RolesProvider>
}

export default App

const RoleBasedComponent = () => {
	const { setRole, setDefaultTemplate } = useRoles()
	useEffect(() => {
		setRole('admin')
		setDefaultTemplate(<div style={{color: 'blue', fontStyle: 'italic'}}>No Ways!</div>) // OPTIONAL
	}, [])
	return (
		<>
			<RoleChecker allowed={['testers']}>
				<p>Hello 1</p>
			</RoleChecker>
			<RoleChecker allowed={['testers', 'admin']}>
				<p>Hello 1</p>
			</RoleChecker>
			<RoleChecker allowed={['accounts']} template={(<p>You can't access this</p>)}>
				<p>Hello 2</p>
				<p>Hello 2 again</p>
			</RoleChecker>
		</>
	)
}
