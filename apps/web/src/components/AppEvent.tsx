import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EventList from './EventList';
import CreateEvent from './CreateEvent';
import UpdateEvent from './UpdateEvent';


const AppEvent: React.FC = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={EventList} />
          <Route path="/create" component={CreateEvent} />
          <Route path="/update/:id" component={UpdateEvent} />
        </Switch>
      </Router>
    );
  };

export default AppEvent;