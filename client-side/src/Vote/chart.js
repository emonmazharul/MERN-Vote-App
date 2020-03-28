import React,{useEffect,useRef,useContext} from 'react'
import Chart from 'chart.js'
import {Col,Row} from 'reactstrap'
import {MyContext} from './context';

function MyChart(props){
	const chartRef = useRef();
	const context = useContext(MyContext);

	useEffect(() => {
		console.log(props);
		const ctx = chartRef.current.getContext('2d');
		const chart = new Chart(ctx, {
			type:'pie',
			data: {
				labels: context.data.options.map(item => item.value ),
				datasets: [{
					label:props.headline,
					data:context.data.options.map(item => item.totalVotes),
					backgroundColor:['#EB355E','#01164F','red', 'yellow'],
					weight:3,
				}]
			},
			


		})
	}, [context.data.options])
	return (
		<React.Fragment>
			<Row className="mt-2">
				<h3>{context.data.voteHeadline}</h3>
			</Row>
			<Row className="mt-4">
				<Col className="col-md-8">
					<canvas ref={chartRef}/>
				</Col>
				<Col className="col-md-4 mt-5">
					<ul className="list-group">
						{context.data.options.map(item => ( 
							<li className="list-group-item" key={item._id}>
								{item.value} - {item.totalVotes} votes
							</li>
						))}
					</ul>
				</Col>
			</Row>
		</React.Fragment>
	)
}

export default MyChart;