import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import handsTogetherOne from "../../../assets/HandsTogether1.jpg";
import post1 from "../../Shared/Blogs/blog-post.1.md";
import FeaturedPost from "../../Shared/Features/FeaturedPost";
import Main from "../../Shared/Main/Main";
import MainFeaturedPost from "../../Shared/Features/MainFeaturedPost";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    height: "100%",
    width: "100%",
  },
}));

const mainFeaturedPost = {
  title: "Ark Victory",
  description: `Our goal .. is to teach togetherness, unity, family, health &amp; safety, as we demonstrate the
    importance of equality as a people of God. We pray to show ourselves as one human family studying
    and obeying the Word of God victoriously.`,
  image: handsTogetherOne,
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: handsTogetherOne,
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: handsTogetherOne,
    imageText: "Image Text",
  },
];

let posts = [post1];

const Home = (props) => {
  const classes = useStyles();
  console.log(posts);
  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="Love One Another" posts={posts} />
      </Grid>
    </>
  );
};

export default Home;
