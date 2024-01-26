import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Navbar from '../Navbar/index'
import StoryItem from '../StoryItem/index'
import PostItem from '../PostItem/index'
import './index.css'

const storyList = [
  {
    id: 0,
    imageUrl: 'https://randomuser.me/api/portraits/men/62.jpg',
    name: 'jacobheens322',
  },
  {
    id: 1,
    imageUrl:
      'https://d8it4huxumps7.cloudfront.net/images/partners/new_organisation_image-cs4yMxernE12738555223ijHA6MaSb.png',
    name: 'mhtechin',
  },
  {
    id: 2,
    imageUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
    name: 'user23jj',
  },
  {
    id: 3,
    imageUrl: 'https://randomuser.me/api/portraits/men/73.jpg',
    name: 'nick_hanks_2332',
  },
  {
    id: 4,
    imageUrl: 'https://randomuser.me/api/portraits/men/36.jpg',
    name: 'AnnyN32',
  },
  {
    id: 5,
    imageUrl: 'https://randomuser.me/api/portraits/men/58.jpg',
    name: 'RamnShaw32',
  },
  {
    id: 6,
    imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
    name: 'Henryj_Johnson',
  },
  {
    id: 7,
    imageUrl: 'https://randomuser.me/api/portraits/men/84.jpg',
    name: 'TreyJackson455',
  },
]

const postsList = [
  {
    id: 500,
    profileImage:
      'https://d8it4huxumps7.cloudfront.net/images/partners/new_organisation_image-cs4yMxernE12738555223ijHA6MaSb.png',
    postImageUrl:
      'https://media.licdn.com/dms/image/D4D22AQE7YjeCt7hFIQ/feedshare-shrink_1280/0/1703426474385?e=1709164800&v=beta&t=vfyGK4Ji5SLg4cmaB-xgqWzJyXCrxUlut4lHrbMUk1Y',
    place: 'Pune, Maharashtra',
    likes: 1456,
    username: 'mhtechin',
    caption: 'Send resume to this mail @apply@mhtechin.com',
    tags: '#mhtechin #mhtechinrecruitment #innovation #jobs',
  },
  {
    id: 501,
    profileImage: 'https://randomuser.me/api/portraits/men/36.jpg',
    postImageUrl:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08f4bebe-3b7a-487d-8e6c-7c53b1744e76/d51zf7u-7408a445-81dd-47cb-b774-06f68839cdae.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA4ZjRiZWJlLTNiN2EtNDg3ZC04ZTZjLTdjNTNiMTc0NGU3NlwvZDUxemY3dS03NDA4YTQ0NS04MWRkLTQ3Y2ItYjc3NC0wNmY2ODgzOWNkYWUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nH39u9QYaAlMPBcrMIjRnDpa9OYBt3sRooCyBRkChnw',
    place: 'Hyderabad, Telangana',
    likes: 62,
    username: 'AnnyN32',
    caption: 'Getting close to nature :)',
    tags:
      '#nature #photography #naturephotography #love #travel #photooftheday #instagood #beautiful #picoftheday #photo #instagram #naturelovers #art #landscape #like #follow #travelphotography #bhfyp #happy #sunset #ig #wildlife #summer #life #sky #beauty #mountains #flowers #photographer #instadaily',
  },
  {
    id: 503,
    profileImage: 'https://randomuser.me/api/portraits/men/37.jpg',
    postImageUrl:
      'https://spn-sta.spinny.com/blog/20231103174155/new-Tata-Safari-1160x653.webp?compress=true&quality=80&w=1200&dpr=2.6',
    place: 'None',
    likes: 164,
    username: 'Henryj_Johnson',
    caption:
      'Tata Safar all the way, bought this car an year ago and what a brilliant performance! Surely you guys must try',
    tags:
      '#cars #car #carsofinstagram #carporn #bmw #auto #carlifestyle #s #carphotography #photography #supercars #ford #jdm #carswithoutlimits #automotive #mercedes #audi #porsche #ferrari #turbo #instacar #f #m #luxury #v #r #racing #supercar #instacars #toyota',
  },
  {
    id: 504,
    profileImage: 'https://randomuser.me/api/portraits/men/58.jpg',
    postImageUrl:
      'https://irs.www.warnerbros.com/keyart-jpeg/movies/media/browser/harry_potter_8film_2000x3000.jpg',
    place: 'Hyderbad, Telangana',
    likes: 565,
    username: 'RamnShaw32',
    caption: 'Harry Potter 8 film collection available. Dm me for full details',
    tags:
      '#movies #movie #film #cinema #films #hollywood #actor #love #s #art #cinematography #actress #netflix #moviescenes #music #filmmaking #horror #instagood #bollywood #movienight #instagram #photography #comedy #cinephile #cine #tv #director #horrormovies #drama #filmmaker',
  },
  {
    id: 505,
    profileImage: 'https://randomuser.me/api/portraits/men/84.jpg',
    postImageUrl:
      'https://udupicitycentre.com/wp-content/uploads/2019/01/tshirt-2.jpg',
    place: 'Pune, Maharashtra',
    likes: 876,
    username: 'TreyJackson455',
    caption: 'Guess What?',
    tags:
      '#fashion #style #love #instagood #like #photography #beautiful #photooftheday #follow #instagram #picoftheday #model #bhfyp #art #beauty #instadaily #me #likeforlikes #smile #ootd #followme #moda #fashionblogger #happy #cute #instalike #myself #fashionstyle #photo #fashionista',
  },
]

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Navbar />
      <div className="home-page">
        <ul className="story-list">
          {storyList.map(eachStory => (
            <StoryItem key={eachStory.id} storyInfo={eachStory} />
          ))}
        </ul>
        <ul className="post-list">
          {postsList.map(eachPost => (
            <PostItem key={eachPost.id} postInfo={eachPost} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
