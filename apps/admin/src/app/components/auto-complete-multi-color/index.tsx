import { TextFieldProps } from "@mui/material";
import { FC } from "react";

import { AutocompleteMultiple } from "@pishroo/admin-components";
import useData from "./useDate";
import { Box } from "@mui/system";

export const AutoCompleteMultiColor: FC<
  {
    colorIds?: string[];
    onChange?: (colorIds?: string[]) => void;
  } & TextFieldProps
> = ({ colorIds, onChange = () => "", error, ...props }) => {
  const { loading, errorQuery, rows } = useData();

  const renderColorWithName = (color: typeof rows[0]) => {
    return (
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box
          component="span"
          sx={{
            backgroundColor: "#" + color.value,
            width: 20,
            height: 20,
            borderRadius: 50,
          }}
        />
        {color.name}
      </Box>
    );
  };

  const renderCircleColor = (color: typeof rows[0]) => {
    return (
      <Box
        component="span"
        sx={{
          backgroundColor: "#" + color.value,
          width: 20,
          height: 20,
          borderRadius: 50,
        }}
      />
    );
  };

  return (
    <AutocompleteMultiple
      error={error || !!errorQuery}
      loading={loading}
      autoFocus={false}
      items={rows}
      getLabel={(item) => item.name}
      getValue={(item) => item.id}
      selectedItems={rows.filter((item) => colorIds?.includes(item.id))}
      onSelectItems={(items) =>
        onChange(items ? items.map((item) => item.id) : [])
      }
      selectedItemChipProps={(item) => ({
        label: item.name,
        avatar: renderCircleColor(item),
      })}
      renderOption={renderColorWithName}
      {...props}
    />
  );
};

export default AutoCompleteMultiColor;
