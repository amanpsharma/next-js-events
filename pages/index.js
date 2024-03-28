import { Fragment } from "react";
import { useRouter } from "next/router";
import { getFeaturedEvents } from "@/dummy-data";
import EventList from "@/components/events/event-list";
import EventSearch from "@/components/events/event-search";
function HomePage() {
  const router = useRouter();
  const featureEvents = getFeaturedEvents();
  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventSearch onSearch={findEventHandler} />
      <EventList items={featureEvents} />
    </Fragment>
  );
}

export default HomePage;
