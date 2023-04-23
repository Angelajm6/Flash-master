import React from 'react';
import { useQuery } from '../../utils/queries';

import { GET_USERS, GET_PACKS } from '../../utils/queries';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchUser, {data: GET_USERS}] = useQuery(GET_USERS);
    const [searchPack, {data: GET_PACKS}] = useQuery(GET_PACKS);

    const handleSearch = (event) => {
        event.preventDefault();
        searchUser({ variables: {name: searchTerm}});
        searchPack({variables: {name: searchPack}});
    };

}


