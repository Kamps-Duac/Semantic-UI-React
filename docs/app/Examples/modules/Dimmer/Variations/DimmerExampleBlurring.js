import React, { Component } from 'react'
import { Button, Dimmer, Segment } from 'semantic-ui-react'

export default class DimmerExampleBlurring extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state

    return (
      <div>
        <Dimmer.Dimmable as={Segment} blurring dimmed={active}>
          <Dimmer active={active} onClickOutside={this.handleHide} />

          <p>
            <img src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
          <p>
            <img src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
          </p>
        </Dimmer.Dimmable>

        <Button.Group>
          <Button icon='plus' onClick={this.handleShow} />
          <Button icon='minus' onClick={this.handleHide} />
        </Button.Group>
      </div>
    )
  }
}
