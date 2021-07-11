import { Grid, makeStyles, Paper } from "@material-ui/core";
import { businessDetails } from "../../shared/types/yelp-response.type";
import SearchResult from "../SearchResult";

const useStyles = makeStyles({
  scrollableDiv: {
    overflowY: "scroll",
    height: "75vh",
  },
  content: {
    marginBottom: "1rem",
    marginTop: "1rem",
  },
});

const SearchResultContainer = ({ businessDetails }: searchResultProps) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.scrollableDiv}>
        <Grid container justifyContent="space-evenly">
          {businessDetails.map((b: any, indx: number) => (
            <Grid key={`res-${indx}`} item className={classes.content}>
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
