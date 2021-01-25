import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import * as React from "react";
import post1 from "./blog-post.1.md";
import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import MainFeaturedPost from "./MainFeaturedPost";
import handsTogetherOne from "./../../assets/HandsTogether1.jpg";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    height: "100%",
    width: "100%",
  },
}));

const sections = [
  { title: "Entertainment", url: "#" },
  { title: "Donations received", url: "#" },
  { title: "Certified Counseling Services", url: "#" },
  { title: "Programs:", url: "#" },
  { title: "About Us", url: "#" },
];

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

export default function Blog() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Header title="Ark Victory Apostolic Church" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Love One Another" posts={post1} />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}
