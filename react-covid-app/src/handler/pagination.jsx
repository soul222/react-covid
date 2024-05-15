import { useState } from "react";

const Pagination = (initialPage = 0, itemsByPage, data) => {
    
    const [pageNumber, setPageNumber] = useState(initialPage);
    const totalPages = Math.ceil(data.length / itemsByPage);

    const handlePage = ({ selected }) => {
      setPageNumber(selected);
    };

    const indexLastItem = (pageNumber + 1) * itemsByPage;
    const indexFirstItem = indexLastItem - itemsByPage;
    const currentItem = data.slice(indexFirstItem, indexLastItem);

    return { pageNumber, totalPages, handlePage, currentItem };

};

export default Pagination;
