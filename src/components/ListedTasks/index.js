import './index.css'

const ListedTasks = props => {
  const {taskDetails} = props
  const {task, tag} = taskDetails

  return (
    <li className="tag-task-mini-container">
      <p className="task">{task}</p>
      <p className="tag">{tag}</p>
    </li>
  )
}

export default ListedTasks
