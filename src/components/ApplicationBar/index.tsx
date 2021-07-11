import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
// import { makeStyles } from "@material-ui/styles";

// const useStyles = makeStyles({
//   appBarIcon: {
//     color: "#ffffff",
//   },
// });

const ApplicationBar = ({ title }: appBarProps) => {
  // const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="primary" aria-label="menu">
          <MenuIcon color="secondary" />
        </IconButton>
        <Typography color="secondary" variant="h6">
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

type appBarProps = {
  title: string;
};

export default ApplicationBar;
