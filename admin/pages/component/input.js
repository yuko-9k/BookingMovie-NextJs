import TextField from "@material-ui/core/TextField";
import { forwardRef } from "react";
import { withStyles } from "@material-ui/core";

export const Input = forwardRef((props, ref) => {
  return (
    <TextField
      margin="normal"
      variant="outlined"
      inputRef={ref}
      {...props}
      fullWidth
      color="secondary"
    />
  );
});
