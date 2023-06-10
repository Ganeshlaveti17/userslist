import UserProfile from './components/UserProfile'

import './App.css'

const userDetailsList = [
  {
    uniqueno: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Virat',
    role: 'Batsmen',
  },
  {
    uniqueno: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'rohit',
    role: 'Batsmen',
  },
  {
    uniqueno: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Siraj',
    role: 'Bowler',
  },
  {
    uniqueno: 4,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Jadeja',
    role: 'AllRounder',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      {userDetailsList.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueno} />
      ))}
    </ul>
  </div>
)

export default App
