import style from "./ProvinsiTable.module.css";
import Pagination from '../../handler/pagination';
import ReactPaginate from 'react-paginate';
import { Element } from "react-scroll";
const ProvinsiTable = (props) => {

    const { covidData } = props;
    const itemsByPage = 17;
    const {  pageNumber, totalPages, handlePage, currentItem } = Pagination(0, itemsByPage, covidData);
    
    return (
      
      <Element className={style.container} name="provinsi">
        <div className={style.provinsiTableTitle} id="provinsi">
          <h2>Provinsi</h2>
          <p>Data Covid Berdasarkan Provinsi</p>
        </div>
        <div className={style.provinsiTableDescription}>
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Provinsi</th>
                <th>Positif</th>
                <th>Sembuh</th>
                <th>Meninggal</th>
                <th>Dirawat</th>
              </tr>
            </thead>
            <tbody>
              {currentItem.map((provinsi, index) => (
                <tr key={index}>
                  <td >{pageNumber * itemsByPage + index + 1}</td>
                  <td >{provinsi.kota}</td>
                  <td>{parseInt(provinsi.kasus, 10).toLocaleString("id-ID").replace(/,/g, '.')}</td>
                  <td>{parseInt(provinsi.sembuh, 10).toLocaleString("id-ID").replace(/,/g, '.')}</td>
                  <td>{parseInt(provinsi.meninggal, 10).toLocaleString("id-ID").replace(/,/g, '.')}</td>
                  <td>{parseInt(provinsi.dirawat, 10).toLocaleString("id-ID").replace(/,/g, '.')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ReactPaginate
          previousLabel={"← Previous"}
          nextLabel={"Next →"}
          pageCount={totalPages}
          onPageChange={handlePage}
          containerClassName={style.pagination}
          previousLinkClassName={style.paginationLink}
          nextLinkClassName={style.paginationLink}
          disabledClassName={style.paginationDisabled}
          activeClassName={style.paginationActive}
        />
      </Element>

  );

};

export default ProvinsiTable;
