import Navbar from '../Navbar/index'
import './index.css'

const profileDetails = {
  name: 'rahulAttuluri',
  profileImageUrl:
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  followers: 145,
  following: 164,
  posts: 0,
}

const Profile = () => (
  <>
    <Navbar />
    <div className="profile-container">
      <img
        src={profileDetails.profileImageUrl}
        className="profile-pic-image"
        alt="profile pic"
      />
      <div className="follower-details">
        <h1 className="name">{profileDetails.name}</h1>
        <div className="follower-container">
          <div>
            <p className="follower-head">Posts</p>
            <p className="follower-count">{profileDetails.posts}</p>
          </div>
          <div>
            <p className="follower-head">Followers</p>
            <p className="follower-count">{profileDetails.followers}</p>
          </div>
          <div>
            <p className="follower-head">Following</p>
            <p className="follower-count">{profileDetails.following}</p>
          </div>
        </div>
      </div>
    </div>
    <hr className="line" />
    <div className="no-posts">
      <center>
        <img
          src="https://res.cloudinary.com/defacaof3/image/upload/v1706281015/87610fa1a0ae891d-removebg-preview_jv0gvi.png"
          className="no-posts-image"
          alt="no posts"
        />
      </center>
    </div>
  </>
)

export default Profile
