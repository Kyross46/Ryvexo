/**
 * RYVEXO - Frontendová logika webové aplikace
 * Plně lokalizováno do češtiny, optimalizováno pro herní design.
 */

// --- DEMO DATA (ČESKY) ---

const coursesData = [
    { id: 1, title: "Základy C#", category: "programming", desc: "Nauč se proměnné, podmínky, cykly a objektovou logiku pro tvé hry.", difficulty: "Začátečník", lessons: 12, icon: "fa-code" },
    { id: 2, title: "Prostředí Unity", category: "basics", desc: "Základní orientace: Scene, Inspector, Hierarchy a práce s prefaby.", difficulty: "Začátečník", lessons: 5, icon: "fa-unity" },
    { id: 3, title: "Fyzika a Rigidbody", category: "3d", desc: "Kolize, gravitace, addForce a fyzikální materiály ve 3D prostoru.", difficulty: "Středně pokročilý", lessons: 8, icon: "fa-cube" },
    { id: 4, title: "Systém pohybu hráče", category: "programming", desc: "Character controller, state machines a plynulé zpracování vstupu.", difficulty: "Středně pokročilý", lessons: 15, icon: "fa-person-running" }
];

const tutorialsData = [
    { id: 1, title: "Vytvoření základního pohybu (WASD)", desc: "Jednoduchý skript pro pohyb kostky pomocí šipek nebo kláves WASD.", category: "Hratelnost", time: "15 min" },
    { id: 2, title: "Generování nepřátel (Spawner)", desc: "Jak instancovat (Instantiate) prefaby nepřátel na náhodných pozicích.", category: "Logika", time: "20 min" },
    { id: 3, title: "Tvorba Hlavního menu", desc: "Práce s Canvasem, tlačítky a načítání scén (SceneManager).", category: "UI", time: "25 min" }
];

const roadmapSteps = [
    { id: "step1", title: "Základy programování v C#", desc: "Pochopení syntaxe, proměnných a metod." },
    { id: "step2", title: "Znalost editoru Unity", desc: "Zorientování se ve scéně, gameobjektech a prefobech." },
    { id: "step3", title: "První hratelný prototyp", desc: "Vytvoření jednoduché hry, kde sbíráš mince." },
    { id: "step4", title: "Základní hratelnost", desc: "Zpracování vstupů od hráče, fyzika a jednoduchá UI." },
    { id: "step5", title: "Dokončení a export hry", desc: "Sestavení menu, zvuky a finální export do .exe." }
];

let communityPosts = [
    { id: 1, author: "Tomas_Dev", text: "Konečně jsem rozchodil procedurální generování levelů pro moji dungeon hru! Tilemap systém v Unity je pecka. 🚀", tag: "#leveldesign", likes: 14, isLiked: false },
    { id: 2, author: "KlaraKodi", text: "Nevíte někdo, jak nejlépe optimalizovat osvětlení v URP, aby to na starších noteboocích tolik nelagovalo?", tag: "#optimalizace", likes: 3, isLiked: false }
];

// Stav aplikace
let currentUser = null;

// --- INICIALIZACE ---

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initTheme();
    initCourses();
    initTutorials();
    initRoadmap();
    initCommunity();
    initAuth();
    initSearch();
    initMisc();
    initDashboard(); // Aplikuje stav profilu, pokud je uživatel uložen v paměti
});

// --- NAVIGACE A SCROLLOVÁNÍ ---
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-link');

    // Efekt navigace při scrollování
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // Mobilní menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.innerHTML = navLinks.classList.contains('nav-active') 
            ? '<i class="fa-solid fa-xmark"></i>' 
            : '<i class="fa-solid fa-bars-staggered"></i>';
    });

    // Simulace procházení stránek (Single Page App)
    window.navigateTo = function(sectionId) {
        // Skrýt všechny sekce
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active-section'));
        // Zobrazit požadovanou
        document.getElementById(sectionId).classList.add('active-section');
        
        // Aktualizovat aktivní odkaz v navigaci
        links.forEach(link => {
            link.classList.remove('active');
            if(link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
        });

        // Zavřít mobilní menu, pokud je otevřené
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>';
        }

        window.scrollTo(0, 0);
    };

    // Připojení eventů na navigační odkazy
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('href').substring(1);
            navigateTo(target);
        });
    });
}

