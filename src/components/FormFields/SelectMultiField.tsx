import { useState } from "react";
import { Theme, useTheme } from "@mui/material/styles";
import { FormHelperText, Chip, FormControl, MenuItem, InputLabel, OutlinedInput, Box } from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { Control, useController } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(name: string, personName: readonly any[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

interface OptionState {
    name: string;
    slug?: string;
}

interface SelectMultiFieldProps {
    name: string;
    label: string;
    control: Control<any>;
    disabled?: boolean;
    options: OptionState[];
}

export const SelectMultiField = ({ name, label, control, disabled, options }: SelectMultiFieldProps) => {
    const theme = useTheme();

    const {
        field: { value, onChange, onBlur },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });
    const [listSelect, setListSelect] = useState<string[]>(value);

    const handleChange = (event: SelectChangeEvent<typeof listSelect>) => {
        const {
            target: { value },
        } = event;
        setListSelect(typeof value === "string" ? value.split(",") : value);
        onChange(event);
    };

    return (
        <div className="mt-4">
            <FormControl fullWidth variant="outlined" disabled={disabled} error={invalid}>
                <InputLabel id={`${name}_label`}>{label}</InputLabel>
                <Select
                    labelId={`${name}_label`}
                    multiple
                    value={listSelect}
                    onChange={handleChange}
                    onBlur={onBlur}
                    input={<OutlinedInput id={`${name}_label`} label={label} />}
                    renderValue={(selected) => {
                        return (
                            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                {selected.map((value) => {
                                    const valueFilter = options.find((item) => item.slug === value);
                                    return (
                                        <Chip key={`${valueFilter?.slug}_${value}`} label={valueFilter?.name} />
                                    );
                                })}
                            </Box>
                        );
                    }}
                    MenuProps={MenuProps}
                >
                    {options.map(({ name, slug }) => (
                        <MenuItem key={name} value={slug} style={getStyles(name, listSelect, theme)}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
                <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
        </div>
    );
};
