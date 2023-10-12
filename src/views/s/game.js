import React from 'react'

import { Helmet } from 'react-helmet'

import './game.css'

const Game = (props) => {
  return (
    <div className="game-container">
      <Helmet>
        <title>Game - SuperClocked</title>
        <meta property="og:title" content="Game - SuperClocked" />
      </Helmet>
      <div className="game-container1">
        <h1 className="game-text">Most Popular</h1>
      </div>
      <div className="game-container2">
        <img
          alt="image"
          src="/csgocovermarch2020-300h.jpg"
          className="game-image"
        />
        <img
          alt="image"
          src="/csgocovermarch2020-300h.jpg"
          className="game-image01"
        />
        <img
          alt="image"
          src="/csgocovermarch2020-300h.jpg"
          className="game-image02"
        />
        <img alt="image" src="/black_ops_3-300h.jpg" className="game-image03" />
        <img alt="image" src="/black_ops_3-300h.jpg" className="game-image04" />
        <img alt="image" src="/black_ops_3-300h.jpg" className="game-image05" />
        <img
          alt="image"
          src="/grand_theft_auto_v-300h.png"
          className="game-image06"
        />
        <img
          alt="image"
          src="/grand_theft_auto_v-300h.png"
          className="game-image07"
        />
        <img
          alt="image"
          src="/grand_theft_auto_v-300h.png"
          className="game-image08"
        />
        <img
          alt="image"
          src="/minecraft_cover-300h.png"
          className="game-image09"
        />
        <img src="/minecraft_cover-300h.png" className="game-image10" />
        <img
          alt="image"
          src="/minecraft_cover-300h.png"
          className="game-image11"
        />
        <img
          alt="image"
          src="/valorant-1640045685890-300h.jpg"
          className="game-image12"
        />
        <img
          alt="image"
          src="/valorant-1640045685890-300h.jpg"
          className="game-image13"
        />
        <img
          alt="image"
          src="/valorant-1640045685890-300h.jpg"
          className="game-image14"
        />
      </div>
      <svg viewBox="0 0 1024 1024" className="game-icon button teleport-show">
        <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
      </svg>
      <svg viewBox="0 0 1024 1024" className="game-icon2 button">
        <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
      </svg>
    </div>
  )
}

export default Game
