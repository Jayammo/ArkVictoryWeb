import ImgCard from "../../Shared/Cards/ImgCard";
import ETlogo from "../../../assets/ETlogo.jpg";
import { Grid } from "@material-ui/core";

const post = {
  title: "In Progress",
  date: "Feb 2021",
  description: "More features for this page is coming soom. ",
  image: ETlogo,
  imageText: "Image Text",
  smDown: false,
};

const Entertainment = (props) => {
  return (
    <Grid container alignItems="center" spacing={3}>
      <Grid item xs={12}>
        <ImgCard post={post} />
      </Grid>
    </Grid>
  );
};

export default Entertainment;
