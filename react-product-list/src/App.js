import logo from './logo.svg';
import './App.css';
import data, {allCategories, uniqueCategories, categoriesAndCount, catsAndCounts} from './data'

// console.log(data)
// console.log(allCategories)
// console.log(uniqueCategories)
//console.log(catsAndCounts)

function App() {
  return (
    <div className="App">
      <h1>Productify</h1>
      <p>Products Count: {data.length}</p>
      <p>Category Count: {uniqueCategories.length}</p>
      <div>
        {catsAndCounts.map((obj) => {
          return (
            <button>
              {obj.name}
              <span> {obj.count} </span>
            </button>
          );
        })}
      </div>

      <div>
        {data.map((obj) => {
          return(
            <div>
              <h2>{obj.name}</h2>
              <p>{obj.description}</p>
              <p>{obj.price}</p>
              <small>Category: {obj.category} Rating: {obj.rating}</small>
            </div>
          )
        })}


      </div>
    </div>
  );
}

export default App;
