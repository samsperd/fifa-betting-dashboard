import React, { Component } from 'react'
import "./lineup.scss"
import SoccerLineUp from 'react-soccer-lineup'


export default class LineupCard extends Component {

  constructor(props) {
      super(props)

      this.state = {
          showHomeTeam: true,
          showAwayTeam: true,

          homeTeamColor: '000000',
          homeTeamNumberColor: 'ffffff',
          homeGoalkeeperColor: 'd6cb65',
          homeGoalkeeperNumberColor: '333333',
          homeTeamClickable: false,

          awayTeamColor: 'eeb54a',
          awayTeamNumberColor: 'ffffff',
          awayGoalkeeperColor: '4f6c75',
          awayGoalkeeperNumberColor: 'ffffff',
          awayTeamClickable: false
      }
  }

  render() {

      const { showHomeTeam, showAwayTeam } = this.state


      return (

      <div className='lineupCard'>
        <div className="lineupCardTitle">
            Line-up
        </div>

        <div className="lineupCardBody">
          <div className="field">
            <SoccerLineUp
              size='responsive'
              color='#550065'
              pattern='lines'
              homeTeam={ showHomeTeam ? this.buildHomeTeam() : undefined }
              awayTeam={ showAwayTeam ? this.buildAwayTeam() : undefined }
            />

          </div>
        </div>
    </div>

      )
  }

  buildHomeTeam = () => {

      const {
          homeTeamColor,
          homeTeamNumberColor,
          homeGoalkeeperColor,
          homeGoalkeeperNumberColor,
          homeTeamClickable
      } = this.state

      return {
          squad: {
              gk: {
                  number: 1,
                  color: `#${ homeGoalkeeperColor }`,
                  numberColor: `#${ homeGoalkeeperNumberColor }`,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 1 }`)) : undefined
              },
              df: [ {
                  number: 2,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 2 }`)) : undefined
              }, {
                  number: 4,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 4 }`)) : undefined
              }, {
                  number: 5,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 5 }`)) : undefined
              }, {
                  number: 3,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 3 }`)) : undefined
              } ],
              cm: [ {
                  number: 6,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 6 }`)) : undefined
              }, {
                  number: 8,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 8 }`)) : undefined
              } ],
              cam: [ {
                  number: 11,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 11 }`)) : undefined
              }, {
                  number: 10,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 10 }`)) : undefined
              }, {
                  number: 7,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 7 }`)) : undefined
              } ],
              fw: [ {
                  number: 9,
                  onClick: homeTeamClickable ? (() => console.log(`Home team - Player ${ 9 }`)) : undefined
              } ]
          },
          style: {
              color: `#${ homeTeamColor }`,
              numberColor: `#${ homeTeamNumberColor }`
          }
      }
  }

  buildAwayTeam = () => {

      const {
          awayTeamColor,
          awayTeamNumberColor,
          awayGoalkeeperColor,
          awayGoalkeeperNumberColor,
          awayTeamClickable
      } = this.state

      return {
          squad: {
              gk: {
                  number: 1,
                  color: `#${ awayGoalkeeperColor }`,
                  numberColor: `#${ awayGoalkeeperNumberColor }`,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 1 }`)) : undefined
              },
              df: [ {
                  number: 2,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 2 }`)) : undefined
              }, {
                  number: 4,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 4 }`)) : undefined
              }, {
                  number: 5,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 5 }`)) : undefined
              }, {
                  number: 3,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 3 }`)) : undefined
              } ],
              cam: [ {
                  number: 7,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 7 }`)) : undefined
              }, {
                  number: 8,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 8 }`)) : undefined
              }, {
                  number: 6,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 6 }`)) : undefined
              }, {
                  number: 10,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 10 }`)) : undefined
              } ],
              fw: [ {
                  number: 9,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 9 }`)) : undefined
              }, {
                  number: 11,
                  onClick: awayTeamClickable ? (() => console.log(`Away team - Player ${ 11 }`)) : undefined
              } ]
          },
          style: {
              color: `#${ awayTeamColor }`,
              numberColor: `#${ awayTeamNumberColor }`
          }
      }
  }
}