// --- PŘEPÍNÁNÍ MOTIVŮ ---
function initTheme() {
    const themeBtn = document.getElementById('themeToggleBtn');
    const htmlEl = document.documentElement;
    
    // Načtení z localStorage
    const savedTheme = localStorage.getItem('ryvexo-theme') || 'dark';
    htmlEl.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlEl.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlEl.setAttribute('data-theme', newTheme);
        localStorage.setItem('ryvexo-theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        themeBtn.innerHTML = theme === 'dark' 
            ? '<i class="fa-solid fa-sun"></i>' 
            : '<i class="fa-solid fa-moon"></i>';
    }
}

// --- VÝUKA (Kurzy) ---
function initCourses() {
    const grid = document.getElementById('coursesGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderCourses(filter = 'all') {
        grid.innerHTML = '';
        const filtered = filter === 'all' ? coursesData : coursesData.filter(c => c.category === filter);
        
        filtered.forEach(course => {
            const diffClass = course.difficulty.toLowerCase().replace(' ', '.');
            grid.innerHTML += `
                <div class="card glass-card course-card">
                    <i class="fa-brands ${course.icon} course-icon"></i>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                    <div class="course-meta">
                        <span class="difficulty ${diffClass}">${course.difficulty.toUpperCase()}</span>
                        <span><i class="fa-solid fa-list-check"></i> ${course.lessons} Lekcí</span>
                    </div>
                    <button class="btn btn-outline btn-full" onclick="showToast('Kurz načítám...')">Začít kurz</button>
                </div>
            `;
        });
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCourses(btn.dataset.filter);
        });
    });

    renderCourses(); // Prvotní vykreslení
}

