import { getFeaturedEvents } from "@/dummy-data";
import EventList from '../components/event/event-list';


function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <ul>
        <EventList items={featuredEvents} />
      </ul>
    </div>
  )
}

export default Home;