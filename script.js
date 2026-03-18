document.addEventListener('DOMContentLoaded', () => {

    // 1. Storytelling Intro Logic 📖 (Fast Start Engine + RPM Gauge)
    const beginBtn = document.getElementById('begin-journey-btn');
    const introOverlay = document.getElementById('intro-overlay');
    const mainNav = document.getElementById('main-nav');
    if (introOverlay) {
        // Initial state: hide button, show RPM loader
        if(beginBtn) {
            beginBtn.style.opacity = '0';
            beginBtn.style.transform = 'translateY(20px)';
            beginBtn.style.transition = 'all 0.5s ease';
            beginBtn.style.pointerEvents = 'none'; // Prevent early clicks
        }

        // Wait a short moment to display the spinner, then show the button
        setTimeout(() => {
            const loaderContainer = document.getElementById('rpm-loader-container');
            if(loaderContainer) {
                loaderContainer.style.opacity = '0';
                loaderContainer.style.transition = 'opacity 0.3s ease';
            }
            
            setTimeout(() => {
                if(loaderContainer) loaderContainer.style.display = 'none';
                if(beginBtn) {
                    beginBtn.style.opacity = '1';
                    beginBtn.style.transform = 'translateY(0)';
                    beginBtn.style.pointerEvents = 'all';
                }
            }, 300);
        }, 1500); // Only 1.5s total load time now
    }

    if (beginBtn && introOverlay) {
        beginBtn.addEventListener('click', () => {
            playEngineSound(); // Trigger synthesized sound

            introOverlay.classList.add('hidden');
            document.body.classList.remove('locked-scroll');
            
            // Fast reveal for navbar
            setTimeout(() => {
                if(mainNav) mainNav.classList.remove('hidden-nav');
            }, 300); 

            // Fast cleanup
            setTimeout(() => {
                introOverlay.style.display = 'none';
                initParticles(); // Start particles only after intro is gone
            }, 600); 
        });
    } else {
        document.body.classList.remove('locked-scroll');
        if(mainNav) mainNav.classList.remove('hidden-nav');
        initParticles(); // Fallback if no intro
    }
    // Audio Synthesizer (Web Audio API) for Blips
    const hoverables = document.querySelectorAll('.nav-link, .card, .part-slot, .btn');
    hoverables.forEach(el => {
        el.addEventListener('mouseenter', () => {
             playBlipSound();
        });
    });

    // --- Audio Synthesis Engine ---
    let audioCtx = null;
    function getAudioContext() {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function playEngineSound() {
        try {
            const ctx = getAudioContext();
            
            // Create a richer sound using multiple oscillators
            const osc1 = ctx.createOscillator(); // Base rumble
            const osc2 = ctx.createOscillator(); // High pitch whine
            const noise = ctx.createOscillator(); // Engine grit
            
            const masterGain = ctx.createGain();
            const filter = ctx.createBiquadFilter();

            osc1.type = 'sawtooth';
            osc2.type = 'square';
            noise.type = 'triangle'; // Faux noise component

            // Base engine frequencies (idle -> rev -> drop)
            osc1.frequency.setValueAtTime(30, ctx.currentTime);
            osc1.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 1.0);
            osc1.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 2.5);

            // High whine frequencies (mimics turbo/alternator)
            osc2.frequency.setValueAtTime(60, ctx.currentTime);
            osc2.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 1.0);
            osc2.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 2.5);

            // Grit
            noise.frequency.setValueAtTime(80, ctx.currentTime);
            noise.frequency.linearRampToValueAtTime(400, ctx.currentTime + 1.0);
            noise.frequency.linearRampToValueAtTime(80, ctx.currentTime + 2.5);

            // Filter out super high harshness, allow it to open up on rev
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(300, ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 1.0);
            filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 2.5);

            // Master Volume Envelope
            masterGain.gain.setValueAtTime(0, ctx.currentTime);
            masterGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 0.1); // Fast attack
            masterGain.gain.linearRampToValueAtTime(0.4, ctx.currentTime + 1.0); // Hold peak
            masterGain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 2.5); // Slow fade

            osc1.connect(filter);
            osc2.connect(filter);
            noise.connect(filter);
            
            // Slight detune for thickness
            osc2.detune.value = 15;
            noise.detune.value = -10;

            filter.connect(masterGain);
            masterGain.connect(ctx.destination);

            osc1.start(); osc2.start(); noise.start();
            osc1.stop(ctx.currentTime + 2.5);
            osc2.stop(ctx.currentTime + 2.5);
            noise.stop(ctx.currentTime + 2.5);
        } catch(e) { console.warn("Audio Context Failed:", e); }
    }

    function playBlipSound() {
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(800, ctx.currentTime); // High pitch
            osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1); // Quick rise

            gainNode.gain.setValueAtTime(0.05, ctx.currentTime); // Very quiet
            gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1); // Fast fade

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start();
            osc.stop(ctx.currentTime + 0.1);
        } catch(e) {}
    }
    // ------------------------------

    // 2. Scroll Reveal Engine (Intersection Observer) 🎬
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px" 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered delays dynamically to children if needed, or just let CSS handle it
                entry.target.classList.add('active');
                
                // If it's a container with stagger children, we could manually stagger them,
                // but we already added CSS stagger classes, so `.active .stagger-X` handles it.
                
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 3. Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Custom Cursor Logic 🖱️ (Aerodynamic Pointer)
    const cursorDot = document.querySelector('.cursor-dot');
    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    if (window.innerWidth >= 1024 && cursorDot) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly move the dot, but let CSS transition handle the rotation state
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
        });

        const interactables = document.querySelectorAll('a, button, .card, .part-slot');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => cursorDot.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => cursorDot.classList.remove('cursor-hover'));
        });
    }

    // 5. About Modal Logic (Telemetry Data) 📜
    const modal = document.getElementById('about-modal');
    const openModalBtn = document.getElementById('about-btn');
    const closeModalBtn = document.getElementById('close-modal');

    if (openModalBtn && modal) {
        openModalBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            modal.classList.add('active');
            document.body.classList.add('locked-scroll');
        });

        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.classList.remove('locked-scroll');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.classList.remove('locked-scroll');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.classList.remove('locked-scroll');
            }
        });
    }

    // 6. Speed Particles System (Canvas) 🏎️💨
    function initParticles() {
        const canvas = document.getElementById('speed-particles');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            // Only cover the Hero section
            canvas.width = canvas.parentElement.offsetWidth;
            canvas.height = canvas.parentElement.offsetHeight;
            width = canvas.width;
            height = canvas.height;
        }

        window.addEventListener('resize', resize);
        resize();

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = width + Math.random() * 200; // Start offscreen right
                this.y = Math.random() * height;
                this.length = Math.random() * 50 + 10;
                this.speed = Math.random() * 15 + 5; // Fast!
                // Mix of white and neon pink
                this.color = Math.random() > 0.8 ? 'rgba(255, 0, 127, 0.8)' : 'rgba(255, 255, 255, 0.4)';
                this.thickness = Math.random() * 2;
            }
            update() {
                this.x -= this.speed;
                if (this.x + this.length < 0) {
                    this.reset();
                }
            }
            draw() {
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y);
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.thickness;
                ctx.stroke();
            }
        }

        // Create particles
        const particleCount = window.innerWidth > 768 ? 40 : 15;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        // Parallax scroll variable
        let scrollY = window.scrollY;
        window.addEventListener('scroll', () => {
             scrollY = window.scrollY;
        });

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Speed up particles based on scroll
            const speedBoost = scrollY * 0.05;

            // Only animate if canvas is roughly in viewport (optimization)
            if(window.scrollY < height + 100) {
                particles.forEach(p => {
                    const originalSpeed = p.speed;
                    p.speed += speedBoost;
                    p.update();
                    p.draw();
                    p.speed = originalSpeed; // reset for next frame
                });
            }
            requestAnimationFrame(animate);
        }

        animate();
    }

    // 7. Animated Odometer (Telemetry Gauges) ⏱️
    const gauges = document.querySelectorAll('.gauge-val');
    const gaugeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.innerText;
                // Extract number
                const numMatch = text.match(/\d+/);
                if (numMatch) {
                    const finalNum = parseInt(numMatch[0]);
                    const suffix = text.replace(numMatch[0], ''); // e.g. "+"
                    
                    let currentNum = 0;
                    const duration = 2000;
                    const startTime = performance.now();

                    function updateNumber(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        // Ease out cubic
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        currentNum = Math.floor(easeOut * finalNum);

                        target.innerText = currentNum + suffix;

                        if (progress < 1) {
                            requestAnimationFrame(updateNumber);
                        } else {
                            target.innerText = text; // ensure final exact text (handles "Gold" edge case if we replace text)
                        }
                    }
                    requestAnimationFrame(updateNumber);
                }
                gaugeObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    gauges.forEach(g => gaugeObserver.observe(g));

    // 8. 3D Tilt Effect on Project Cards 🎴
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation (max 10 degrees)
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            // Wait for transition, then remove inline style to allow CSS hover transform to work if any
            setTimeout(() => {
                if(!card.matches(':hover')) {
                    card.style.transform = ''; 
                }
            }, 300);
        });
    });

    // 9. Audio Toggle Logic 🎵
    const audioBtn = document.getElementById('audio-toggle-btn');
    const bgAudio = document.getElementById('bg-audio');
    
    // Add event listener once window loads to ensure elements are present
    if (audioBtn && bgAudio) {
        // Set volume for ambient track
        bgAudio.volume = 0.5;
        
        audioBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Check if there is actually a source loaded, otherwise alert the user
            if (!bgAudio.querySelector('source').src || bgAudio.querySelector('source').getAttribute('src') === "") {
                alert("Please add an MP3 link to the source tag in index.html for audio to play.");
                return;
            }

            if (bgAudio.paused) {
                bgAudio.play().then(() => {
                    audioBtn.innerHTML = '<i class="fas fa-volume-up"></i> <span>Audio</span>';
                    audioBtn.style.color = '#fff';
                }).catch(err => {
                    console.error("Audio playback failed:", err);
                    alert("Browser blocked audio playback or source is invalid.");
                });
            } else {
                bgAudio.pause();
                audioBtn.innerHTML = '<i class="fas fa-volume-mute"></i> <span>Audio</span>';
                audioBtn.style.color = 'var(--brand-pink)';
            }
        });
    }

    // 10. Live GitHub API Integration 🐙
    fetch('https://api.github.com/users/Shash-135/repos?per_page=100')
        .then(response => response.json())
        .then(repos => {
            if(!Array.isArray(repos)) return; 
            cards.forEach(card => {
                const link = card.querySelector('a.btn');
                if(!link) return;
                const url = link.href;
                if(url.includes('github.com/Shash-135/')) {
                    const repoName = url.split('/').pop();
                    const repoData = repos.find(r => r.name.toLowerCase() === repoName.toLowerCase());
                    
                    if(repoData) {
                        const statsDiv = document.createElement('div');
                        statsDiv.style.display = 'flex';
                        statsDiv.style.gap = '15px';
                        statsDiv.style.marginBottom = '15px';
                        statsDiv.style.fontSize = '0.85rem';
                        statsDiv.style.color = 'var(--text-muted)';
                        statsDiv.style.fontWeight = '700';

                        statsDiv.innerHTML = `
                            <span title="Stars"><i class="fas fa-star" style="color:var(--brand-yellow)"></i> ${repoData.stargazers_count}</span>
                            <span title="Forks"><i class="fas fa-code-branch" style="color:var(--text-muted)"></i> ${repoData.forks_count}</span>
                            ${repoData.language ? `<span title="Language"><i class="fas fa-circle" style="color:var(--brand-blue); font-size:0.6rem; vertical-align: middle;"></i> ${repoData.language}</span>` : ''}
                        `;
                        
                        card.insertBefore(statsDiv, link);
                    }
                }
            });
        })
        .catch(err => console.log('GitHub API Error:', err));

    // 11. "Nitrous" Easter Egg (Type 'SPEED') 💥
    let secretBuffer = '';
    const secretCode = 'speed';
    document.addEventListener('keydown', (e) => {
        if (!e.key || e.key.length !== 1) return; // Only process single character keys
        secretBuffer += e.key.toLowerCase();
        
        if (secretBuffer.length > secretCode.length) {
            secretBuffer = secretBuffer.slice(-secretCode.length);
        }
        
        if (secretBuffer === secretCode) {
            triggerNitrous();
            secretBuffer = ''; // reset
        }
    });

    function triggerNitrous() {
        if (document.body.classList.contains('nitrous-active')) return;

        // Visual Shake & Color Shift
        document.body.classList.add('nitrous-active');
        
        // Sound effect
        try {
            const ctx = getAudioContext();
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(100, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 1.5);
            gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1.5);
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 1.5);
        } catch(e){}

        setTimeout(() => {
            document.body.classList.remove('nitrous-active');
        }, 3000); // 3 seconds of overdrive
    }

});
