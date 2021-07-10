import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LazyLoad from "react-lazyload";
import Rating from "@material-ui/lab/Rating";
import { businessDetails } from "../../shared/types/yelp-response.type";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useState } from "react";
import PlaceHolderImage from "./DefaultImage.png";
import SearchResultPlaceHolder from "../SearchResultPlaceHolder";

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

const SearchResult = ({ placeInfo }: searchResultProp) => {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState(placeInfo.image_url);
  return (
    <LazyLoad
      height={280}
      offset={100}
      placeholder={<SearchResultPlaceHolder />}
    >
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
            <img
              style={{
                display: "block",
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              src={imgUrl}
              onError={() => {
                setImgUrl(PlaceHolderImage);
              }}
            />
            {/* <Paper elevation={0} className={classes.imageContainer}></Paper> */}
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
                  <Typography variant="h4">{placeInfo.name}</Typography>
                </Grid>
              </Grid>
              {/* <Grid container item> */}
              <Grid item className={classes.address}>
                <Typography variant="h6">
                  {[
                    placeInfo.location.address1,
                    placeInfo.location.address2,
                    placeInfo.location.address3,
                    placeInfo.location.city,
                    placeInfo.location.state,
                    placeInfo.location.country,
                  ]
                    .filter((add) => add !== "")
                    .join(", ")}
                </Typography>
              </Grid>
              <Grid item className={classes.ratingContainer}>
                <Grid container>
                  <Grid container item md={6}>
                    <Rating
                      name="simple-controlled"
                      value={Math.floor(placeInfo.rating)}
                      readOnly
                    />
                    <Typography variant="body1" className={classes.reviewCount}>
                      {placeInfo.review_count
                        ? `(${placeInfo.review_count})`
                        : ""}
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="body1">
                      {placeInfo.rating ? `Score: ${placeInfo.rating}` : ""}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container item md={1} justifyContent="flex-end">
            <FavoriteBorderIcon className={classes.favorite} />
          </Grid>
        </Grid>
      </Paper>
    </LazyLoad>
  );
};

type searchResultProp = {
  placeInfo: businessDetails;
};
export default SearchResult;
