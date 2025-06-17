import {useEffect, useMemo} from "react";
import {format, parseISO } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCalendar } from "../../contexts/calendar-context";
import {TCalendarView} from "../../types";
import { IEvent } from "../../interfaces";
import {getEventsCount, navigateDate, rangeText} from "../../helpers";
import { Badge } from "../../../components/ui/badge";
import {Button} from "../../../components/ui/button";
import {useObjectSearchParams} from "@mfe-dashboard/utils";

interface IProps {
  view: TCalendarView;
  events: IEvent[];
}

export function DateNavigator({ view, events }: IProps) {
  const { selectedDate, setSelectedDate } = useCalendar();
  const { getParams, setParams } = useObjectSearchParams();

  useEffect(() => {
    const params = getParams();
    if (params["start-date"]) {
      const parsedDate = parseISO(params["start-date"] as string);
      if (!isNaN(parsedDate.getTime())) {
        setSelectedDate(parsedDate);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const startDateStr = format(selectedDate, "yyyy-MM-dd");
    const endDateStr = format(navigateDate(selectedDate, view, "next"), "yyyy-MM-dd");

    const params = getParams();
    if (params["start-date"] !== startDateStr || params["end-date"] !== endDateStr) {
      setParams({
        "start-date": startDateStr,
        "end-date": endDateStr,
      });
    }
  }, [selectedDate, view]);


  const month = format(selectedDate, "MMMM");
  const year = selectedDate.getFullYear();

  const eventCount = useMemo(() => getEventsCount(events, selectedDate, view), [events, selectedDate, view]);

  const handlePrevious = () => setSelectedDate(navigateDate(selectedDate, view, "previous"));
  const handleNext = () => setSelectedDate(navigateDate(selectedDate, view, "next"));

  return (
      <div className="space-y-0.5">
        <div className="flex items-center gap-2">
        <span className="text-lg font-semibold">
          {month} {year}
        </span>
          <Badge variant="outline" className="px-1.5">
            {eventCount} events
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="size-6.5 px-0 [&_svg]:size-4.5" onClick={handlePrevious}>
            <ChevronLeft />
          </Button>

          <p className="text-sm text-muted-foreground">{rangeText(view, selectedDate)}</p>

          <Button variant="outline" className="size-6.5 px-0 [&_svg]:size-4.5" onClick={handleNext}>
            <ChevronRight />
          </Button>
        </div>
      </div>
  );
}