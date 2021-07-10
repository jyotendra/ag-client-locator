```jsx
import { ThemeProvider } from "@material-ui/core";
import { theme } from "../../theme";

<ThemeProvider theme={theme}>
  <SearchBar
    cback={(val) => {
      console.log(val);
    }}
  />
</ThemeProvider>;
```
