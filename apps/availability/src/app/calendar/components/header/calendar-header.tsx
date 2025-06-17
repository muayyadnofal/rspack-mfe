import { Columns, Grid3x3, List, Grid2x2, CalendarRange } from "lucide-react";
import { TCalendarView } from "../../types";
import { IEvent } from "../../interfaces";
import {Button} from "../../../components/ui/button";
import {DateNavigator} from "./date-navigator";
import {UserSelect} from "./user-select";
import {TodayButton} from "./today-button";

interface IProps {
  view: TCalendarView;
  events: IEvent[];
}

export function CalendarHeader({ view, events }: IProps) {
  return (
      <div className="flex flex-col gap-4 border-b p-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <TodayButton />
          <DateNavigator view={view} events={events} />
        </div>

        <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:justify-between">
          <div className="flex w-full items-center gap-1.5">
            <div className="inline-flex first:rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none">
              <Button
                  asChild
                  aria-label="View by day"
                  size="icon"
                  variant={view === "day" ? "default" : "outline"}
                  className="rounded-r-none [&_svg]:size-5"
              >
                <a href="/day-view">
                  <List strokeWidth={1.8} />
                </a>
              </Button>

              <Button
                  asChild
                  aria-label="View by week"
                  size="icon"
                  variant={view === "week" ? "default" : "outline"}
                  className="-ml-px rounded-none [&_svg]:size-5"
              >
                <a href="/week-view">
                  <Columns strokeWidth={1.8} />
                </a>
              </Button>

              <Button
                  asChild
                  aria-label="View by month"
                  size="icon"
                  variant={view === "month" ? "default" : "outline"}
                  className="-ml-px rounded-none [&_svg]:size-5"
              >
                <a href="/month-view">
                  <Grid2x2 strokeWidth={1.8} />
                </a>
              </Button>

              <Button
                  asChild
                  aria-label="View by year"
                  size="icon"
                  variant={view === "year" ? "default" : "outline"}
                  className="-ml-px rounded-none [&_svg]:size-5"
              >
                <a href="/year-view">
                  <Grid3x3 strokeWidth={1.8} />
                </a>
              </Button>

              <Button
                  asChild
                  aria-label="View by agenda"
                  size="icon"
                  variant={view === "agenda" ? "default" : "outline"}
                  className="-ml-px rounded-l-none [&_svg]:size-5"
              >
                <a href="/agenda-view">
                  <CalendarRange strokeWidth={1.8} />
                </a>
              </Button>
            </div>

            <UserSelect />
          </div>
        </div>
      </div>
  );
}
