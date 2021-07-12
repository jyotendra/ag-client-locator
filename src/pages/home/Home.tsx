import { Container, Grid, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useAppDispatch, useAppSelector } from "../../app-store/hooks";
import ApplicationBar from "../../components/ApplicationBar";
import SearchBar from "../../components/SearchBar";
import {
  clearSearchResults,
  handleFetchError,
  receivedNewKeyword,
} from "./home.slice";

import "./home.scss";
import { makeStyles } from "@material-ui/styles";
import NoData from "../../components/NoData";
import { colorPalette } from "../../theme";
import SearchResultContainer from "../../components/SearchResultContainer";
import Loader from "../../components/Loader";

const useStyles = makeStyles({
  searchContainer: {
    paddingTop: "5rem",
  },
  resultContainer: {},
  topSpacer: {
    marginTop: "2rem",
  },
  bottomSpacer: {
    marginBottom: "1rem",
  },
});

export const Home = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const doSearch = (searchKey: string) => {
    dispatch(receivedNewKeyword({ keyWord: searchKey }));
  };

  const handleErrorBarClose = () => {
    dispatch(clearSearchResults());
    dispatch(handleFetchError());
  };

  const searchResults = useAppSelector((state) => state.home.searchResults);
  const shouldShowLoader = useAppSelector((state) => state.home.showLoader);

  const [errorOccured, errorInfo] = useAppSelector((state) => [
    state.home.error.encountered,
    state.home.error.info,
  ]);
  return (
    <div>
      <ApplicationBar title="Parking Client Locator"></ApplicationBar>
      <Container className={classes.searchContainer}>
        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          // alignContent="center"
        >
          <Grid container item>
            <Grid item md={1}></Grid>
            <Grid item md={10}>
              <SearchBar cback={doSearch} />
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
          <Grid item className={classes.topSpacer}></Grid>
          <Grid item className={classes.resultContainer}>
            {shouldShowLoader ? (
              <Loader />
            ) : searchResults.length > 0 ? (
              <Grid container>
                <Grid item md={1}></Grid>
                <Grid item md={10}>
                  {<SearchResultContainer businessDetails={searchResults} />}
                </Grid>
                <Grid item md={1}></Grid>
              </Grid>
            ) : (
              <NoData
                fillColor={colorPalette.primary.main}
                height="20%"
                width="20%"
              />
            )}
          </Grid>
          <Grid item className={classes.bottomSpacer}></Grid>
        </Grid>
      </Container>

      <Snackbar
        open={errorOccured}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onClose={() => handleErrorBarClose()}
      >
        <Alert onClose={() => handleErrorBarClose()} severity="error">
          {errorInfo}
        </Alert>
      </Snackbar>
    </div>
  );
};
