import './app.css';
import { ClientContainer } from './calendar/components/client-container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalendarLayout from "./layout";

function App() {
    return (
        <Routes>
            {/*<Route element={<CalendarLayout />}>*/}
                <Route path="/day-view" element={<ClientContainer view="day" />} />
                <Route path="/week-view" element={<ClientContainer view="week" />} />
                <Route path="/month-view" element={<ClientContainer view="month" />} />
                <Route path="/year-view" element={<ClientContainer view="year" />} />
                <Route path="/agenda-view" element={<ClientContainer view="agenda" />} />
            {/*</Route>*/}
        </Routes>
    );
}

export default App;
