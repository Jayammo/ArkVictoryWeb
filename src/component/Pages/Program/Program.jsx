import { Grid } from "@material-ui/core";
import FeaturedPost from "../../Shared/Features/FeaturedPost";

const featuredPosts = [
  {
    title: "Ark Caring Program",
    date: "",
    description: "Welcome to Ark Victory Apostolic Church Offical Webpage",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Ark Recidivism Proposal Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Parent Effectiveness Training Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Building Literacy Through Poetry Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Physical Fitness Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Youth & After School Literacy Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Physical Fitness Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Open Mic Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Sacred Round Table Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Workforce Training Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Drug Testing Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
  {
    title: "Parent Day Out and Parent Night Out Program",
    date: "",
    description: "More features coming soon",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
    smDown: true,
  },
];

const Program = (props) => {
  return (
    <Grid container spacing={4}>
      {featuredPosts.map((post) => (
        <FeaturedPost key={post.title} post={post} />
      ))}
    </Grid>
  );
};

export default Program;
