import { makeStyles, CssBaseline, Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import {
	Home,
	About,
	Counsel,
	Donation,
	Entertainment,
	Program,
} from './component/Pages/index';

const useStyles = makeStyles((theme) => {
	return {
		background: {
			zIndex: -2,
			backgroundColor: '#ebebeb',
			height: '100%',
		},
	};
});

function App() {
	const classes = useStyles();
	return (
		<>
			<CssBaseline />
			<Container style={{ height: '100%' }} maxWidth='lg'>
				<Router>
					<Header title='Ark Victory Apostolic Church' />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/entertainment' component={Entertainment} />
						<Route exact path='/donations' component={Donation} />
						<Route exact path='/counseling' component={Counsel} />
						<Route exact path='/programs' component={Program} />
						<Route exact path='/about' component={About} />
					</Switch>
					<Footer
						title='Footer'
						description='Something here to give the footer a purpose!'
					/>
				</Router>
			</Container>
		</>
	);
}

export default App;
