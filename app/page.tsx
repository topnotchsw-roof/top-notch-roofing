export default function Home() {
  return (
    <main>
      <div className="trustBar">
  ⭐ 5-Star Rated • Licensed • Insured • Bonded • ROC #339754 • 40+ Years Experience
</div>
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
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
  <a href="https://www.facebook.com/topnotchsouthwestroofing" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" 
      style={{ width: "22px", filter: "invert(1)" }} 
    />
  </a>

  <a href="https://www.instagram.com/topnotchsouthwestroofing/" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" 
      style={{ width: "22px", filter: "invert(1)" }} 
    />
  </a>
</div>
            <a className="btn" href="tel:6026865922">☎ 602-686-5922</a>
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
         <div className="reviewCardsFixed">
  <article className="reviewBoxFixed">
    <div className="reviewStars">★★★★★</div>
    <p>“Professional, responsive, and very knowledgeable. They explained the roof issue clearly and handled the job the right way.”</p>
    <strong>— Phoenix Homeowner</strong>
  </article>

  <article className="reviewBoxFixed">
    <div className="reviewStars">★★★★★</div>
    <p>“Great communication from inspection through cleanup. You can tell they know roofing and care about doing it right.”</p>
    <strong>— Cave Creek Customer</strong>
  </article>

  <article className="reviewBoxFixed">
    <div className="reviewStars">★★★★★</div>
    <p>“Top Notch helped us after storm damage and gave us straight answers. Highly recommend.”</p>
    <strong>— Carefree Resident</strong>
  </article>
</div>

<div className="reviewActions">
  <a
    href="https://www.google.com/search?q=Top+Notch+Southwest+Roofing+reviews"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    ⭐ Read Reviews
  </a>

  <a
    href="https://g.page/r/CdkgbmK5QoK0EBM/review"
    target="_blank"
    rel="noopener noreferrer"
    className="btn reviewBtn"
  >
    ⭐ Leave a Review
  </a>
</div>

        </div>
      </section>
<section id="gallery" className="light">
  <div className="wrap">
    <div className="sectionHead">
      <div className="eyebrow">Project Gallery</div>
      <h2>Before & After Roofing Work</h2>
      <p>Real roof repairs, replacements, coatings, and storm damage projects across the Phoenix area.</p>
    </div>

    <div className="galleryGrid">
  <div className="galleryItem">
    <img src="/gallery/roof1-before.jpg" alt="Roof Before" />
    <div className="overlay">Before</div>
  </div>

  <div className="galleryItem">
    <img src="/gallery/roof1-after.jpg" alt="Roof After" />
    <div className="overlay">After</div>
  </div>
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
<section className="footerTop">
  <div className="wrap footerGrid">

    {/* LEFT SIDE */}
    <div>
  <h3>Stay Connected</h3>
  <p>See our latest projects, storm updates, and roofing tips.</p>

  <div className="socialIcons">
    <a
      href="https://www.facebook.com/topnotchsouthwestroofing"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <i className="fab fa-facebook-f"></i>
    </a>

    <a
      href="https://www.instagram.com/topnotchsouthwestroofing/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</div>

    {/* RIGHT SIDE */}
    <div>
  <h3>Proudly Serving the Entire Phoenix Valley</h3>

  <p>
    Phoenix • Cave Creek • Carefree • New River • Desert Hills • Scottsdale •
    Glendale • Peoria • Prescott • Flagstaff • Surrounding Phoenix Areas
  </p>
</div>

  </div>
</section>
      <footer><strong>Top Notch Southwest Roofing</strong><br />Licensed • Insured • Bonded • ROC #339754 • 602-686-5922 • Phoenix Metro Roofing Contractor</footer>
    
   
    </main>
  );
}
