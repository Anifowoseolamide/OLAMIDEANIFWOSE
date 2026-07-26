import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, useProgress } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FloatingShapes from './canvas/FloatingShapes';

gsap.registerPlugin(ScrollTrigger);

function LoadingScreen({ onLoaded }) {
  const { progress } = useProgress();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (progress === 100) {
      // Add a slight delay before fading out
      const t = setTimeout(() => {
        setHidden(true);
        setTimeout(onLoaded, 1000); // Wait for fade transition
      }, 800);
      return () => clearTimeout(t);
    }
  }, [progress, onLoaded]);

  return (
    <div className={`loader-overlay ${hidden ? 'hidden' : ''}`}>
      <div className="gear-container">⚙️</div>
      <div className="loader-text">Loading Olamide Archive... {Math.round(progress)}%</div>
    </div>
  );
}

export default function App() {
  const heroRef = useRef(null);
  const helloTextRef = useRef(null);
  const [resOut, setResOut] = useState('');
  const [coordOut, setCoordOut] = useState('X: — Y: —');
  const [clockOut, setClockOut] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;
    // Trigger CSS fade-in
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Advanced GSAP Animations
    if (!reduceMotion) {
      // 1. Animate Hero Grid Lines
      const tl = gsap.timeline();
      tl.fromTo('.gline.v', { scaleY: 0, transformOrigin: 'top' }, { scaleY: 1, duration: 1.5, ease: 'power3.inOut', stagger: 0.2 })
        .fromTo('.gline.h', { scaleX: 0, transformOrigin: 'left' }, { scaleX: 1, duration: 1.5, ease: 'power3.inOut', stagger: 0.2 }, "-=1")
        .fromTo('.gplus', { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1, ease: 'back.out(1.5)' }, "-=0.5")
        .fromTo('.top-row > div', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, "-=0.8")
        .fromTo('.bottom-row, .full-bottom-utility', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out' }, "-=0.6");

      // 2. Staggered Grids on Scroll
      gsap.utils.toArray('.spec-grid').forEach((grid) => {
        gsap.fromTo(grid.querySelectorAll('.spec-item'),
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: 'power2.out', scrollTrigger: { trigger: grid, start: 'top 85%' } }
        );
      });

      gsap.utils.toArray('.work-grid').forEach((grid) => {
        gsap.fromTo(grid.querySelectorAll('.work-card'),
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: grid, start: 'top 80%' } }
        );
      });
    }

    // Standard scroll reveal for text headers/paragraphs
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((el) => { io.observe(el); });

    // live viewport resolution
    const updateRes = () => {
      setResOut(window.innerWidth + ' × ' + window.innerHeight);
    };
    updateRes();
    window.addEventListener('resize', updateRes);

    // live cursor coordinates within hero & parallax
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      setCoordOut(`X: ${x}  Y: ${y}`);

      // subtle hero word parallax
      if (!reduceMotion && helloTextRef.current) {
        const pX = (e.clientX - rect.left) / rect.width - 0.5;
        const pY = (e.clientY - rect.top) / rect.height - 0.5;
        helloTextRef.current.style.transform = `translate(${pX * 14}px, ${pY * 10}px) rotate(${pX * 3}deg)`;
      }
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', handleMouseMove);
    }

    // live Lagos time (GMT+1)
    const updateClock = () => {
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const lagos = new Date(utc + (3600000 * 1));
      const h = String(lagos.getHours()).padStart(2, '0');
      const m = String(lagos.getMinutes()).padStart(2, '0');
      const s = String(lagos.getSeconds()).padStart(2, '0');
      setClockOut(`GMT+1 · LAGOS, NG · ${h}:${m}:${s}`);
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('resize', updateRes);
      if (heroEl) heroEl.removeEventListener('mousemove', handleMouseMove);
      clearInterval(clockInterval);
    };
  }, [isLoaded]);

  return (
    <>
      {!isLoaded && <LoadingScreen onLoaded={() => setIsLoaded(true)} />}
      
      {/* 3D Canvas Background */}
      <div id="canvas-container" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none', opacity: 0.7 }}>
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]}>
          <FloatingShapes />
          <Environment preset="city" />
        </Canvas>
      </div>

      <section id="hero" ref={heroRef} className={isLoaded ? 'loaded' : ''}>
        <div className="grid-overlay" aria-hidden="true">
          <div className="gline v" style={{ left: '33.33%' }}></div>
          <div className="gline v" style={{ left: '66.66%' }}></div>
          <div className="gline h" style={{ top: '150px' }}></div>
          <div className="gline h" style={{ bottom: '120px' }}></div>
          <div className="gplus" style={{ left: '33.33%', top: '150px' }}>+</div>
          <div className="gplus" style={{ left: '66.66%', top: '150px' }}>+</div>
          <div className="gplus" style={{ left: '33.33%', bottom: '120px' }}>+</div>
          <div className="gplus" style={{ left: '66.66%', bottom: '120px' }}>+</div>
        </div>

        <div>
          <div className="top-row">
            <div>
              <div className="brand">OLAMIDE<span style={{ color: 'var(--muted)', fontWeight: 500 }}>.DEV</span></div>
              <div className="brand-sub">Backend &<br />Systems engineering</div>
            </div>
            <div className="statement">Transaction safe.<br />API Driven.</div>
            <div>
              <div className="nav-row">
                <a href="#work">WORK</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a>
              </div>
              <p className="intro">I'm <b>Olamide</b> — building resilient backend products and the core logic that makes them scalable. Currently at <b>Ndara.ai</b>.</p>
            </div>
          </div>
        </div>

        <div className="hero-center">
          <span className="hello" id="helloText" ref={helloTextRef}>hello</span>
        </div>

        <div>
          <div className="bottom-row">
            <h1 className="headline">I BUILD SYSTEMS<br />THAT SCALE <span className="lime">SAFELY.</span></h1>
            <div className="utility-bar">
              <div className="globe" aria-hidden="true"></div>
              <span id="resOut">— {resOut} —</span>
            </div>
          </div>
          <div className="full-bottom-utility">
            <span id="clockOut">{clockOut}</span>
            <span id="coordOut">{coordOut}</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </div>
      </section>

      <div id="micro">
        <div className="wrap micro-row">
          <div className="reveal">Ships fast.</div>
          <div className="reveal">Breaks nothing.</div>
          <div className="reveal">Secures data.</div>
        </div>
      </div>

      <section id="about">
        <div className="wrap about-grid">
          <div className="reveal">
            <span className="eyebrow-sm">About</span>
            <h2>APIs on the outside, logic on the inside.</h2>
            <p>I work across the backend stack — databases, atomic transactions, and system architecture. I specialize in designing robust APIs and integrations that hold up under pressure without sacrificing data integrity or performance.</p>
          </div>
          <div className="reveal">
            <div className="fact-list">
              <div className="fact"><span>Based in</span><span>Lagos, NG</span></div>
              <div className="fact"><span>Currently at</span><span>Ndara.ai</span></div>
              <div className="fact"><span>Focus</span><span>Backend + Architecture</span></div>
              <div className="fact"><span>Available for</span><span>Select projects</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <span className="eyebrow-sm reveal">Stack</span>
          <h2 className="reveal">What I build with.</h2>
          <div className="spec-grid reveal">
            <div className="spec-item"><span className="n">01</span>Python</div>
            <div className="spec-item"><span className="n">02</span>Django / DRF</div>
            <div className="spec-item"><span className="n">03</span>PostgreSQL</div>
            <div className="spec-item"><span className="n">04</span>Celery</div>
            <div className="spec-item"><span className="n">05</span>JavaScript / React</div>
            <div className="spec-item"><span className="n">06</span>SQL Optimization</div>
            <div className="spec-item"><span className="n">07</span>Select For Update</div>
            <div className="spec-item"><span className="n">08</span>Docker</div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="wrap">
          <span className="eyebrow-sm reveal">Selected work</span>
          <h2 className="reveal">A few things I've shipped.</h2>

          <div className="work-grid reveal">
            <div className="work-card group" tabIndex="0">
              <div className="work-arrow">↗</div>
              <span className="work-num">01</span>
              <h3>SyncCare</h3>
              <p>A hybrid, local-first family healthcare platform providing personalized medical guidance and autonomous care coordination.</p>
              <div className="work-tags"><span>React</span><span>Django</span><span>Google Gemini</span></div>
            </div>
            <div className="work-card group" tabIndex="0">
              <div className="work-arrow">↗</div>
              <span className="work-num">02</span>
              <h3>RideShare</h3>
              <p>A trust-first backend for peer-to-peer ridesharing in Lagos, enabling strangers to carpool safely with a wallet-based escrow system.</p>
              <div className="work-tags"><span>Django REST</span><span>PostgreSQL</span><span>Paystack API</span></div>
            </div>
            <div className="work-card group" tabIndex="0">
              <div className="work-arrow">↗</div>
              <span className="work-num">03</span>
              <h3>LagosCP</h3>
              <p>An AI-powered criminal identification and geographic intelligence backend with biometric facial recognition for law enforcement.</p>
              <div className="work-tags"><span>Face++ API</span><span>Cloudinary</span><span>React</span></div>
            </div>
            <div className="work-card group" tabIndex="0">
              <div className="work-arrow">↗</div>
              <span className="work-num">04</span>
              <h3>Tidal (Scriva)</h3>
              <p>Async handwriting OCR and automated LLM exam scoring backend built for the 2026 OPay Hackathon.</p>
              <div className="work-tags"><span>Django</span><span>Celery</span><span>LLM Grading API</span></div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <span className="eyebrow-sm reveal">Experience</span>
          <h2 className="reveal">Where I've built things.</h2>

          <div className="exp-list reveal">
            <div className="exp-row">
              <span className="yr">2025 — Present</span>
              <span className="role">Backend Developer</span>
              <span className="co">Ndara.ai</span>
            </div>
            <div className="exp-row">
              <span className="yr">2026</span>
              <span className="role">Lead Backend Developer</span>
              <span className="co">Tidal (OPay Hackathon)</span>
            </div>
            <div className="exp-row">
              <span className="yr">2026</span>
              <span className="role">Backend Developer</span>
              <span className="co">PetrolLink (Nexus Hackathon - 2nd Place)</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <span className="eyebrow-sm reveal">Contact</span>
          <h2 className="reveal">Got something worth building?</h2>
          <button className="cta-btn reveal" id="contactBtn" onClick={() => window.location.href = 'mailto:olamideanifowoshe2004@gmail.com'}>Say hi</button>
          <div className="footer-links reveal">
            <a href="https://github.com/Anifowoseolamide" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:olamideanifowoshe2004@gmail.com">Email</a>
          </div>
          <div className="footer-utility reveal">
            <span>GMT+1 · LAGOS, NG</span>
            <span>OLAMIDE.DEV</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </section>
    </>
  );
}

