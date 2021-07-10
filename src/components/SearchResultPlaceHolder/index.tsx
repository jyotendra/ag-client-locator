import { makeStyles } from "@material-ui/styles";
import ReactPlaceholder from "react-placeholder";
import { RectShape, TextBlock } from "react-placeholder/lib/placeholders";
import "react-placeholder/lib/reactPlaceholder.css";

const useStyles = makeStyles({
  searchBar: {
    width: "90%",
  },
});

const resultsPlaceholder = (
  <div className="my-awesome-placeholder">
    <RectShape color="blue" style={{ width: 30, height: 80 }} />
    <TextBlock rows={7} color="yellow" />
  </div>
);

const SearchResultPlaceHolder = () => {
  return (
    <ReactPlaceholder
      ready={false}
      showLoadingAnimation
      customPlaceholder={resultsPlaceholder}
    >
      <div></div>
    </ReactPlaceholder>
  );
};

type placeImageProps = {
  imageUrl: string;
};

export default SearchResultPlaceHolder;
