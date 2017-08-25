import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Routes
import Routes from './config/routes';

// Layouts
import AppLayout from './components/AppLayout';
import Content from './components/Content';
import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';

// Common Styles
import './assets/styles/app.scss';


const App = () => (
  <BrowserRouter>
    <AppLayout>
      <Container>
        <Header>
          <Navigation />
        </Header>
        <Content>
          <Routes />
        </Content>
      </Container>
    </AppLayout>
  </BrowserRouter>
);

export default App;
