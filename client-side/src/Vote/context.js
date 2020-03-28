import React,{useState,useContext,useEffect} from 'react'
import axios from 'axios';

const MyContext= React.createContext({submit:'submit'});

function Father(props){

	const [data,setData] = useState({});
	const [error,setError] = useState(undefined);
	const [success,setSuccess] = useState(undefined); 

	const errorFinder = (error) => setError(error); 

	const dataUpdater = (id,option) => {
		console.log(id,option)
		axios.patch('http://localhost:5000/vote/'+id, {option,})
		.then((res) => {
				if(res.data.error){
					setError(res.data.error);
					setSuccess(undefined);
				} else {
					setData({
						...data,
						options:res.data,
						hasAllData:true, 
					});
				}
		})
		.catch(e => {
			console.log(e);
			setError('Something got wrong please try again.');
			setSuccess(undefined);
		});
	}

	const dataReceiver = (voteHeadline,options) => {
		axios.post('http://localhost:5000/vote', {
			voteHeadline,
			options,
		})
		.then(({data}) => {
			if(data.error){
				setError(data.error);
				// setTimeout(() =>  ,3000)
			} else {
				setSuccess(`/check/${data.id}`);
				setError(undefined);
			}
		})
		.catch(e => {
			console.log(e);
			setError('Can\'t make your vote. Please try again');
			setSuccess(undefined);
		})
	}
	const getData = (id)  => {
			axios.get('http://localhost:5000/vote/'+id)
			.then(({data}) => {
				console.log(data);
				if(data.error){
					setError(data.error)
					setSuccess(undefined);
				} else {
					setData({
					...data,
					voteHeadline:data.voteHeadline,
					options:data.options, 
				});
				}
			})
			.catch(e => {
				setError('please try again.');
				setSuccess(undefined);
			})
			}
	return (
		<React.Fragment>
			<MyContext.Provider value={{
					error,
					success,
					data,
					getData,
					dataReceiver,
					dataUpdater}}>

				{props.children}

			</MyContext.Provider>
		</React.Fragment>
	)
}

export  {MyContext,Father};