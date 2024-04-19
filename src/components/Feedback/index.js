// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {
    display: true,
  }

  happyImage = () => {
    this.setState({display: false})
  }

  authDisplayContent = (one, two, three, loveEmojiUrl, emojis) => {
    const {display} = this.state
    if (display) {
      return (
        <div className="main-container">
          <div className="emojis-card-container">
            <h1 className="main-heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="images-container" style={{listStyleType: 'none'}}>
              {emojis.map(each => (
                <li key={each.id}>
                  <div>
                    <button className="button" onClick={this.happyImage}>
                      <img
                        src={each.imageUrl}
                        alt={each.name}
                        className="image"
                      />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div className="main-container">
          <div className="emojis-card-container">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p className="para">
              We Will use your Feedback to improve our customer support
              performanec
            </p>
          </div>
        </div>
      )
    }
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const [one, two, three] = emojis
    console.log(loveEmojiUrl)
    console.log(one)

    return (
      <div>
        {this.authDisplayContent(one, two, three, loveEmojiUrl, emojis)}
      </div>
    )
  }
}

export default Feedback
