// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isClicked: true}

  onEmojiClick = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          {isClicked ? (
            <div className="emojis-container">
              <h1 className="heading-emojis">
                How satisfied are you with our customer support performance?{' '}
              </h1>
              <ul className="feedback-container">
                {emojis.map(eachEmoji => (
                  <li key={eachEmoji.id} className="list-container">
                    <button
                      type="button"
                      onClick={this.onEmojiClick}
                      className="emoji-button"
                    >
                      <img
                        src={eachEmoji.imageUrl}
                        alt={eachEmoji.name}
                        className="emoji-img"
                      />
                    </button>
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="thankyou-container">
              <img src={loveEmojiUrl} alt="love emoji" className="love-img" />
              <h1 className="heading">Thank You!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
