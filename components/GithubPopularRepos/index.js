import {Component} from 'react'
import RepositoryItem from '../RepositoryItem'
import LanguageFilterItem from '../LanguageFilterItem'
import Loader from 'react-loader-spinner'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {languagelist: [], languageid: 'ALL', isloading: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {languagelist, languageid} = this.state
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${languageid}`,
    )
    const data = await response.json()

    const updatedData = data.popular_repos.map(each => ({
      avatarUrl: each.avatar_url,
      forksCount: each.forks_count,
      id: each.id,
      issuesCount: each.issues_count,
      name: each.name,
      starsCount: each.stars_count,
    }))

    this.setState({languagelist: updatedData, isloading: false})
  }

  changelanguage = id => {
    const {languageid} = this.state
    this.setState({languageid: id}, this.getData)
    console.log(languageid)
  }

  render() {
    const {languagelist, isloading} = this.state
    return (
      <div className="fullcont">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <div className="itemscont">
            <h1>Popular</h1>
            <ul className="languagecont">
              {languageFiltersData.map(each => (
                <LanguageFilterItem
                  languageFiltersData={each}
                  key={each.id}
                  changelanguage={this.changelanguage}
                />
              ))}
            </ul>

            <ul className="repositories-list">
              {languagelist.map(eachRepository => (
                <RepositoryItem
                  key={eachRepository.id}
                  details={eachRepository}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default GithubPopularRepos
