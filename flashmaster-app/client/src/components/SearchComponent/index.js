import React from 'react';
import { useQuery } from '../../utils/queries';

import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchUser, {data: QUERY_SINGLE_USER}] = useQuery(QUERY_SINGLE_USER);
    const [searchMe, {data: QUERY_ME}] = useQuery(QUERY_ME);

    const handleSearch = (event) => {
        event.preventDefault();
        searchUser({ variables: {name: searchTerm}});
        searchMe({variables: {name: searchPack}});
    };

}


