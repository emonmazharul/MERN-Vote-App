import React,{useContext} from 'react';
import {useParams} from 'react-router-dom';
import {MyContext} from '../context';
import {Row,Col,FormGroup,Form,Input,Label,Button} from 'reactstrap'
function VoteOption(props){
	const {voteID} = useParams()
	const context = useContext(MyContext);
	function handler(e){
		e.preventDefault();
		const option = e.target.elements.options.value;
		context.dataUpdater(voteID,option);
	}
	return (
		<Row className="mt-4">
			<Col className="offset-md-2 col-md-8 offset-md-2">
				<Form onSubmit={(e) => handler(e)}>
					{context.data.options.map(item => (
						<FormGroup className="mt-1 mb-1" check key={item._id}>
							<Label check>
					              <Input type="radio" value={item.value} name="options" id={item.id} />
					              	{item.value}
					        </Label>
						</FormGroup>
					) )}
				<Button className="mt-2"  type="submit" color="primary">Submit</Button>
				</Form>
			</Col>
		</Row>
	);
}

export default VoteOption;
