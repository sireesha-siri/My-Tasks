import {Component} from 'react'

import {v4 as uniqueId} from 'uuid'

import './index.css'

import TagsForTasks from '../TagsForTasks'
import Tags from '../Tags'
import ListedTasks from '../ListedTasks'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    userInput: '',
    tagText: tagsList[0].optionId,
    createdTasksList: [],
    activeTag: '',
  }

  changeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  selectTagForTasks = event => {
    this.setState({tagText: event.target.value})
  }

  submitAddTask = event => {
    event.preventDefault()

    const {userInput, tagText} = this.state

    const newTask = {
      id: uniqueId(),
      task: userInput,
      tag: tagText,
    }

    this.setState(prev => ({
      createdTasksList: [...prev.createdTasksList, newTask],
      userInput: '',
      tagText: tagsList[0].optionId,
    }))
  }

  selectTag = text => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === text ? '' : text,
    }))
  }

  render() {
    const {userInput, tagText, createdTasksList, activeTag} = this.state

    const filteredList =
      activeTag === ''
        ? createdTasksList
        : createdTasksList.filter(each => each.tag === activeTag)

    return (
      <div className="main-container">
        <div className="create-task-container">
          <h1 className="create-tasks-heading">Create a Task!</h1>

          <form onSubmit={this.submitAddTask}>
            <div className="mini-container">
              <label htmlFor="task">Task</label>
              <input
                id="task"
                type="text"
                placeholder="Enter the task here"
                onChange={this.changeUserInput}
                value={userInput}
              />
            </div>

            <div className="mini-container">
              <label htmlFor="tags">Tags</label>
              <select
                id="tags"
                value={tagText}
                onChange={this.selectTagForTasks}
              >
                {tagsList.map(each => (
                  <TagsForTasks
                    key={each.optionId}
                    tagsForTasksDetails={each}
                  />
                ))}
              </select>
            </div>

            <div className="button-container">
              <button type="submit" className="add-task-btn">
                Add Task
              </button>
            </div>
          </form>
        </div>

        <div className="tasks-container">
          <h1 className="tags-heading">Tags</h1>

          <ul className="tags-list">
            {tagsList.map(each => (
              <Tags
                key={each.optionId}
                tags={each}
                isActive={each.displayText === activeTag}
                selectTag={this.selectTag}
              />
            ))}
          </ul>

          <h1 className="tags-heading">Tasks</h1>

          {createdTasksList.length === 0 ? (
            <div className="no-tasks-container">
              <p className="no-tasks-heading">No Tasks Added Yet</p>
            </div>
          ) : (
            <ul className="tasks-list">
              {filteredList.map(each => (
                <ListedTasks key={each.id} taskDetails={each} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default MyTasks
