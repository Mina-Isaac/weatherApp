/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { createFilterOptions } from "@material-ui/lab";

interface Props<T> {
  options: T[];
  handleChange: (_: any, value: T | null) => void;
  optionLabel: string;
  searchLabel: string;
  disabled?: boolean;
  default?: any;
  getOptionSelected?: (option: string) => boolean
}

export default function SearchInput(props:Props<any>) {
  const defaultFilterOptions = createFilterOptions({
    limit: 10,
    ignoreCase: true,
  });
  return (
    <Autocomplete 
      options={props.options}
      defaultValue = {props.default}
      getOptionLabel={(option) => option[props.optionLabel]}
      getOptionSelected = {(option:any, value:any) => option.code === value.code}
      style={{ width: 300 }}
      filterOptions={defaultFilterOptions}
      limitTags={10}
      onChange={props.handleChange}
      disabled={props.disabled}
      renderInput={(params) => (
        <TextField {...params} label={props.searchLabel} variant="outlined" />
      )}
    />
  );
}
