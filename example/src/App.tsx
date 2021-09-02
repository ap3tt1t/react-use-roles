import React, { useEffect } from 'react'
import './App.css'
import { RoleChecker, RolesProvider, useRoles } from 'react-use-roles'

const App = () => {
	return <RolesProvider>
		<h3 className='title'>REACT-USE-ROLES</h3>
		<hr />
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
			<div className='section'>
				<p className='header'>INCLUDES - role: 'admin', allowed: ['testers']:</p>
				<p>EXPECTED</p>
				<p className='check'>Hello 1</p>
				<p>SHOWN:</p>
				<RoleChecker allowed={['testers']} mode="includes">
					<p className='check'>Hello 1</p>
				</RoleChecker>
			</div>
			<hr />
			<div className='section'>
				<p className='header'>NONE - role: 'admin', allowed: ['testers']</p>
				<p>EXPECTED</p>
				<p className='check'>Hello 2</p>
				<p>SHOWN:</p>
				<RoleChecker allowed={['testers']} mode="none">
					<p className='check'>Hello 2</p>
				</RoleChecker>
			</div>
			<hr />
			<div className='section'>
				<p className='header'>DEFAULT (INCLUDES) - role: 'admin', allowed: ['testers', 'admin']</p>
				<p>EXPECTED</p>
				<p className='check'>Hello 3</p>
				<p>SHOWN:</p>
				<RoleChecker allowed={['testers', 'admin']}>
					<p className='check'>Hello 3</p>
				</RoleChecker>
			</div>
			<div className='section'>
				<p className='header'>DEFAULT (INCLUDES), with TEMPLATE - role: 'admin', allowed: ['accounts']</p>
				<p>EXPECTED</p>
				<p className='check'>Hello 4</p>
				<p className='check'>You can have multiple children elements</p>
				<p>SHOWN:</p>
				<RoleChecker allowed={['accounts']} template={(<p>You can't access this</p>)}>
					<p className='check'>Hello 4</p>
					<p className='check'>You can have multiple children elements</p>
				</RoleChecker>
			</div>
		</>
	)
}
