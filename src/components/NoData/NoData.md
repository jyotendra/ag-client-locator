```js
import { ThemeProvider } from "@material-ui/core";
import { theme, colorPalette } from "../../theme";

<ThemeProvider theme={theme}>
  <NoData fillColor={colorPalette.primary.main} height="20%" width="20%" />
</ThemeProvider>;
```
