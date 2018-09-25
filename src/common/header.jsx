import React from 'react';
import ReactDom from 'react-dom';
import {Menubar} from 'primereact/menubar';

export class HeaderApp extends React.Component {
  items = [
    {label: 'Home', icon: 'pi pi-fw pi-plus'},
    {label: 'library', icon:'pi pi-fw pi-plus' },
    {label: 'Group', icon: 'pi pi-fw pi-trash'}
  ];
  render() {
    return (
      <header className="p-col-12">
         <Menubar model={this.items} />
      </header>
     
    )
  }
}
/*
export class HeaderApp extends React.Component {
    menu = [{id: 1, value: 'home'}, {id: 2, value: 'books'},  {id: 3, value: 'groups'}];
    render() {
        return (
            <header>
              <ul>
                <HeaderMenu menuItems={this.menu}></HeaderMenu>
              </ul>
            </header>
        )
    }
}*/
/*
class HeaderMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  list = hasElements(this.props.menuItems) ? 
          this.props.menuItems.map(item => <li key={item.id}>{item.value}</li>) :
          [];
  render() {
    return  this.list
  }
}

function hasElements (array) {
  return array && Array.isArray(array) && array.length > 0
}*/