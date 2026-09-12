import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, MapPin, ArrowRight } from "lucide-react";
import Button from "./Button";
import "./AuraEventCard.css";

export default function AuraEventCard({ event, onSelectEvent, index }) {
  const cardRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50
  });

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0
  });

  function handleMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    setMouse({
      x: px,
      y: py
    });

    setRotate({
      x: (py - 50) / 8,
      y: (px - 50) / -8
    });
  }

  function reset() {
    setRotate({
      x: 0,
      y: 0
    });
  }

  return (
    <motion.div
      ref={cardRef}
      className="aura-card"
      style={{
        "--mx": `${mouse.x}%`,
        "--my": `${mouse.y}%`
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      animate={{
        y: [0, -8, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        delay: index * 0.2
      }}
      whileHover={{
        scale: 1.05
      }}
    >
      <div className="aura-light" />

      <div
        className="card-inner"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
        }}
      >
        <div className="event-icon">
          <event.Icon size={25} />
        </div>

        <span className="event-tag">{event.tag}</span>

        <h3>{event.title}</h3>

        <p>{event.description}</p>

        <div className="event-info">
          <span>
            <Trophy size={15} />
            {event.prize}
          </span>

          <span>
            <Users size={15} />
            {event.team}
          </span>

          <span>
            <MapPin size={15} />
            {event.venue}
          </span>
        </div>

        <Button variant="primary" onClick={() => onSelectEvent(event)}>
          Register
          <ArrowRight size={15} />
        </Button>
      </div>
    </motion.div>
  );
}
