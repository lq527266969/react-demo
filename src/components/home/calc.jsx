import React, { Component } from 'react'
import './home.css'
import { Icon, Tab, Grid, Dropdown } from 'semantic-ui-react'

class First extends Component {
  constructor() {
    super()
    this.state = {
      type: 1,
      types: [
        { key: 1, value: 1, text: '按贷款总额' },
        { key: 2, value: 2, text: '按房间总额' }
      ]
    }
  }
  render() {
    const { types, type } = this.state
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column width={6}>贷款方式</Grid.Column>
          <Grid.Column widtn={10}>
            <Dropdown
              placeholder="请选择贷款方式"
              onChange={(e, data) => {
                this.setState({ type: data.value })
              }}
              selection
              value={type}
              options={types}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
export default class MyCalc extends Component {
  constructor() {
    super()
  }
  render() {
    const panes = [
      {
        menuItem: '公积金贷款',
        render: () => (
          <Tab.Pane>
            <First />
          </Tab.Pane>
        )
      },
      { menuItem: '商业贷款', render: () => <Tab.Pane>2222222222</Tab.Pane> },
      { menuItem: '组合贷款', render: () => <Tab.Pane>3333333333</Tab.Pane> }
    ]
    return (
      <div className="home-calc">
        <div className="home-calc-title">
          <Icon onClick={this.props.hideCalc} name="angle left" size="large" />
          贷款利率
        </div>
        <Tab panes={panes} />
      </div>
    )
  }
}
