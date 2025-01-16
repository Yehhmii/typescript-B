// Type inferrance
let chef = 'Ade'
let pans = 7
let canCook = true
let fruits = ["mangoes", "bananas", "apples"]  // type arrays

chef = "Mike"
pans = 10
canCook = false

fruits.push("oranges")
let singleFruit = fruits[1]

// Type annotation
let planet: string = 'Earth'
let moon: number = 1
let isRound: boolean = true
let group: number[]    // type arrays
let hsla: [number, string, string, number]

planet = 'Mars'
moon = 12
isRound = false 

group = [23, 32, 54]
group.push(32)

hsla = [10, "100%", "55%", 1]

// null and undefined 
let something: null
let anotherSomething: undefined   //these two can't be changed

// auy type
let age: any
let myState: any

// object literal 
let user: {firstName: string, age: number, id: number} = {
    firstName: "Yehhmii",
    age: 10,
    id: 1
}

user.firstName = "Doyin"
user.id = 2

// note that you can also infer type in onject literal
let report = {
    company: 'Eco',
    id: 1
}

report.company = 'Access'



// functions 

function addTwoNumbers(a:number, b:number): number  {
    return a + b
}


const subtrackTwoNumbers = (a:number, b:number): number => {
    return a - b
}

addTwoNumbers(2, 2)
subtrackTwoNumbers(8, 3)

function sumTotal(items: number[]) {
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total)
}

sumTotal([2,34,5,4,7,6,8])

// working with interfaces
interface Author {
    name_author: string,
    avatar: string
}

const new_author: Author = {name_author: 'Adeoye', avatar: './image/myguy.png'}

interface PostBlog {
    title: string,
    body: string, 
    id: number,
    created_at: Date,
    author: Author
}

const new_post: PostBlog = {
    title: 'My first post',
    body: 'Support my brand please',
    id: 1,
    created_at: new Date,
    author: new_author
}

function newPost(post: PostBlog) {
    console.log(`This is a new post by ${post.author.name_author} which said ${post.body}`)
}

newPost(new_post)

// with arrays 
let the_array: PostBlog[] = []

the_array.push(new_post)


// type aliaes
type Rgb = [number, number, number]

function getRandomColor(): Rgb {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)

    return [r, g, b]
}

const oneColor = getRandomColor()
const twoColor = getRandomColor()

console.log(oneColor, twoColor)


// union type
let id: string | number

id = "myNumber"
id = 23

type Id = number | string 
// using type guide
function toConvert(id: Id) {
    if (typeof id === 'string') {
        return parseInt(id)
    } else {
        return id.toString()
    }
}

const oneNum = toConvert('70')
const twoNum = toConvert(20)

console.log(oneNum, twoNum)