// --- TUTORIÁLY ---
function initTutorials() {
    const list = document.getElementById('tutorialsList');
    const searchInput = document.getElementById('tutorialSearch');

    function renderTutorials(query = '') {
        list.innerHTML = '';
        const q = query.toLowerCase();
        const filtered = tutorialsData.filter(t => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
        
        if (filtered.length === 0) {
            list.innerHTML = '<p style="color:var(--text-sec); padding: 1rem;">Nenalezeny žádné tutoriály odpovídající hledání.</p>';
            return;
        }

        filtered.forEach(tut => {
            list.innerHTML += `
                <div class="card glass-card list-item">
                    <div class="list-item-content">
                        <h3>${tut.title} <span class="tag">${tut.category}</span></h3>
                        <p>${tut.desc}</p>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color:var(--text-sec); margin-right: 20px; font-size:0.9rem; font-weight: 600;"><i class="fa-regular fa-clock"></i> ${tut.time}</span>
                        <button class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem;" onclick="showToast('Otevírám tutoriál...')">Číst</button>
                    </div>
                </div>
            `;
        });
    }

    searchInput.addEventListener('input', (e) => renderTutorials(e.target.value));
    renderTutorials();
}

// --- ROADMAPA ---
function initRoadmap() {
    const container = document.getElementById('roadmapTimeline');
    const fill = document.getElementById('roadmapFill');
    const pctText = document.getElementById('roadmapPercentage');
    
    // Načtení z localStorage
    let savedProgress = JSON.parse(localStorage.getItem('ryvexo-roadmap')) || {};

    function updateProgressBar() {
        const total = roadmapSteps.length;
        const completed = Object.values(savedProgress).filter(v => v).length;
        const pct = Math.round((completed / total) * 100);
        
        fill.style.width = `${pct}%`;
        pctText.textContent = `${pct}%`;
        
        // Přidání XP uživateli, pokud je přihlášen
        if (currentUser && pct > 0) {
            currentUser.xp = completed * 300; // 300 XP za splněný krok
            localStorage.setItem('ryvexo-user', JSON.stringify(currentUser));
            updateDashboardUI();
        }
    }

    function renderRoadmap() {
        container.innerHTML = '';
        roadmapSteps.forEach(step => {
            const isDone = savedProgress[step.id] || false;
            container.innerHTML += `
                <div class="roadmap-step ${isDone ? 'completed' : ''}" data-id="${step.id}">
                    <div class="step-checkbox">
                        <i class="fa-solid fa-check"></i>
                    </div>
                    <div class="step-content">
                        <h3>${step.title}</h3>
                        <p style="color:var(--text-sec); font-size:0.95rem;">${step.desc}</p>
                    </div>
                </div>
            `;
        });

        // Event listener pro zakliknutí úkolu
        document.querySelectorAll('.roadmap-step').forEach(el => {
            el.addEventListener('click', () => {
                const id = el.dataset.id;
                savedProgress[id] = !savedProgress[id];
                localStorage.setItem('ryvexo-roadmap', JSON.stringify(savedProgress));
                
                el.classList.toggle('completed');
                updateProgressBar();
                
                if(savedProgress[id]) showToast('Krok splněn! +300 XP');
            });
        });
    }

    renderRoadmap();
    setTimeout(updateProgressBar, 100); // Plynulá animace při načtení
}

// --- KOMUNITA ---
function initCommunity() {
    const feed = document.getElementById('communityFeed');
    const postBtn = document.getElementById('newPostBtn');
    const formContainer = document.getElementById('postFormContainer');
    const cancelBtn = document.getElementById('cancelPostBtn');
    const submitBtn = document.getElementById('submitPostBtn');
    const contentInp = document.getElementById('postContent');
    const tagInp = document.getElementById('postTag');

    // Načtení z localStorage
    const savedPosts = localStorage.getItem('ryvexo-posts');
    if (savedPosts) communityPosts = JSON.parse(savedPosts);

    window.toggleLike = function(id) {
        if (!currentUser) {
            showToast('Pro udělení lajku se musíte přihlásit.');
            return;
        }
        const post = communityPosts.find(p => p.id === id);
        if (post) {
            post.isLiked = !post.isLiked;
            post.likes += post.isLiked ? 1 : -1;
            saveAndRenderFeed();
        }
    };

    function saveAndRenderFeed() {
        localStorage.setItem('ryvexo-posts', JSON.stringify(communityPosts));
        feed.innerHTML = '';
        
        // Otočit, aby nejnovější byly nahoře
        [...communityPosts].reverse().forEach(post => {
            const likeIconClass = post.isLiked ? 'fa-solid' : 'fa-regular';
            feed.innerHTML += `
                <div class="card glass-card post-card">
                    <div class="post-header">
                        <span class="post-author"><i class="fa-solid fa-user-astronaut" style="color: var(--accent-cyan);"></i> ${post.author}</span>
                        <span>Právě teď</span>
                    </div>
                    <p class="post-text">${post.text}</p>
                    <span class="post-tag">${post.tag}</span>
                    <div class="post-actions">
                        <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike(${post.id})">
                            <i class="${likeIconClass} fa-heart"></i> ${post.likes}
                        </button>
                        <button class="action-btn" onclick="showToast('Odpovědi zatím nejsou povoleny v demoverzi.')">
                            <i class="fa-regular fa-comment"></i> Odpovědět
                        </button>
                    </div>
                </div>
            `;
        });
    }

    postBtn.addEventListener('click', () => {
        if (!currentUser) { showToast('Pro vytvoření příspěvku se musíte přihlásit.'); return; }
        formContainer.classList.remove('hidden');
    });
    
    cancelBtn.addEventListener('click', () => {
        formContainer.classList.add('hidden');
        contentInp.value = ''; tagInp.value = '';
    });

    submitBtn.addEventListener('click', () => {
        if (contentInp.value.trim() === '') return;
        
        const newPost = {
            id: Date.now(),
            author: currentUser.username,
            text: contentInp.value,
            tag: tagInp.value || '#ryvexo',
            likes: 0,
            isLiked: false
        };
        
        communityPosts.push(newPost);
        saveAndRenderFeed();
        
        formContainer.classList.add('hidden');
        contentInp.value = ''; tagInp.value = '';
        showToast('Příspěvek úspěšně publikován!');
    });

    saveAndRenderFeed();
}

// --- AUTENTIZACE A PROFIL ---
function initAuth() {
    const authModal = document.getElementById('authModal');
    const closeBtn = document.getElementById('closeAuthModal');
    const loginBtnNav = document.getElementById('loginBtnNav');
    const authContainer = document.getElementById('authContainer');
    const tabs = document.querySelectorAll('.auth-tab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorMsg = document.getElementById('loginError');

    // Kontrola localStorage na aktivní relaci
    const savedUser = localStorage.getItem('ryvexo-user');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateNavForAuth();
    }

    loginBtnNav.addEventListener('click', () => {
        if (!currentUser) authModal.classList.add('show');
    });
    closeBtn.addEventListener('click', () => authModal.classList.remove('show'));

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            if (tab.dataset.tab === 'login') {
                loginForm.classList.add('active'); loginForm.classList.remove('hidden');
                registerForm.classList.remove('active'); registerForm.classList.add('hidden');
            } else {
                registerForm.classList.add('active'); registerForm.classList.remove('hidden');
                loginForm.classList.remove('active'); loginForm.classList.add('hidden');
            }
            errorMsg.classList.add('hidden');
        });
    });

    // Simulace přihlášení
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;

        if (email && pass) {
            // Extrakce jména z emailu pro hezčí výpis
            let uname = email.split('@')[0];
            uname = uname.charAt(0).toUpperCase() + uname.slice(1);
            currentUser = { username: uname, email: email, xp: 0, level: 1 };
            finalizeLogin();
        } else {
            errorMsg.classList.remove('hidden');
        }
    });

    // Simulace registrace
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        
        currentUser = { username: user, email: email, xp: 0, level: 1 };
        finalizeLogin();
        showToast('Účet byl úspěšně vytvořen!');
    });

    function finalizeLogin() {
        localStorage.setItem('ryvexo-user', JSON.stringify(currentUser));
        authModal.classList.remove('show');
        updateNavForAuth();
        showToast(`Vítejte zpět, ${currentUser.username}!`);
        
        // Přidání odkazu na profil do menu, pokud tam není
        if (!document.getElementById('navDashboardLink')) {
            const li = document.createElement('li');
            li.innerHTML = '<a href="#dashboard" class="nav-link" id="navDashboardLink">Profil</a>';
            document.getElementById('navLinks').appendChild(li);
            li.querySelector('a').addEventListener('click', (e) => {
                e.preventDefault(); navigateTo('dashboard');
            });
        }
        updateDashboardUI();
    }
}

