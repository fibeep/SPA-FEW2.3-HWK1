import logo from './logo.svg';
import './App.css';
import data, {allCategories, uniqueCategories, categoriesAndCount, catsAndCounts} from './data'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList'
import Header from './components/Header'
import {useState} from 'react'
import Inventory from './components/Inventory'


// console.log(data)
// console.log(allCategories)
// console.log(uniqueCategories)
//console.log(catsAndCounts)

function App() {

  const [category, setCategory] = useState('Tools')


  return (
    <div className="App">
      <Header
        title="Productify"
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />

      <CategoryList 
      category={category} 
      onClick={ (newCategory) => {setCategory(newCategory)} }
      />

      <ProductList category={category} />

      <Inventory />
    </div>
  );
}

export default App;
