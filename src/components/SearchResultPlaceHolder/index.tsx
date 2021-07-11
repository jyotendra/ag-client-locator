import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ReactPlaceholder from "react-placeholder";
import {
  RectShape,
  RoundShape,
  TextBlock,
} from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

const useStyles = makeStyles({
  displayImage: {
    height: "15rem",
    width: "15rem",
  },
  detailSection: {},
  title: {},
  address: {
    paddingTop: "5%",
    paddingLeft: "5%",
  },
  ratingContainer: {
    paddingTop: "14%",
    paddingLeft: "5%",
  },
  rating: {},
  reviewCount: {
    position: "relative",
    display: "inline-block",
    left: "3%",
  },
  score: {},
  favorite: {
    paddingRight: "8%",
    paddingTop: "8%",
  },
});

const ResultsPlaceholder = () => {
  const classes = useStyles();
  return (
    <Paper>
      <Grid container>
        <Grid
          container
          direction="column"
          item
          className={classes.displayImage}
          justifyContent="center"
          alignItems="stretch"
          md={3}
        >
          <RectShape
            color="#F0F0F0"
            style={{ width: "80%", height: "80%", paddingLeft: "2rem" }}
          />
        </Grid>
        <Grid item md={8}>
          <Grid
            container
            direction="column"
            className={classes.detailSection}
            justifyContent="space-between"
          >
            <Grid item className={classes.title}>
              <Grid container item justifyContent="center">
                <TextBlock rows={1} color="#F0F0F0" />
              </Grid>
            </Grid>
            {/* <Grid container item> */}
            <Grid item className={classes.address}>
              <TextBlock rows={3} color="#F0F0F0" />
            </Grid>
            <Grid item className={classes.ratingContainer}>
              <Grid container>
                <Grid container item md={6}>
                  <RectShape
                    color="#F0F0F0"
                    style={{ width: 90, height: 30 }}
                  />
                  <RectShape
                    color="#F0F0F0"
                    style={{ width: 70, height: 30 }}
                    className={classes.reviewCount}
                  />
                </Grid>
                <Grid item md={6}>
                  <RectShape
                    color="#F0F0F0"
                    style={{ width: 50, height: 30 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item md={1}>
          <Grid item style={{ height: "1rem", width: "1rem" }}>
            <RoundShape color="#F0F0F0" />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

const SearchResultPlaceHolder = () => {
  return (
    <ReactPlaceholder
      ready={false}
      showLoadingAnimation={true}
      customPlaceholder={<ResultsPlaceholder />}
    >
      <div></div>
    </ReactPlaceholder>
  );
};

// type placeImageProps = {
//   imageUrl: string;
// };

export default SearchResultPlaceHolder;