function updateNavForAuth() {
    const container = document.getElementById('authContainer');
    if (currentUser) {
        container.innerHTML = `
            <div style="display:flex; align-items:center; gap: 15px;">
                <span style="font-weight:700; font-family:'Rajdhani',sans-serif; font-size:1.1rem; cursor:pointer;" onclick="navigateTo('dashboard')">
                    <i class="fa-solid fa-user-astronaut" style="color:var(--accent-cyan)"></i> ${currentUser.username}
                </span>
                <button class="icon-btn" onclick="logout()" aria-label="Odhlásit se" title="Odhlásit se">
                    <i class="fa-solid fa-sign-out-alt"></i>
                </button>
            </div>
        `;
    }
}

window.logout = function() {
    currentUser = null;
    localStorage.removeItem('ryvexo-user');
    document.getElementById('authContainer').innerHTML = `<button class="btn btn-outline" id="loginBtnNav" onclick="document.getElementById('authModal').classList.add('show')">Přihlásit se</button>`;
    
    const dashLink = document.getElementById('navDashboardLink');
    if(dashLink) dashLink.parentElement.remove();
    
    showToast('Byl jsi úspěšně odhlášen.');
    navigateTo('home');
}

function initDashboard() {
    window.updateDashboardUI = function() {
        if (!currentUser) return;
        
        document.getElementById('dashUsername').textContent = currentUser.username;
        document.getElementById('dashXp').textContent = currentUser.xp;
        
        // Logika úrovní (Každých 600 XP = 1 Level)
        const lvl = Math.floor(currentUser.xp / 600) + 1;
        document.getElementById('dashLevel').textContent = lvl;
        
        const nextLvlXp = lvl * 600;
        const prevLvlXp = (lvl - 1) * 600;
        const progressPct = ((currentUser.xp - prevLvlXp) / (nextLvlXp - prevLvlXp)) * 100;
        
        document.getElementById('dashXpBar').style.width = `${progressPct}%`;

        // Odznaky a úspěchy
        const achList = document.getElementById('achievementsList');
        achList.innerHTML = '';
        if (currentUser.xp >= 300) {
            achList.innerHTML += `<li class="achievement-item"><i class="fa-solid fa-rocket achievement-icon"></i> <div><h4>První krůčky</h4><span style="font-size:0.85rem;color:var(--text-sec)">Splněn první krok v roadmapě</span></div></li>`;
        }
        if (currentUser.xp >= 1200) {
            achList.innerHTML += `<li class="achievement-item"><i class="fa-solid fa-star achievement-icon" style="color:#00d2ff;"></i> <div><h4>Vývojář</h4><span style="font-size:0.85rem;color:var(--text-sec)">Dosaženo přes 1200 XP</span></div></li>`;
        }
        if (achList.innerHTML === '') {
            achList.innerHTML = '<p style="color:var(--text-sec); grid-column:span 2;">Plň kroky v Roadmapě pro zisk XP a odznaků.</p>';
        }
    };
    if (currentUser) updateDashboardUI();
}

