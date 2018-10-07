import React from 'react';

export default class extends React.Component{
  render(){
    console.log(this.props.match);
    return (
      <div>
        This is about page
      </div>
    )
  }
}