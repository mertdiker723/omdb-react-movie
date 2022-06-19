import { InputLabel, MenuItem, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type SelectFilterProps = {
    value: string;
    onChange: (event: SelectChangeEvent) => void;
    label: string;
    data: any[];
    emptyItem: boolean;
}

const SelectInput = ({ value, onChange, label, data, emptyItem }: SelectFilterProps) => {
    return (
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">{label}</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={value}
                label={label}
                onChange={onChange}
            >
                {
                    emptyItem && <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                }
                {
                    data.map((item: any) => {
                        return (
                            < MenuItem value={item.value} key={item.id}> {item.title}</MenuItem>
                        )
                    })
                }
            </Select>
        </FormControl>
    )
}

export default SelectInput