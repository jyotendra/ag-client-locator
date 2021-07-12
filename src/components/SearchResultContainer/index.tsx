import { Grid, makeStyles, Paper } from "@material-ui/core";
import { businessDetails } from "../../shared/types/yelp-response.type";
import SearchResult from "../SearchResult";

const useStyles = makeStyles({
  scrollableDiv: {
    overflowY: "scroll",
    height: "75vh",
  },
  content: {
    padding: "1rem",
  },
});

const SearchResultContainer = ({ businessDetails }: searchResultProps) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.scrollableDiv}>
        <Grid container direction="column">
          {businessDetails.map((b: any, indx: number) => (
            <Grid item key={`res-${indx}`} className={classes.content}>
              <SearchResult placeInfo={b} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Paper>
  );
};

type searchResultProps = {
  businessDetails: businessDetails[];
};

export default SearchResultContainer;
