// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, avatarUrl, id, forksCount, issuesCount, starsCount} = details

  return (
    <li className="listcont">
      <img src={avatarUrl} className="imgstyle" alt={name} />
      <h1>{name}</h1>
      <div className="iconcont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="iconstyle"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="iconcont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="iconstyle"
        />
        <p>{forksCount}</p>
      </div>
      <div className="iconcont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="iconstyle"
        />
        <p>{issuesCount}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
