import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, geoApiUrl } from "../api"

const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async (inputValue) => {

        try {
            const response = await fetch(`${geoApiUrl}/cities?namePrefix=${inputValue}`, geoApiOptions);
            const response_1 = await response.json();
            return {
                options: response_1.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`
                    };
                })
            };
        } catch (err) {
            return console.error(err);
        }

    }

    const keepOnChangeMethod = (searchData) => {

        setSearch(searchData);
        onSearchChange(searchData);
    }

    return(
        <AsyncPaginate

            placeholder="Search the city"
            debounceTimeout={600}
            value={search}
            onChange={keepOnChangeMethod}
            loadOptions={loadOptions}
        />
    );
}

export default Search;
