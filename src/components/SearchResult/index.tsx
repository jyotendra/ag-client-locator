import { ButtonBase, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LazyLoad from "react-lazyload";
import Rating from "@material-ui/lab/Rating";
import { businessDetails } from "../../shared/types/yelp-response.type";
// import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useCallback, useState } from "react";
import PlaceHolderImage from "./DefaultImage.png";
import SearchResultPlaceHolder from "../SearchResultPlaceHolder";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "auto",
    maxWidth: "50rem",
  },
  image: {
    width: "10rem",
    height: "10rem",
    margin: "auto",
  },
  img: {
    display: "block",
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  score: {
    marginLeft: "10rem",
  },
});

const SearchResult = ({ placeInfo }: searchResultProp) => {
  const classes = useStyles();
  const [imgUrl, setImgUrl] = useState(placeInfo.image_url);

  const handleClick = useCallback(() => {
    setTimeout(() => {
      window.open(placeInfo.url, "_blank");
    }, 400);
  }, []);

  return (
    <LazyLoad
      overflow={true}
      height={280}
      offset={100}
      placeholder={<SearchResultPlaceHolder />}
    >
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <ButtonBase focusRipple onClick={() => handleClick()}>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Grid item md={3}>
                <Grid
                  container
                  item
                  direction="column"
                  justifyContent="center"
                  className={classes.image}
                >
                  <img
                    className={classes.img}
                    src={imgUrl}
                    onError={() => {
                      setImgUrl(PlaceHolderImage);
                    }}
                    alt=""
                  />
                </Grid>
              </Grid>
              <Grid item md={9} container direction="column" spacing={4}>
                <Grid item>
                  <Typography variant="h5">{placeInfo.name}</Typography>
                </Grid>
                <Grid item container justifyContent="flex-start">
                  <Grid item>
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
                  <Grid item container spacing={1} alignItems="center">
                    <Grid item>
                      <Rating
                        name="simple-controlled"
                        value={placeInfo.rating}
                        readOnly
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        {placeInfo.review_count
                          ? `(${placeInfo.review_count})`
                          : ""}
                      </Typography>
                    </Grid>
                    <Grid item className={classes.score}>
                      <Typography variant="body1">
                        {placeInfo.rating ? `Score: ${placeInfo.rating}` : ""}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ButtonBase>
        </Paper>
      </div>
    </LazyLoad>
  );
};

type searchResultProp = {
  placeInfo: businessDetails;
};
export default SearchResult;
