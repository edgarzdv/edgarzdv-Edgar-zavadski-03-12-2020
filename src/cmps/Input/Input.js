import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { getAutoComplete } from "../../services/dataService";
const theme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: "#fff",
      },
    },
  },
});
const Input = (props) => {
  const { setSearchResault } = props;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [erorState, setError] = React.useState(false);
  const loading = open && options?.length === 0;

  useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  const _onChange = (e) => {
    const { value } = e.target;
    let active = true;
    const englishRgx = /^[a-zA-Z]*$/;

    if (!value.match(englishRgx)) {
      setError(true);
    } else if (erorState) {
      setError(false);
    }
    if (!loading) {
      return undefined;
    }
    (async () => {
      const countries = await getAutoComplete(value);
      if (active && countries?.length && !erorState) {
        setOptions(
          countries.map((item) => {
            return { ...item, name: item?.LocalizedName };
          })
        );
      }
    })();

    return () => {
      active = false;
    };
  };

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="asynchronous-demo"
        style={{ width: 300 }}
        open={open}
        onChange={(e, value) => setSearchResault(value)}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        getOptionSelected={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        renderInput={(params) => (
          <TextField
            {...params}
            label={erorState ? "English Only!" : "Search City"}
            variant="outlined"
            onChange={_onChange}
            error={erorState}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      />
    </ThemeProvider>
  );
};

export default Input;
