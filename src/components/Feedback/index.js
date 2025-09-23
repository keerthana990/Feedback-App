import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    isClicked: false,
  }

  feedbackClicked = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isClicked} = this.state

    if (isClicked) {
      return (
        <div className="feedbackClickedContainer">
          <div className="feedbackClicked">
            <img src={loveEmojiUrl} alt="Love Emoji" />
            <h1 className="thank">Thank You</h1>
            <p>
              We will use your feedback to improve our coustomer support
              performance
            </p>
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <ul className="card">
          <li>
            <h1>
              How satisfied are you with our customer support performance?
            </h1>
          </li>
          <li className="cardItem">
            {emojis.map(emoji => (
              <div className="emoji" key={emoji.id}>
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  onClick={this.feedbackClicked}
                />
                <p>{emoji.name}</p>
              </div>
            ))}
          </li>
        </ul>
      </div>
    )
  }
}

export default Feedback
