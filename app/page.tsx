export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroBg" />
        <div className="heroGlow" />

        <div className="wrap">
          <header>
            <img className="logo" src="/top-notch-logo.jpg" alt="Top Notch Southwest Roofing Logo" />
            <nav>
              <a href="#services">Services</a>
              <a href="#claims">Storm Claims</a>
              <a href="#reviews">Reviews</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="btn" href="tel:6026865922">☎ 602-686-5922</a>
         <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
  <a href="https://facebook.com/topnotchsouthwestroofing" target="_blank">
    <img src="/facebook.png" style={{ width: "24px" }} />
  </a>
  <a href="https://instagram.com/topnotchsouthwestroofing" target="_blank">
    <img src="/instagram.png" style={{ width: "24px" }} />
  </a>
</div>
          </header>

          <div className="heroGrid">
            <div>
              <div className="pill">📍 Phoenix • Cave Creek • Carefree • New River</div>
              <h1>Arizona Roofing Built for <span>Heat, Hail & Monsoon Storms.</span></h1>
              <p className="heroText">
                Top Notch Southwest Roofing handles roof repairs, full replacements, coatings, flat roofs, tile,
                shingles, and storm damage inspections across the Phoenix metro area.
              </p>

              <div className="actions">
                <a className="btn" href="#contact">Get a Free Roof Inspection</a>
                <div className="socialHeader">
  <a 
    href="https://www.facebook.com/topnotchsouthwestroofing" 
    target="_blank" 
    rel="noopener noreferrer"
    className="socialBtn"
  >
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" />
  </a>

  <a 
    href="https://www.instagram.com/topnotchsouthwestroofing/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="socialBtn"
  >
    <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" />
  </a>
