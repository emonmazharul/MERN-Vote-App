import React,{useContext,useEffect} from 'react'
import {useParams,useRouteMatch,Switch,Route} from 'react-router-dom'
import {Father,MyContext} from './context'
import Info from './utils/info';
import {Col,Row,Form,FormGroup,Input,Label,Button} from 'reactstrap'
import MyChart from './chart'
import VoteOption from './utils/utilForVote';
function Child(){
	const context = useContext(MyContext)
	const {path,url} = useRouteMatch();
	const {voteID} = useParams()

	return (
		<React.Fragment>
			{context.error && <Info badNews={context.error} />}
			<Switch>
				<Route exact path={`${path}/:voteID`} component={Vote}/>
			</Switch>
		</React.Fragment>
	);
}

function Check(){
	return (
		<Father>
			<Child/>
		</Father>
	);
}

function Vote(){
	const context = useContext(MyContext);
	const {voteID} = useParams()
	useEffect(() => {
		context.getData(voteID);
	},[])

	function handler(e){
		e.preventDefault();
		const option = e.target.elements.options.value;
		const mainOption = option.split('=')[0];
		context.dataUpdater(mainOption,voteID);
	}

	if(context.data.voteHeadline){
		return (
			<div>
				<MyChart />
				<VoteOption/>
			</div>
		);
	}
	return <h2>Loading...</h2>
	
}


export default Check;