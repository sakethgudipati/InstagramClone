import './index.css'

const StoryItem = props => {
  const {storyInfo} = props
  const {imageUrl, name} = storyInfo

  return (
    <li className="story-item">
      <img src={imageUrl} className="story-image" alt="profile pic" />
      <p className="story-para">{name}</p>
    </li>
  )
}

export default StoryItem
