import './index.css'

const TagsForTasks = props => {
  const {tagsForTasksDetails} = props
  const {optionId, displayText} = tagsForTasksDetails

  return <option value={optionId}>{displayText}</option>
}

export default TagsForTasks
