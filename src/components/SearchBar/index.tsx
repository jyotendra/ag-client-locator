import { InputAdornment, TextField } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles({
  searchBar: {
    width: "90%",
  },
});

const SearchBar = ({ cback }: searchBarProps) => {
  const classes = useStyles();
  const [iput, setIput] = useState("");

  return (
    <TextField
      className={classes.searchBar}
      variant="outlined"
      label="Location"
      value={iput}
      onChange={(e) => {
        setIput(e.target.value);
        cback(e.target.value);
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <LocationOnIcon color="primary" />
          </InputAdornment>
        ),
      }}
    />
  );
};

type searchBarProps = {
  cback: (val: string) => void;
};

export default SearchBar;
