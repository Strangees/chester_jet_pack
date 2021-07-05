import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
        <div>
            <input>
            </input>
        </div>
    )
  }
}
