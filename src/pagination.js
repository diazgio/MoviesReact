/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Pagination(props) {

  const getPage = () => {
    const result = [];
    for(let i; i < props.total; i++) {
      result.push(
      <>
        <a onClick={props.onChange}
          className={props.page == i ? "active" : ""}
          href="#">
          {(i + 1)}
        </a>
        <a href="#"><i className="ion-arrow-right-b"></i></a>
      </>
      );

    }
    return result;
  }
  return(
    <div className="topbar-filter">
      
      <div className="pagination2">
        <span>Page {props.page} of {props.total}:</span>
        {getPage()}
        <a href="#">2</a>
        
      </div>
    </div>
  );
}