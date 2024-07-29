import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EventList from "@/components/events/EventList";
import EventForm from "@/components/events/EventForm";
import EventDetail from "@/components/events/EventDetail";

const AppEvent: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" exact component={EventList} />
                    <Route path="/events/new" component={EventForm} />
                    <Route path="/events/:id/edit" render={({ match }) => <EventForm eventId={parseInt(match.params.id)} />} />
                    <Route path="/events/:id" render={({ match }) => <EventDetail eventId={parseInt(match.params.id)} />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};


export default AppEvent;