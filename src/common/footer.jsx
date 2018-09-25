import React from 'react';
import ReactDom from 'react-dom';

export class AppFooter extends React.Component {
    footerElements = ['About', 'Powered by jrcayetano'];
    render() {

      return (
        <footer className="p-col-12">
          <ul>
            <AppFooterElement items={this.footerElements} />
          </ul>
        </footer>
      )
    }
}

export class AppFooterElement extends React.Component {
    constructor(props) {
      super(props)
      console.log(this.props);
    }
    render(){
      return this.props.items.map(element => <li>{element}</li>)
    }
}