// --- GLOBÁLNÍ HLEDÁNÍ ---
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('globalSearchInput');
    const results = document.getElementById('searchResults');

    function openSearch() {
        searchModal.classList.add('show');
        setTimeout(() => searchInput.focus(), 100);
    }
    function closeSearch() {
        searchModal.classList.remove('show');
        searchInput.value = '';
        results.innerHTML = '<div class="empty-state">Začni psát pro vyhledávání...</div>';
    }

    searchBtn.addEventListener('click', openSearch);
    
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') { e.preventDefault(); openSearch(); }
        if (e.key === 'Escape' && searchModal.classList.contains('show')) closeSearch();
    });

    searchInput.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        if (q.length < 2) {
            results.innerHTML = '<div class="empty-state">Pokračuj ve psaní...</div>';
            return;
        }

        let hits = '';
        
        coursesData.filter(c => c.title.toLowerCase().includes(q)).forEach(c => {
            hits += `<div class="search-result-item" onclick="navigateTo('learn'); document.getElementById('searchModal').classList.remove('show')"><h4>${c.title}</h4><span>Kurz</span></div>`;
        });
        
        tutorialsData.filter(t => t.title.toLowerCase().includes(q)).forEach(t => {
            hits += `<div class="search-result-item" onclick="navigateTo('tutorials'); document.getElementById('searchModal').classList.remove('show')"><h4>${t.title}</h4><span>Tutoriál</span></div>`;
        });

        if (hits === '') results.innerHTML = '<div class="empty-state">Nebyly nalezeny žádné výsledky.</div>';
        else results.innerHTML = hits;
    });
}

// --- DOPLŇKOVÉ FUNKCE (Kopírování, Čísla) ---
function initMisc() {
    // Tlačítko kopírování kódu v hero sekci
    const copyBtn = document.getElementById('copyHeroCode');
    copyBtn.addEventListener('click', () => {
        const code = `using UnityEngine;

public class PohybHrace : MonoBehaviour
{
    public float rychlost = 5f;

    void Update()
    {
        // Načtení vstupu od hráče
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");

        Vector3 pohyb = new Vector3(h, 0, v);
        transform.Translate(pohyb * rychlost * Time.deltaTime);
    }
}`;
        navigator.clipboard.writeText(code).then(() => {
            copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#00d2ff;"></i>';
            showToast('Kód byl zkopírován do schránky!');
            setTimeout(() => copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>', 2000);
        });
    });

    // Animace načítání čísel v hero sekci
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        const duration = 2000;
        const step = target / (duration / 16); 
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                stat.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.innerText = target;
            }
        };
        setTimeout(updateCounter, 600); // Mírné zpoždění pro plynulý efekt po fade-in
    });
}

// Globální funkce pro zobrazení zpráv (Toast)
window.showToast = function(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color:var(--accent-cyan); margin-right:10px;"></i> ${msg}`;
    
    container.appendChild(toast);
    
    // Zobrazení s animací
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Odebrání po 3 vteřinách
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400); // vyčkání na dokončení CSS animace
    }, 3000);
}



