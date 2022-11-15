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
{catsAndCounts.map(obj => {
  return(
    <button>{obj.name}
    <span> {obj.count} </span>
    </button>
  )


})}
    </div>
  );
}

export default App;
