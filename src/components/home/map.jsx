import React, { Component } from 'react'

import { Icon } from 'semantic-ui-react'
// import './home.css'
import { Map, Base } from 'rc-bmap'
const { Point } = Base
export default class MyMap extends Component {
  render() {
    return (
      <div className="map-house">
        <div className="map-house-title">
          <Icon onClick={this.props.hideMap} name="angle left" size="large" />
          地图找房
        </div>
        <div className="map-house-content">
          <Map ak="oxwIOetr6hd6SuKRNmEyjqFsqu8mqcdz" scrollWheelZoom zoom={16}>
            <Point name="center" lng="116.332782" lat="40.007978" />
          </Map>
        </div>
      </div>
    )
  }
}
