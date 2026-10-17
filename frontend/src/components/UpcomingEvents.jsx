
import eventsData from "../data/events.json";
import "../styles/UpcomingEvents.css";

function UpcomingEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const events = eventsData
    .filter((event) => {
      const date = new Date(`${event.date}T00:00:00`);
      return !Number.isNaN(date.getTime()) && date >= today;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const formatDate = (date) =>
    new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

  return (
    <section className="upcoming-events" id="upcoming-events">
      <div className="upcoming-events-container">

        <div className="upcoming-events-heading">
          <span className="upcoming-events-tag">
            <span className="upcoming-events-tag-dot"></span>
            LEARN • CONNECT • GROW
          </span>

          <h2>
            Upcoming <span>Events</span>
          </h2>

          <p>
            Join our workshops, technical sessions and learning
            experiences to build industry-ready skills.
          </p>
        </div>

        {events.length > 0 ? (
          <div className="upcoming-events-grid">
            {events.map((event) => (
              <article className="upcoming-event-card" key={event.id}>

                <div className="upcoming-event-image">
                  <img
                    src={event.image}
                    alt={event.title}
                    loading="lazy"
                  />

                  <span className="upcoming-event-category">
                    {event.category}
                  </span>
                </div>

                <div className="upcoming-event-content">

                  <div className="upcoming-event-date">
                    <div className="upcoming-event-calendar">
                      ▦
                    </div>

                    <div>
                      <small>EVENT DATE</small>
                      <strong>{formatDate(event.date)}</strong>
                    </div>
                  </div>

                  <h3>{event.title}</h3>

                  <p className="upcoming-event-description">
                    {event.description}
                  </p>

                  <div className="upcoming-event-info">
                    <span>◷ {event.time}</span>
                    <span>
                      {event.mode === "Online" ? "◎" : "⌖"}{" "}
                      {event.location}
                    </span>
                  </div>

                  <a
                    className="upcoming-event-register"
                    href={event.registrationLink || "/contact"}
                  >
                    Register Now <span>↗</span>
                  </a>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="upcoming-events-empty">
            <h3>Exciting Events Coming Soon!</h3>
            <p>Stay connected with KSquare Softtech.</p>
            <a href="/contact">Contact Us ↗</a>
          </div>
        )}

      </div>
    </section>
  );
}

export default UpcomingEvents;
