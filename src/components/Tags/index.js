import './index.css'

const Tags = props => {
  const {tags, selectTag, isActive} = props
  const {optionId, displayText} = tags

  const buttonStyle = isActive ? 'active-background' : ''

  const clickTag = () => {
    selectTag(optionId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tags-button ${buttonStyle}`}
        onClick={clickTag}
      >
        {displayText}
      </button>
    </li>
  )
}

export default Tags
