import React,{useContext} from 'react'
import {Father} from './context'
import VoteForm from './utils/utilForVcreator';

function VoteCreator(){
	return (
		<Father>
			<VoteForm/>
		</Father>
	)
}

export default VoteCreator;
