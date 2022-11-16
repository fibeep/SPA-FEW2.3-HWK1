// import data, {
//   allCategories,
//   uniqueCategories,
//   categoriesAndCount,
//   catsAndCounts,
// } from "../data";

import './Header.css'

function Header(props) {

    

    return (
      <div className="Header">
        <h1>{props.title}</h1>
        <p>Products Count: {props.productCount}</p>
        <p>Category Count: {props.categoryCount}</p>
      </div>
    );
}

export default Header