</div>
                <a className="btn outline" href="tel:6026865922">Call 602-686-5922</a>
              </div>

              <div className="trust">
                <div>✓ Licensed</div>
                <div>✓ Insured</div>
                <div>✓ Bonded</div>
                <div>ROC #339754</div>
              </div>
            </div>

            <form id="contact" className="leadForm" action="/api/lead" method="POST">
              <h2>Free Roof Inspection</h2>
              <p>Tell us what’s going on and we’ll get back with you fast.</p>

              <input type="hidden" name="Source" value="Top Notch Southwest Roofing Website" />

              <div className="formRow">
                <div>
                  <label>Name</label>
                  <input name="Name" placeholder="Your name" required />
                </div>
                <div>
                  <label>Phone</label>
                  <input name="Phone" placeholder="Best phone number" required />
                </div>
              </div>

              <label>Email</label>
              <input name="Email" type="email" placeholder="Email address" />

              <label>Property Address</label>
              <input name="Address" placeholder="City / address" />

              <div className="formRow">
                <div>
                  <label>Roof Type</label>
                  <select name="Roof_Type">
                    <option>Not sure</option>
                    <option>Tile roof</option>
                    <option>Shingle roof</option>
                    <option>Flat roof</option>
                    <option>Foam / coating</option>
                    <option>Commercial roof</option>
                  </select>
                </div>

                <div>
                  <label>Need Help With</label>
                  <select name="Need_Help_With">
                    <option>Free inspection</option>
                    <option>Storm damage</option>
                    <option>Roof leak</option>
                    <option>Roof replacement</option>
                    <option>Flat roof coating</option>
                    <option>Insurance claim</option>
                  </select>
                </div>
              </div>

              <label>Message</label>
              <textarea name="Message" placeholder="Tell us about the leak, storm damage, or roof issue..." />

              <button className="submit" type="submit">Send Inspection Request</button>
              <p className="fineprint">Your request will be sent directly to Top Notch Southwest Roofing. We’ll follow up as soon as possible.</p>
            </form>
          </div>
        </div>
      </section>

      <section id="services" className="light">
        <div className="wrap">
          <div className="sectionHead">
            <div className="eyebrow">Roofing Services</div>
            <h2>Residential & Commercial Roofing Done Right.</h2>
            <p>Built for Arizona sun, storm season, wind, hail, and long-term roof performance.</p>
          </div>
          <div className="cards">
            <article className="card"><div className="icon">🏠</div><h3>Residential Roofing</h3><p>Roof repairs, replacements, tile, shingles, flat roofs, foam, coatings, and leak repairs.</p></article>
            <article className="card"><div className="icon">🏢</div><h3>Commercial Roofing</h3><p>Flat roof systems, coatings, TPO, single-ply, BUR, foam, maintenance, and multi-family roofing.</p></article>
            <article className="card"><div className="icon">⛈️</div><h3>Storm Damage Claims</h3><p>Hail, wind, and monsoon inspections with clear documentation and contractor notes.</p></article>
          </div>
          <div className="systems">
            <div><div className="eyebrow">Roof Systems</div><h2>We work on all major Arizona roof systems.</h2></div>
            <div className="chips">
              <span>Tile Roofs</span><span>Asphalt Shingles</span><span>Flat Roofs</span><span>Spray Foam</span>
              <span>Roof Coatings</span><span>TPO / Single-Ply</span><span>Metal Roofs</span><span>BUR Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section id="claims" className="white">
        <div className="wrap split">
          <div className="darkBox">
            <div className="eyebrow">Storm Damage Specialists</div>
            <h2>We document the roof damage clearly.</h2>
            <p>Arizona storms can damage shingles, tile, foam, coatings, flashings, and flat roof systems fast. We inspect, photograph, document, and explain what is needed so homeowners and property managers can make smart decisions.</p>
            <div className="badges"><span>BBB Accredited Business</span><span>ROC #339754</span></div>
          </div>
          <div className="steps">
            <div className="step"><b>1</b><div><h3>Inspect</h3><p>We check roof condition, leaks, storm damage, flashings, coatings, and problem areas.</p></div></div>
            <div className="step"><b>2</b><div><h3>Document</h3><p>Photos, notes, roof type, visible damage, and recommended repair or replacement scope.</p></div></div>
            <div className="step"><b>3</b><div><h3>Explain</h3><p>You get clear options, honest recommendations, and support for storm-related claims.</p></div></div>
          </div>
        </div>
      </section>

      <section id="reviews" className="light">
        <div className="wrap">
          <div className="sectionHead"><div className="eyebrow">Trust & Experience</div><h2>Why Homeowners Choose Top Notch.</h2></div>
          <div className="reviews">
            <article><div>★★★★★</div><p>“Professional, responsive, and very knowledgeable. They explained the roof issue clearly and handled the job the right way.”</p></article>
            <article><div>★★★★★</div><p>“Great communication from inspection through cleanup. You can tell they know roofing and care about doing it right.”</p></article>
            <article><div>★★★★★</div><p>“Top Notch helped us after storm damage and gave us straight answers. Highly recommend.”</p></article>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="wrap">
          <div className="areas">
            <div><div className="eyebrow">Service Areas</div><h2>Local Phoenix Metro Roofing Contractor</h2><p>Serving homeowners, commercial properties, apartments, and property managers throughout the Valley.</p></div>
            <div className="areaGrid"><span>Phoenix</span><span>Cave Creek</span><span>Carefree</span><span>New River</span><span>Desert Hills</span><span>Scottsdale</span></div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="ctaBox">
            <h2>Ready for a Top Notch Roof?</h2>
            <p>Call today for a free roof inspection, storm damage assessment, leak repair, roof replacement, or commercial roofing estimate.</p>
            <div className="actions center">
              <a className="btn whiteBtn" href="tel:6026865922">☎ 602-686-5922</a>
              <a className="btn darkBtn" href="#contact">Request Inspection</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
  <strong>Top Notch Southwest Roofing</strong><br />
  Licensed • Insured • Bonded • ROC #339754 • 602-686-5922<br /><br />

  <div className="socialFooter">
    <a href="https://www.facebook.com/topnotchsouthwestroofing" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" />
    </a>

    <a href="https://www.instagram.com/topnotchsouthwestroofing/" target="_blank" rel="noopener noreferrer">
      <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" />
    </a>
  </div>
</footer>
    </main>
  );
}
