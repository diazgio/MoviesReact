/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Pagination(props) {

  const getActulPage = () => {
    const result = [];

    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      result.push(
        <a key={i} onClick={() => props.onChange(pagina)}
          className={props.page === pagina ? 'active' : ''}>
          {pagina}
        </a>
      );
    }

    return result;
  }

  return(
    <div className="topbar-filter">
      
      <div className="pagination2">
        <span>Page {props.page} of {props.total}:</span>
        {getActulPage()}
      </div>
    </div>
  );
}