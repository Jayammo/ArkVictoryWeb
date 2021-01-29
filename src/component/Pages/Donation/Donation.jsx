import ImgCard from "../../Shared/Cards/ImgCard";
import indev from "../../../assets/indev.gif";
import { Grid } from "@material-ui/core";

const post = {
  title: "In Progress",
  date: "Feb 2021",
  description: "The donation service is currenty under development",
  image: indev,
  imageText: "Image Text",
  smDown: false,
};

const Donation = (props) => {
  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12}>
        <ImgCard post={post} />
      </Grid>
    </Grid>
  );
};

export default Donation;
