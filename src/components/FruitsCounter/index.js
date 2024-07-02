import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count2: 0}

  mangoes = () => {
    this.setState(prevState => ({
      count1: prevState.count1 + 1,
    }))
  }

  bananas = () => {
    this.setState(prevState => ({
      count2: prevState.count2 + 1,
    }))
  }

  render() {
    const {count1, count2} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{count1}</span> mangoes{' '}
            <span className="count">{count2}</span> bananas
          </h1>
          <div className="imgs-container">
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <button type="button" className="button" onClick={this.mangoes}>
                Eat Mango
              </button>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <button type="button" className="button" onClick={this.bananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
