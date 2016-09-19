import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import App from '../../components/App';
import { DrawerPanel, DrawerLeft, DrawerMain } from '../../components/DrawerPanel';
import {HeaderPanel, Header, Body} from '../../components/HeaderPanel';
import {Menu, MenuItem} from '../../components/Menu';
import Toolbar from '../../components/Toolbar';
import Button from '../../components/Button';

class Home extends Component {
  render() {
    return (
      <App className="home">
        <DrawerPanel>
          <DrawerLeft>
            <Menu>
              <MenuItem>男码农外套</MenuItem>
              <MenuItem>女码农外套</MenuItem>
              <MenuItem>男码农T恤</MenuItem>
              <MenuItem>女码农T恤</MenuItem>
            </Menu>
          </DrawerLeft>
          <DrawerMain>
            <HeaderPanel>
              <Header>
                <Toolbar>
                  <Button icon="menu"></Button>
                    <h1>Shop</h1>
                  <Button icon="shopping_cart" type="rasied" toggles={true}>Cart</Button>
                </Toolbar>
              </Header>

              <Body>
                <h2>welcome home</h2>
              </Body>

            </HeaderPanel>
          </DrawerMain>
        </DrawerPanel>
      </App>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));
