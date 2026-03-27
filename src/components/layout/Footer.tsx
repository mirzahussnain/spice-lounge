export function Footer() {
  return (
    <footer className="grid gap-4 border-t border-[rgba(245,233,218,0.14)] bg-[#140f0c] px-[clamp(20px,6vw,80px)] py-8 md:grid-cols-3">
      <div>
        <h3>Spice Lounge</h3>
        <p>Where fire, memory, and hospitality meet.</p>
      </div>
      <div>
        <h4>Address</h4>
        <p>31 Hanover Square, Mayfair, London</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-[rgba(245,233,218,0.84)]">
          <a href="#menu" className="footer-link">Menu</a>
          <a href="#story" className="footer-link">Our Story</a>
          <a href="#ambience" className="footer-link">Ambience</a>
        </div>
      </div>
      <div>
        <h4>Hours</h4>
        <p>Mon-Sun: 5:30 PM - 11:45 PM</p>
        <div className="mt-3 flex flex-wrap gap-3 text-sm text-[rgba(245,233,218,0.84)]">
          <a href="#reserve" className="footer-link">Reserve</a>
          <a href="/menu" className="footer-link">Full Menu</a>
        </div>
      </div>
    </footer>
  );
}
