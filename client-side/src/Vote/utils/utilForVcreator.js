import React,{useContext} from 'react'
import {Row,Col,Form,FormGroup,Label,Input,Button} from 'reactstrap'
import {MyContext} from '../context'
import Info from './info';


const voteField = [
	// {name:'voteHeadline', required:true, placeholder:'Which football leage is the best'},
	{name:'optionOne', required:true,placeholder:'La Liga'},
	{name:'optonTwo',required:true,placeholder:'Premier Leage'},
	{name:'optionThree',required:false,placeholder:'Bundesliga'},
	{name:'optionFour',required:false,placeholder:'Serie A'},
]
function VoteForm(){
	const context = useContext(MyContext);
	const handler = (e)  => {
		e.preventDefault();
		const voteHeadline = e.target.elements.voteHeadline.value;
		const optionData = [];
		for(let key in e.target.elements){
			if( !isNaN(key) && key!=='0') {
				optionData.push({
					optionName:e.target.elements[key].name,
					value:e.target.elements[key].value,
				});
			}
		}
		context.dataReceiver(voteHeadline,optionData);
	}
	return (
		<Row className="mt-2">
			<Col className="offset-md-3 col-md-6 offset-md-3">
			<p style={{fontSize:'1.1em'}}>Fill all the required input and make your vote. To see a sample please visit example.com </p>
			{context.error && <Info  badNews={context.error} />}
			{context.success && <Info successLink={context.success}/>}
				<Form onSubmit={(e) => handler(e)} className="mt-2">
				    <FormGroup>
				        <Label for="voteHeadline">Your vote headline</Label>
				        <Input
				          type="text"
				          name="voteHeadline"
				          placeholder="ex: Which football leage is best ?"
				          required
				        />
			      	</FormGroup>
			      	{voteField.map(item => (
			      		<FormGroup key={item.name}>
				        <Label for={item.name}>{item.name}</Label>
				        <Input
				          type="text"
				          name={item.name}
				          placeholder={item.placeholder}
				          required={item.required}
				        />
			      	</FormGroup>
			      	) )}
				    
				    <Button color="primary" type="submit">make a vote</Button>
				</Form>
			</Col>
		</Row>
		);
}

export default VoteForm;