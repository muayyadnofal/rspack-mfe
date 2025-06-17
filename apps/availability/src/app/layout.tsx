import {useEffect} from 'react';
import { CalendarProvider } from './calendar/contexts/calendar-context';
import {Outlet} from "react-router-dom";
import {Header} from "./components/layout/header";
import {getTheme} from "./cookies/get";
import {cn} from "./lib/utils";

export default function CalendarLayout() {
    useEffect(() => {
        const theme = getTheme();
        const classNames = cn(theme);

        const html = document.documentElement;
        html.className = classNames;

    }, []);

    return (
        <CalendarProvider users={[]} events={[]}>
            <Header />
            <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 px-8 py-4">
                <Outlet />
            </div>
        </CalendarProvider>
    );
};
