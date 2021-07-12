import { Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  paper: (props: noDataProps) => ({
    height: props.height,
    width: props.width,
  }),
  carSvg: {
    padding: "10%",
  },
  infoText: {
    marginRight: "25%",
  },
});

const NoData = ({ fillColor, height, width }: noDataProps) => {
  const classes = useStyles({ fillColor, height, width });
  return (
    // <Paper className={classes.paper}>
    <Grid
      container
      justifyContent="center"
      direction="column"
      alignContent="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <svg
          className={classes.carSvg}
          xmlns="http://www.w3.org/2000/svg"
          fill="current"
          stroke="current"
          viewBox="0 0 350 350"
          height="80%"
          width="80%"
        >
          <g stroke="none" strokeMiterlimit={10} fill={fillColor}>
            <path d="M283.208 31.996h-23.931v65.749a5.773 5.773 0 0011.545 0V77.933h12.39c12.133 0 22.002-9.87 22.002-21.998v-1.941c-.004-12.13-9.873-21.998-22.006-21.998zm10.46 23.935c0 5.769-4.691 10.456-10.46 10.456h-12.39v-22.85h12.39c5.769 0 10.46 4.692 10.46 10.457v1.937zM70.036 285.16H40.17c-8.683 0-15.747-7.063-15.747-15.746v-8.387c0-8.682 7.064-15.746 15.747-15.746h29.867c8.683 0 15.747 7.064 15.747 15.746v8.387c0 8.683-7.064 15.747-15.747 15.747zM40.17 256.827a4.21 4.21 0 00-4.205 4.205v8.387a4.21 4.21 0 004.205 4.205h29.867a4.21 4.21 0 004.205-4.205v-8.387a4.21 4.21 0 00-4.205-4.205H40.17zM204.677 285.16h-29.868c-8.682 0-15.746-7.063-15.746-15.746v-8.387c0-8.682 7.064-15.746 15.746-15.746h29.868c8.682 0 15.75 7.064 15.75 15.746v8.387c-.003 8.683-7.068 15.747-15.75 15.747zm-29.868-28.334a4.21 4.21 0 00-4.205 4.205v8.387a4.21 4.21 0 004.205 4.205h29.868a4.211 4.211 0 004.209-4.205v-8.387a4.211 4.211 0 00-4.21-4.205H174.81zM140.204 270.994h-35.562c-3.19 0-5.773-2.583-5.773-5.773s2.583-5.773 5.773-5.773h35.566a5.774 5.774 0 11-.004 11.546z" />
            <path d="M241.838 244.363l-9.538-15.148a17.407 17.407 0 00-10.686-7.683l-20.672-53.192c-2.847-7.328-10.044-12.253-17.901-12.253H61.805c-7.982 0-15.008 4.808-17.902 12.25l-20.667 53.191a17.434 17.434 0 00-10.69 7.683l-9.542 15.152a17.563 17.563 0 00-2.692 9.336v74.47c.004 11.024 8.966 19.987 19.987 19.987h27.677c11.02 0 19.987-8.963 19.987-19.983v-20.715h108.924v20.715c0 11.02 8.966 19.983 19.986 19.983h27.674c11.02 0 19.983-8.963 19.983-19.983v-74.47c0-3.315-.93-6.544-2.692-9.34zM54.663 172.514a7.624 7.624 0 017.146-4.89H183.04c3.135 0 6.006 1.965 7.142 4.89l18.85 48.509h-17.765c-2.79-17.968-18.322-31.782-37.06-31.782-18.738 0-34.271 13.814-37.06 31.782H35.812l18.85-48.509zm124.884 48.509h-50.686c2.633-11.57 12.985-20.24 25.343-20.24 12.355 0 22.706 8.67 25.343 20.24zm-123.13 107.15c0 4.656-3.789 8.44-8.445 8.44H20.299c-4.657 0-8.442-3.788-8.442-8.44v-21.835c1.875.689 3.875 1.12 5.987 1.12h38.577v20.715zm168.13 8.44h-27.674c-4.66 0-8.445-3.788-8.445-8.44v-20.715h38.577c2.113 0 4.108-.435 5.987-1.12v21.835c-.004 4.652-3.789 8.44-8.445 8.44zm8.441-46.68a5.997 5.997 0 01-5.986 5.988H17.84a5.997 5.997 0 01-5.987-5.987v-36.232c0-1.132.32-2.236.922-3.193l9.539-15.148a5.953 5.953 0 015.064-2.797h190.085a5.944 5.944 0 015.065 2.797l9.538 15.152c.603.953.922 2.054.922 3.19V289.932zM312.862-1.944h-67.846c-18.213 0-33.034 14.82-33.034 33.033v67.842c0 18.217 14.817 33.038 33.034 33.038h30.871v210.414a5.773 5.773 0 0011.546 0V131.969h25.432c18.213 0 33.038-14.821 33.038-33.038V31.089c-.008-18.213-14.828-33.033-33.041-33.033zm21.492 100.879c0 11.853-9.64 21.496-21.496 21.496h-67.842c-11.849 0-21.492-9.643-21.492-21.496V31.089c0-11.852 9.64-21.492 21.492-21.492h67.846c11.852 0 21.496 9.64 21.496 21.492v67.846z" />
          </g>
        </svg>
      </Grid>
      <Grid item xs={12} className={classes.infoText}>
        <Typography color="primary" variant="caption">
          Try New Keyword
        </Typography>
      </Grid>
    </Grid>
    // </Paper>
  );
};

type noDataProps = {
  fillColor: string;
  height: string;
  width: string;
};

export default NoData;
