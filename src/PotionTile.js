import React from 'react'

/*
Write an abstracted component that can be used in place of InventoryTile AND ShopTile

Consider what the tiles have in common and what they do not:
- For things that are the same, copy and pasting works just fine!
- For things that are different, consider how you might make use of props and JSX to have the same component behave differently when rendered by different parents
*/

export default class PotionTile extends React.Component {

  state = {

  }

  checkProps = () => {
    if (this.props.sell) {
      return this.props.sell(this.props.potion.id)
    } else {
      return this.props.addToInventory(this.props.potion.id)
    }
  }

  checkCard = () => {
    if (this.props.sell) {
      return "inventory-card"
    } else {
      return "card"
    }
  }

  render() {
    return (
      <div key={this.props.potion.id} className={this.checkCard()}>
        <div onClick={() => this.checkProps()} className="image-wrapper">
          <img className="image" alt={this.props.potion.name} src={this.props.potion.image_url} />
        </div>
        {this.props.children}
      </div>
      )
    }
  }
//
// <div key={props.potion.id} className="card">
//   <div onClick={() => props.addToInventory(props.potion.id)} className="image-wrapper">
//
