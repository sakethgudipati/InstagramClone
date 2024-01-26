import {Component} from 'react'
import './index.css'
import {BsThreeDots} from 'react-icons/bs'
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaHeart,
  FaBookmark,
} from 'react-icons/fa'
import {FiSend} from 'react-icons/fi'

class PostItem extends Component {
  state = {
    isLiked: false,
    isSaved: false,
  }

  onClickLike = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  onClickSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  render() {
    const {postInfo} = this.props
    const {
      profileImage,
      postImageUrl,
      place,
      likes,
      username,
      caption,
      tags,
    } = postInfo
    const {isLiked, isSaved} = this.state
    const updatedLikes = isLiked ? likes + 1 : likes

    return (
      <li className="post-item">
        <div className="header-part">
          <div className="profile-post">
            <img
              src={profileImage}
              className="post-profile"
              alt="profile pic"
            />
            <div>
              <p className="post-username">{username}</p>
              <p className="place">{place}</p>
            </div>
          </div>
          <BsThreeDots className="three-dots" />
        </div>
        <img src={postImageUrl} className="post-image" alt="post" />
        <div className="likes-comments-part">
          <div className="p1">
            {isLiked ? (
              <FaHeart
                className="like-icon"
                onClick={this.onClickLike}
                fill="red"
              />
            ) : (
              <FaRegHeart className="like-icon" onClick={this.onClickLike} />
            )}
            <FaRegComment className="icons" />
            <FiSend className="icons" />
          </div>
          {isSaved ? (
            <FaBookmark className="icons" onClick={this.onClickSave} />
          ) : (
            <FaRegBookmark className="icons" onClick={this.onClickSave} />
          )}
        </div>
        <p className="likes">{updatedLikes} likes</p>
        <p className="username">
          {username} <span className="caption">{caption}</span>
          <br />
          <br />
          <span className="tags">{tags}</span>
        </p>
      </li>
    )
  }
}

export default PostItem
