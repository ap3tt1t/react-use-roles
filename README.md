# react-use-roles

> Simple React Hook and Library for role based rendering

[![NPM](https://img.shields.io/npm/v/react-use-roles.svg)](https://www.npmjs.com/package/react-use-roles) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-use-roles
```
OR
```bash
yarn add react-use-roles
```

## Usage

```tsx
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
				<p>Hello 2</p>
			</RoleChecker>
			<RoleChecker allowed={['accounts']} template={(<p>You can't access this</p>)}>
				<p>Hello 3</p>
				<p>Hello 3 again</p>
			</RoleChecker>
		</>
	)
}
```

## License

MIT © [ap3tt1t](https://github.com/ap3tt1t)
