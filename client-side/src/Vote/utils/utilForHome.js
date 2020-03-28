import React from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron,Container,Row,Col} from 'reactstrap'


function HomePage(){
	return (
		<Jumbotron>
			<h3>Welcome to the Vote creator</h3>
			<br/>
			<p style={{fontSize:'1.1em'}}>
				With the help of this app you can make any kind of survey 
				or vote.For example you can make your class Captain with the app.
				Also you can make any kind of survey with this app.
			</p>
			<p className="text-info" style={{fontSize:'1.1em'}}>
				To create a vote or survey.
				You must have to give atleast two options for your vote unless you are Adlof Hitler!!
				And not more than four.

			</p>
			<i style={{fontSize:'1.1em'}}>
				So lets go to <Link to="/createVote">Make a vote</Link> and create your vote or survey.
			</i>

		</Jumbotron>
	);
}

export default HomePage;