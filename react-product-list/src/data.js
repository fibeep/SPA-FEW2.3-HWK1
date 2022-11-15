import data from './data.json'

export default data

const allCategories = data.map(obj =>obj.category)

// const uniqueCategories = Array.from(new Set(allCategories))




const cats = allCategories.reduce((acc, cat) => {
    acc[cat] = 0
    return acc
}, {})

const uniqueCategories = Object.keys(cats)

export {
    allCategories,
    uniqueCategories
}