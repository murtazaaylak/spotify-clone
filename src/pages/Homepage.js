import React, { useState } from 'react'
import { accessUrl } from '../spotify'
import queryString from 'query-string'
import axios from 'axios'
// import SpotifyPlayer from 'react-spotify-web-playback'
import SpotifyWebApi from 'spotify-web-api-js'
import LeftNavbar from '../components/LeftNavbar/LeftNavbar'
import Banner from '../components/Banner'
import WebPlayer from '../components/WebPlayer'
import GridContainer from '../components/GridContainer/GridContainer'
import WelcomeSection from '../components/WelcomeSection/WelcomeSection'
import './HomePage.css'

const Homepage = ({ location }) => {
  const [name, setName] = useState(null)
  const [displayName, setDisplayName] = useState(null)
  const [token, setToken] = useState(
    'BQB93ScYiFC5hJTyzYck8sY_F2tDtvDxsOXW25j4kjlm-ZyiX1aXpSi7cp6kxtxE7dm7fkFv2Ril8sGjzbfI2eVvLR5CmdmtnUCMXoKZPgJxiiw_wZiKYB5ntHMnKBFms65bvd2qCTi-NoZkOVXYJYB1nNuFllEWy9HizxyNM_1Ixh-KqZLB'
  )
  const spotifyApi = new SpotifyWebApi()
  spotifyApi.setAccessToken(token)
  // let parsed = queryString.parse(location.hash)
  // let accessToken = parsed.access_token
  // console.log(accessToken)

  axios
    .get('https://api.spotify.com/v1/me/', {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })
    .then((data) => {
      console.log(data)
      setName(data.data.id)
    })

  spotifyApi.getMe().then((data) => setDisplayName(data.display_name))

  return (
    <div className='page-wrapper'>
      <LeftNavbar />
      <div className='page-content'>
        <Banner />
        <GridContainer>
          <WelcomeSection />
          <div>Deneme</div>
          <div>Deneme 2</div>
        </GridContainer>
      </div>
      <WebPlayer />
    </div>
  )
}

export default Homepage
