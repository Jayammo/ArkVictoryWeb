import * as React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
	mainFeaturedPost: {
		position: 'relative',
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: 'rgba(0,0,0,.3)',
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0,
		},
	},
	img: {
		// display: 'none',
		width: '100%',
		height: 'auto',
		zIndex: -1,
	},
}));

function MainFeaturedPost(props) {
	const classes = useStyles();
	const { post } = props;

	return (
		<Paper
			className={classes.mainFeaturedPost}
			style={{
				backgroundImage: `url(${post.image})`,
				backgroundSize: '100% 350px',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={7}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography variant='h4' color='inherit' gutterBottom>
							{post.title}
						</Typography>
						<Typography variant='h6' color='inherit' paragraph>
							{post.description}
						</Typography>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}

MainFeaturedPost.propTypes = {
	post: PropTypes.shape({
		description: PropTypes.string.isRequired,
		image: PropTypes.string.isRequired,
		imageText: PropTypes.string.isRequired,
		linkText: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
};

export default MainFeaturedPost;
