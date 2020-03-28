import React,{useContext} from 'react'
import {Father} from './context'
import HomePage from './utils/utilForHome'
function Home(){
	return (
		<Father>
			<HomePage/>
		</Father>
	)
}

export default Home;