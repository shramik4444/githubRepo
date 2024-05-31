// Write your code here

const LanguageFilterItem = props => {
  const {languageFiltersData, changelanguage} = props
  const {language, id} = languageFiltersData

  const onclicklanguage = () => {
    changelanguage(id)
  }

  return (
    <li>
      <button onClick={onclicklanguage} type="button">
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
