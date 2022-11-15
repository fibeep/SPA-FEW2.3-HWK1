import data from './data.json'

export default data

const allCategories = data.map(obj =>obj.category)

export {
    allCategories
}