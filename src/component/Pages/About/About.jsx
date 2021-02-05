<<<<<<< HEAD
import { useEffect, useState } from 'react';
import Main from '../../Shared/Main/Main';
import blog from '../../Shared/Blogs/blog-post.3.md';
import { Grid, makeStyles } from '@material-ui/core';
=======
import { useEffect, useState } from "react";
import Main from "../../Shared/Main/Main";
import blog from "../../Shared/Blogs/blog-post.2.md";
import { Grid, makeStyles } from "@material-ui/core";
>>>>>>> main

const useStyles = makeStyles((theme) => ({
	mainGrid: {
		marginTop: theme.spacing(3),
	},
}));

const About = (props) => {
	const [posts, setPosts] = useState([]);
	const classes = useStyles();

	useEffect(() => {
		fetch(blog)
			.then((res) => res.text())
			.then((md) => setPosts([md]));
	}, []);

	return (
		<Grid container spacing={5} className={classes.mainGrid}>
			<Main title='About Us' posts={posts} />
		</Grid>
	);
};

export default About;
