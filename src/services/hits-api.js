import axios from 'axios';

const fetchHits = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
    return axios
        .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21813787-5b33d57d4a7410a6824d2f569&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response =>response.data.hits)
}

export default { fetchHits }