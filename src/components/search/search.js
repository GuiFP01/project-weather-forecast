import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../api"

const Search = ({onSearchChange}) => {


    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {

        try {
            const response = await fetch(`${geoApiUrl}/cities?namePrefix=${inputValue}`, geoApiOptions);
            const response_2 = await response.json();
            return {
                options: response_2.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    };
                })
            };
        } catch (err) {
            return new Error(err);
        }

    }

    const keepOnChangeMethod = (searchData) => {

        setSearch(searchData);
        onSearchChange(searchData);
    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: '5px',
            border: '2px solid #ccc',
            boxShadow: state.isFocused ? '0 0 0 2px #3699FF' : null,
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#3699FF' : null,
            color: state.isFocused ? 'white' : null,
        }),
    }

    return(
        <AsyncPaginate

            placeholder="Search the city"
            debounceTimeout={600}
            value={search}
            onChange={keepOnChangeMethod}
            loadOptions={loadOptions}
            className="searchBox"
            styles={customStyles}
        />
    );
}

export default Search;
