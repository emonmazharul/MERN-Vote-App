import React from 'react';
import {Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
function Info(props){
	return (
		<div className="mt-2">
			<Alert color={props.successLink? 'success' : 'danger'}>
				{props.goodNews || props.badNews}
				{props.successLink && ( 
					<React.Fragment>
						<p>Sucessfully create your vote.Now copy and share the vote among voters</p>
						<p>Here your <Link to={props.successLink}>link</Link> </p>
					</React.Fragment> 
				)}
			</Alert>
		</div>
	);
}

export default Info;