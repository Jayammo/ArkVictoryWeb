import { useState, useEffect } from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import handsTogetherOne from '../../../assets/HandsTogether1.jpg';
import VictoryHands from '../../../assets/VictoryHands.jpg';
import post1 from '../../Shared/Blogs/blog-post.1.md';
import FeaturedPost from '../../Shared/Features/FeaturedPost';
import Main from '../../Shared/Main/Main';
import MainFeaturedPost from '../../Shared/Features/MainFeaturedPost';

const useStyles = makeStyles((theme) => ({
	mainGrid: {
		marginTop: theme.spacing(3),
	},
	root: {
		height: '100%',
		width: '100%',
	},
}));

const mainFeaturedPost = {
	title: 'Ark Victory',
	description: `Our goal .. is to teach togetherness, unity, family, health &amp; safety, as we demonstrate the
    importance of equality as a people of God. We pray to show ourselves as one human family studying
    and obeying the Word of God victoriously.`,
	image: handsTogetherOne,
	backgroundImage: VictoryHands,
	imageText: 'main image description',
	linkText: 'Continue reading…',
};

const featuredPosts = [
	{
		title: 'Featured post',
		date: 'Feb 2021',
		description: 'Welcome to Ark Victory Apostolic Church Offical Webpage',
		image: handsTogetherOne,
		imageText: 'Image Text',
		smDown: true,
	},
	{
		title: 'Progress',
		date: 'Feb 2021',
		description: 'More features coming soon',
		image: handsTogetherOne,
		imageText: 'Image Text',
		smDown: true,
	},
];

const Home = (props) => {
	const classes = useStyles();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch(post1)
			.then((res) => res.text())
			.then((md) => setPosts([md]));
	}, []);

	return (
		<>
			<MainFeaturedPost post={mainFeaturedPost} />
			<Grid container spacing={4}>
				{featuredPosts.map((post) => (
					<FeaturedPost key={post.title} post={post} />
				))}
			</Grid>
			<Grid container spacing={5} className={classes.mainGrid}>
				<Main title='Our Story' posts={posts} />
			</Grid>
		</>
	);
};

export default Home;
