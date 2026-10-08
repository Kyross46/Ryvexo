/**
 * RYVEXO - Frontendová logika webové aplikace
 */

// --- DYNAMICKÁ DATA PRO VÝUKU ---
const defaultCourses = [
    { 
        id: 1, 
        title: "Základy C#", 
        category: "programming", 
        desc: "Proměnné, podmínky, cykly a základy programátorské logiky pro Unity.", 
        difficulty: "Začátečník", 
        lessons: 5, 
        icon: "fa-code",
        lessonItems: [
            {
                title: "1. Proměnné a datové typy",
                content: `
                    <p>Proměnná je pojmenované místo v paměti počítače, kam si ukládáme hodnoty. V C# a Unity nejčastěji používáme tyto čtyři základní typy:</p>
                    <ul style="margin: 15px 0 15px 25px;">
                        <li><code>int</code> – celá čísla (např. počet životů, skóre, náboje): <code>int zivoty = 100;</code></li>
                        <li><code>float</code> – desetinná čísla (např. rychlost). Vždy píšeme s písmenem <strong>f</strong>: <code>float rychlost = 5.5f;</code></li>
                        <li><code>string</code> – textové řetězce v uvozovkách: <code>string jmenoHrace = "Ryvexo";</code></li>
                        <li><code>bool</code> – pravdivostní hodnota (pouze <code>true</code> nebo <code>false</code>): <code>bool jeNazivu = true;</code></li>
                    </ul>
                    <p><em>Tip do Unity: Pokud před proměnnou napíšeš <code>public</code>, objeví se ti přímo v okně Inspector v editoru Unity a můžeš ji měnit bez úpravy kódu!</em></p>
                `
            },
            {
                title: "2. Podmínky (if / else)",
                content: `
                    <p>Podmínky umožňují hře rozhodovat se na základě aktuální situace na scéně.</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>if (zivoty <= 0)
{
    Debug.Log("Hráč zemřel!");
    RestartLevelu();
}
else if (zivoty < 20)
{
    Debug.Log("Varování: Málo životů!");
}
else
{
    Debug.Log("Hráč je v pořádku.");
}</code></pre>
                `
            },
            {
                title: "3. Metody a Unity smyčka",
                content: `
                    <p>Metoda je blok kódu, který vykoná konkrétní akci. Unity má předpřipravené speciální metody, které volá automaticky:</p>
                    <ul style="margin: 15px 0 15px 25px;">
                        <li><strong>Start()</strong> – Zavolá se přesně jednou na začátku při spuštění hry. Vhodné pro inicializaci.</li>
                        <li><strong>Update()</strong> – Volá se v každém jednotlivém snímku (frame). Tady kontrolujeme vstup od hráče.</li>
                    </ul>
                `
            },
            {
                title: "4. Cykly (For a While)",
                content: `
                    <p>Cykly používáme, když chceme nějakou akci zopakovat vícekrát za sebou, aniž bychom museli kód psát stokrát.</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>// Vypíše čísla od 1 do 5
for (int i = 1; i <= 5; i++)
{
    Debug.Log("Nepřítel číslo: " + i);
}</code></pre>
                    <p>Smyčka <code>for</code> se skládá ze tří částí: vytvoření proměnné (<code>i=1</code>), podmínky, dokdy má cyklus běžet (<code>i<=5</code>), a přičtení jedničky po každém kole (<code>i++</code>).</p>
                `
            },
            {
                title: "5. Pole (Arrays)",
                content: `
                    <p>Pole je jako polička, do které si můžeš uložit více hodnot stejného typu vedle sebe. Skvělé pro inventář nebo seznam nepřátel.</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>public string[] zbrane = {"Nůž", "Pistole", "Brokovnice"};

void Start()
{
    // V programování se vždy začíná počítat od nuly!
    Debug.Log("Moje první zbraň je: " + zbrane[0]); 
}</code></pre>
                `
            }
        ]
    },
    { 
        id: 2, 
        title: "Orientace v Unity", 
        category: "basics", 
        desc: "Hierarchy, Inspector, Project okno a vizuální úpravy scény.", 
        difficulty: "Začátečník", 
        lessons: 5, 
        icon: "fa-unity",
        lessonItems: [
            {
                title: "1. Klíčová okna editoru",
                content: `
                    <p>Editor Unity se skládá z několika hlavních panelů:</p>
                    <ol style="margin: 15px 0 15px 25px;">
                        <li><strong>Hierarchy (Hierarchie)</strong> – Seznam všech objektů, které v tuto chvíli existují na scéně.</li>
                        <li><strong>Scene (Scéna)</strong> – Tvůj 3D/2D pracovní prostor.</li>
                        <li><strong>Game (Hra)</strong> – Pohled kamery. Přesně to, co uvidí hráč.</li>
                        <li><strong>Inspector</strong> – Zobrazuje všechny vlastnosti vybraného objektu.</li>
                        <li><strong>Project (Assets)</strong> – Správce souborů na disku.</li>
                    </ol>
                `
            },
            {
                title: "2. GameObjects a Transform",
                content: `
                    <p>Všechno v Unity je <strong>GameObject</strong>. Každý má povinně komponentu <strong>Transform</strong>:</p>
                    <ul style="margin: 15px 0 15px 25px;">
                        <li><strong>Position</strong>: souřadnice [X, Y, Z] v prostoru.</li>
                        <li><strong>Rotation</strong>: natočení kolem os.</li>
                        <li><strong>Scale</strong>: velikost objektu (výchozí je 1, 1, 1).</li>
                    </ul>
                `
            },
            {
                title: "3. Práce s Prefaby",
                content: `
                    <p><strong>Prefab</strong> je uložená šablona objektu. Vytvoříš ho tak, že hotový objekt přetáhneš z Hierarchy do Project okna.</p>
                    <p>Změna na Prefabu se automaticky propíše do všech jeho kopií na scéně.</p>
                `
            },
            {
                title: "4. Materiály a Textury",
                content: `
                    <p>Základní kostka je vždycky šedá. Abychom jí dali barvu nebo texturu, potřebujeme <strong>Material</strong>.</p>
                    <ol style="margin: 15px 0 15px 25px;">
                        <li>V okně Project klikni pravým a dej <strong>Create -> Material</strong>.</li>
                        <li>V Inspectoru u materiálu klikni na barvičku vedle <strong>Albedo</strong> a vyber barvu.</li>
                        <li>Materiál jednoduše přetáhni myší na objekt ve scéně.</li>
                    </ol>
                `
            },
            {
                title: "5. Osvětlení (Lighting)",
                content: `
                    <p>Světlo tvoří atmosféru hry. V Unity máme několik základních typů světel (Create -> Light):</p>
                    <ul style="margin: 15px 0 15px 25px;">
                        <li><strong>Directional Light</strong> – Funguje jako Slunce. Svítí na celou scénu pod stejným úhlem, nezáleží na tom, kam ho umístíš.</li>
                        <li><strong>Point Light</strong> – Funguje jako žárovka nebo oheň. Svítí do všech směrů ze svého středu. Můžeš mu nastavit dosah (Range).</li>
                        <li><strong>Spot Light</strong> – Funguje jako baterka. Svítí v kuželu jedním směrem.</li>
                    </ul>
                `
            }
        ]
    },
    { 
        id: 3, 
        title: "Pohyb a Fyzika", 
        category: "3d", 
        desc: "Základní plošinovka, Rigidbody, kolize, triggery a raycasty.", 
        difficulty: "Středně pokročilý", 
        lessons: 5, 
        icon: "fa-cube",
        lessonItems: [
            {
                title: "1. Rigidbody: Fyzikální engine",
                content: `
                    <p>Pokud chceš, aby na objekt působila gravitace a reálné síly, přidej komponentu <strong>Rigidbody</strong>.</p>
                    <p>Objektu pak udělujeme sílu přes kód:</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>Rigidbody rb = GetComponent<Rigidbody>();
rb.AddForce(Vector3.up * 5f, ForceMode.Impulse);</code></pre>
                `
            },
            {
                title: "2. Kolize vs Triggery",
                content: `
                    <p>Každý pevný objekt potřebuje <strong>Collider</strong>:</p>
                    <ul style="margin: 15px 0 15px 25px;">
                        <li><strong>Pevná kolize</strong> – Objekty se odrazí, hráč nepropadne zemí. Metoda <code>OnCollisionEnter(Collision col)</code>.</li>
                        <li><strong>Trigger (Průchozí zóna)</strong> – Zaškrtnuté <em>Is Trigger</em> (mince, brána). Metoda <code>OnTriggerEnter(Collider other)</code>.</li>
                    </ul>
                `
            },
            {
                title: "3. Sbírání mincí (Kód)",
                content: `
                    <p>Příklad kódu na minci s aktivním Triggerem:</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        Debug.Log("+1 Mince sebrána!");
        Destroy(gameObject);
    }
}</code></pre>
                `
            },
            {
                title: "4. Fyzikální materiály (Odrážení)",
                content: `
                    <p>Co když chceme, aby náš objekt skákal jako gumový míček, nebo klouzal jako led?</p>
                    <ol style="margin: 15px 0 15px 25px;">
                        <li>V Project okně: <strong>Create -> Physic Material</strong>.</li>
                        <li>V Inspectoru můžeš nastavit <strong>Bounciness</strong> (odrazivost: 0 je beton, 1 je super míček) a <strong>Friction</strong> (tření).</li>
                        <li>Tento materiál pak přetáhni do políčka Material uvnitř komponenty Collider.</li>
                    </ol>
                `
            },
            {
                title: "5. Raycast (Neviditelný paprsek)",
                content: `
                    <p>Raycast je neviditelný laser, který vystřelíme z bodu A do bodu B. Unity nám řekne, co tento laser trefil. Je to základ pro střelbu ve FPS hrách.</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>RaycastHit zasah;
// Vystřelíme dopředu z pozice objektu na vzdálenost 100 metrů
if (Physics.Raycast(transform.position, transform.forward, out zasah, 100f))
{
    Debug.Log("Trefil jsem: " + zasah.collider.name);
}</code></pre>
                `
            }
        ]
    },
    { 
        id: 4, 
        title: "Tvorba UI a Menu", 
        category: "basics", 
        desc: "Práce s Canvasem, texty, tlačítka a přepínání herních scén.", 
        difficulty: "Středně pokročilý", 
        lessons: 3, 
        icon: "fa-desktop",
        lessonItems: [
            {
                title: "1. Canvas a Text",
                content: `
                    <p>Veškeré uživatelské rozhraní (UI) musí v Unity ležet na neviditelném plátně zvaném <strong>Canvas</strong>.</p>
                    <ol style="margin: 15px 0 15px 25px;">
                        <li>Klikni do Hierarchy pravým tlačítkem a dej <strong>UI -> Text - TextMeshPro</strong>.</li>
                        <li>Unity automaticky vytvoří objekt Canvas a EventSystem.</li>
                        <li>V Inspectoru u textu nezapomeň nastavit správné <strong>Ukotvení (Anchors)</strong>, aby se text nerozhodil na menších monitorech.</li>
                    </ol>
                `
            },
            {
                title: "2. Tlačítka (Buttons)",
                content: `
                    <p>Tlačítka fungují podobně jako text. Vytvoříš je přes <strong>UI -> Button</strong>. Uvnitř tlačítka se rovnou vytvoří i podřazený text.</p>
                    <p>V Inspectoru u tlačítka najdeš sekci <strong>On Click ()</strong>. Tam můžeš přidat libovolný objekt ze scény a zavolat jeho veřejnou metodu (třeba metodu <code>StartHry()</code>).</p>
                `
            },
            {
                title: "3. Přepínání levelů (SceneManager)",
                content: `
                    <p>Pro přechod z menu do samotné hry musíme použít správce scén.</p>
                    <pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin: 15px 0;"><code>// Tohle musíme přidat úplně nahoru do skriptu:
using UnityEngine.SceneManagement;

public class SpravceMenu : MonoBehaviour
{
    public void HratHru()
    {
        // Načte scénu s názvem Level1
        SceneManager.LoadScene("Level1");
    }
}</code></pre>
                    <p><em>Nezapomeň si obě scény (Menu i Level1) přidat v Unity do <strong>File -> Build Settings</strong>!</em></p>
                `
            }
        ]
    }
];

let savedCourses = JSON.parse(localStorage.getItem('ryvexo-courses-data'));
// Kontrola: pokud v paměti chybí lekce nebo je stará verze, obnovíme naši novou sadu
let coursesData = (savedCourses && savedCourses.length === 4 && savedCourses[0].lessonItems && savedCourses[0].lessonItems.length === 5) ? savedCourses : defaultCourses;

// --- DYNAMICKÁ DATA PRO TUTORIÁLY ---
const defaultTutorials = [
    { 
        id: 1, title: "Pohyb hráče (WASD)", desc: "Základní skript pro pohyb postavy.", category: "Hratelnost", time: "15 min",
        content: `<h4 style="color: #fff; margin-top: 1rem;">Krok 1: Příprava scény</h4><ol style="margin-left: 20px; margin-bottom: 1rem;"><li>V okně <strong>Hierarchy</strong> -> <strong>3D Object</strong> -> <strong>Cube</strong>.</li></ol><h4 style="color: #fff; margin-top: 1rem;">Krok 2: Kód</h4><pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>using UnityEngine;\n\npublic class PohybHrace : MonoBehaviour\n{\n    public float rychlost = 5f;\n    void Update()\n    {\n        float h = Input.GetAxis("Horizontal");\n        float v = Input.GetAxis("Vertical");\n        transform.Translate(new Vector3(h, 0, v) * rychlost * Time.deltaTime);\n    }\n}</code></pre>`
    },
    { 
        id: 2, title: "Skok postavy", desc: "Jak naprogramovat skok pomocí fyziky (Rigidbody).", category: "Fyzika", time: "10 min",
        content: `<h4 style="color: #fff; margin-top: 1rem;">Krok 1: Rigidbody</h4><p>Ujisti se, že má tvůj hráč (Cube) přidanou komponentu <strong>Rigidbody</strong>.</p><h4 style="color: #fff; margin-top: 1rem;">Krok 2: Kód skoku</h4><pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>using UnityEngine;\n\npublic class SkokHrace : MonoBehaviour\n{\n    public float silaSkoku = 7f;\n    private Rigidbody rb;\n\n    void Start()\n    {\n        rb = GetComponent<Rigidbody>();\n    }\n\n    void Update()\n    {\n        if (Input.GetKeyDown(KeyCode.Space))\n        {\n            rb.AddForce(Vector3.up * silaSkoku, ForceMode.Impulse);\n        }\n    }\n}</code></pre><p><em>Poznámka: Tento jednoduchý skript neřeší detekci podlahy, takže hráč může skákat donekonečna i ve vzduchu.</em></p>`
    },
    { 
        id: 3, title: "Sběr předmětů a mincí", desc: "Jak zničit objekt po nárazu pomocí Triggeru.", category: "Hratelnost", time: "5 min",
        content: `<h4 style="color: #fff; margin-top: 1rem;">Krok 1: Nastavení Collideru</h4><p>Na sbíraném předmětu (např. minci) musí být zaškrtnuté políčko <strong>Is Trigger</strong> v komponentě Collider.</p><h4 style="color: #fff; margin-top: 1rem;">Krok 2: Kód pro minci</h4><pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>using UnityEngine;\n\npublic class SberPredmetu : MonoBehaviour\n{\n    void OnTriggerEnter(Collider other)\n    {\n        // Zkontrolujeme, jestli do nás narazil přímo hráč\n        if (other.CompareTag("Player"))\n        {\n            Debug.Log("Předmět sebrán!");\n            Destroy(gameObject); // Zničí tento konkrétní objekt ze scény\n        }\n    }\n}</code></pre><p><em>Tip: Nezapomeň svému hráči v Inspectoru nastavit nahoře Tag na "Player".</em></p>`
    },
    { 
        id: 4, title: "Aktualizace skóre v UI", desc: "Propojení kódu s textem na obrazovce.", category: "UI", time: "15 min",
        content: `<h4 style="color: #fff; margin-top: 1rem;">Krok 1: UI Canvas</h4><p>Vytvoř si na scéně text přes <strong>UI -> Text - TextMeshPro</strong>.</p><h4 style="color: #fff; margin-top: 1rem;">Krok 2: Kód pro GameManager</h4><pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>using UnityEngine;\nusing TMPro; // Důležité: Přidáváme knihovnu pro TextMeshPro!\n\npublic class SpravceSkore : MonoBehaviour\n{\n    public int skore = 0;\n    public TextMeshProUGUI textSkore;\n\n    public void PridejBody(int pocet)\n    {\n        skore += pocet;\n        textSkore.text = "Skóre: " + skore;\n    }\n}</code></pre><p>V Inspectoru pak stačí tento tvůj UI text myší přetáhnout do prázdného políčka ve skriptu.</p>`
    }
];

let savedTutorials = JSON.parse(localStorage.getItem('ryvexo-tut-data'));
// Pokud už v paměti tutoriály jsou a je jich víc než 1 (už jsi něco přidával přes admin panel), načtou se. Jinak se hodí naše nová čtveřice.
let tutorialsData = (savedTutorials && savedTutorials.length > 1) ? savedTutorials : defaultTutorials;

let quizzesData = JSON.parse(localStorage.getItem('ryvexo-quiz-data')) || [
    { id: 1, title: "Klávesové zkratky v Unity", question: "Kterou klávesou rychle přepneš na Move Tool?", options: ["E", "W", "M", "T"], correctIndex: 1, xpReward: 100 }
];

const roadmapSteps = [
    { id: "step1", title: "Základy editoru", desc: "Zorientování se v Unity a C#." },
    { id: "step2", title: "Prototyp", desc: "Základní level design." },
    { id: "step3", title: "Ladění", desc: "Opravovat to, co nejde z předešlých lekcí." }
];

let communityPosts = JSON.parse(localStorage.getItem('ryvexo-posts')) || [];

const mockUsers = [
    { username: "KlaraKodi", xp: 2150 }, { username: "Tomas_Dev", xp: 1800 }
];

let currentUser = null;
const SECRET_CODE = "KROUZEK2026"; 

document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initTheme();
    initCourses();
    initTutorials();
    initRoadmap();
    initCommunity();
    initSearch();
    initMisc();
    initDashboard(); 
    initQuizzes();
    initLeaderboard();
});

window.refreshAllViews = function() {
    if(window.renderCourses) window.renderCourses();
    if(window.renderTutorials) window.renderTutorials();
    if(window.renderQuizzes) window.renderQuizzes();
    if(window.renderCommunityFeed) window.renderCommunityFeed();
    if(window.updateDashboardUI) window.updateDashboardUI();
    if(window.renderLeaderboard) window.renderLeaderboard();
};

// --- AUTENTIZACE A BRÁNA ---
function initAuth() {
    const authGate = document.getElementById('authGate');
    const appContent = document.getElementById('appContent');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const errorMsg = document.getElementById('loginError');

    const savedUser = localStorage.getItem('ryvexo-user');
    if (savedUser) { 
        currentUser = JSON.parse(savedUser); 
        showApp(); 
    } else {
        showGate();
    }

    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active')); 
            tab.classList.add('active');
            if (tab.dataset.tab === 'login') {
                loginForm.classList.remove('hidden'); registerForm.classList.add('hidden');
            } else {
                registerForm.classList.remove('hidden'); loginForm.classList.add('hidden');
            }
            errorMsg.classList.add('hidden');
        });
    });

    if(loginForm) loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const pass = document.getElementById('loginPassword').value;
        
        if (email.toLowerCase() === 'ucitel@ryvexo.cz') {
            currentUser = { username: 'Učitel', email: email, xp: 0, level: 1, role: 'teacher' };
            finalizeLogin();
            return;
        }

        const dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        const foundUser = dbUsers.find(u => u.email === email && u.password === pass);

        if (foundUser) {
            currentUser = { username: foundUser.username, email: foundUser.email, xp: foundUser.xp || 0, level: 1, role: 'student' };
            finalizeLogin();
        } else { 
            errorMsg.textContent = "Špatný e-mail nebo heslo. Máš už vytvořený účet?";
            errorMsg.classList.remove('hidden'); 
        }
    });

    if(registerForm) registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const user = document.getElementById('regUsername').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const pass = document.getElementById('regPassword').value;
        const secret = document.getElementById('regSecret').value.trim();

        if (secret !== SECRET_CODE) {
            errorMsg.innerHTML = "Nesprávný tajný kód! Zeptej se svého učitele.";
            errorMsg.classList.remove('hidden');
            return;
        }

        const dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        if (dbUsers.find(u => u.email === email)) {
            errorMsg.innerHTML = "Tento e-mail už je zaregistrovaný!";
            errorMsg.classList.remove('hidden');
            return;
        }

        dbUsers.push({ username: user, email: email, password: pass, xp: 0 });
        localStorage.setItem('ryvexo-users-db', JSON.stringify(dbUsers));

        currentUser = { username: user, email: email, xp: 0, level: 1, role: 'student' };
        finalizeLogin(); 
        showToast('Účet byl úspěšně vytvořen!');
    });

    function finalizeLogin() {
        localStorage.setItem('ryvexo-user', JSON.stringify(currentUser));
        showApp();
        showToast(`Vítej zpět, ${currentUser.username}!`);
    }

    function showApp() {
        authGate.classList.add('hidden');
        appContent.classList.remove('hidden');
        const container = document.getElementById('authContainer');
        const icon = currentUser.role === 'teacher' ? 'fa-graduation-cap' : 'fa-user-astronaut';
        container.innerHTML = `<div style="display:flex; align-items:center; gap: 15px;"><span style="font-weight:700; font-family:'Rajdhani',sans-serif; font-size:1.1rem; cursor:pointer;" onclick="navigateTo('dashboard')"><i class="fa-solid ${icon}" style="color:var(--accent-cyan)"></i> ${currentUser.username}</span><button class="icon-btn" onclick="logout()" aria-label="Odhlásit se"><i class="fa-solid fa-sign-out-alt"></i></button></div>`;
        
        refreshAllViews();
        if(window.animateCounters) animateCounters(); 
    }

    function showGate() {
        authGate.classList.remove('hidden');
        appContent.classList.add('hidden');
    }

    window.logout = function() {
        if (currentUser && currentUser.role === 'student') {
            const dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
            const userIndex = dbUsers.findIndex(u => u.email === currentUser.email);
            if (userIndex > -1) {
                dbUsers[userIndex].xp = currentUser.xp;
                localStorage.setItem('ryvexo-users-db', JSON.stringify(dbUsers));
            }
        }

        currentUser = null; 
        localStorage.removeItem('ryvexo-user');
        showGate();
        showToast('Byl jsi úspěšně odhlášen.');
    }
}

// --- NAVIGACE ---
function initNavigation() {
    const navbar = document.getElementById('navbar'); 
    const hamburger = document.getElementById('hamburgerMenu'); 
    const navLinks = document.getElementById('navLinks'); 
    const links = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => { 
        if (window.scrollY > 50) navbar.classList.add('scrolled'); 
        else navbar.classList.remove('scrolled'); 
    });

    hamburger.addEventListener('click', () => { 
        navLinks.classList.toggle('nav-active'); 
        hamburger.innerHTML = navLinks.classList.contains('nav-active') ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars-staggered"></i>'; 
    });

    window.navigateTo = function(sectionId) {
        document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active-section'));
        const targetSection = document.getElementById(sectionId); 
        if (targetSection) targetSection.classList.add('active-section');

        links.forEach(link => { 
            link.classList.remove('active'); 
            if(link.getAttribute('href') === `#${sectionId}`) link.classList.add('active'); 
        });

        if (navLinks.classList.contains('nav-active')) { 
            navLinks.classList.remove('nav-active'); 
            hamburger.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>'; 
        }
        window.scrollTo(0, 0);
    };

    links.forEach(link => { 
        link.addEventListener('click', (e) => { 
            e.preventDefault(); 
            navigateTo(link.getAttribute('href').substring(1)); 
        }); 
    });
}

// --- TÉMA ---
function initTheme() {
    const themeBtn = document.getElementById('themeToggleBtn'); 
    const htmlEl = document.documentElement;
    htmlEl.setAttribute('data-theme', localStorage.getItem('ryvexo-theme') || 'dark');
    themeBtn.innerHTML = htmlEl.getAttribute('data-theme') === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    
    themeBtn.addEventListener('click', () => {
        const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        htmlEl.setAttribute('data-theme', newTheme); 
        localStorage.setItem('ryvexo-theme', newTheme);
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
}

// --- VÝUKA (Kurzy & Lekce) ---
function initCourses() {
    const grid = document.getElementById('coursesGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    window.renderCourses = function(filter = 'all') {
        if(!grid) return;
        grid.innerHTML = '';
        const filtered = filter === 'all' ? coursesData : coursesData.filter(c => c.category === filter);
        filtered.forEach(course => {
            const diffClass = course.difficulty.toLowerCase().replace(' ', '.');
            const lessonCount = course.lessonItems ? course.lessonItems.length : course.lessons;
            grid.innerHTML += `
                <div class="card glass-card course-card">
                    <i class="fa-brands ${course.icon} course-icon"></i>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                    <div class="course-meta">
                        <span class="difficulty ${diffClass}">${course.difficulty.toUpperCase()}</span>
                        <span><i class="fa-solid fa-list-check"></i> ${lessonCount} Lekcí</span>
                    </div>
                    <button class="btn btn-outline btn-full" onclick="openCourse(${course.id})">
                        <i class="fa-solid fa-book-open"></i> Otevřít studium
                    </button>
                </div>`;
        });
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCourses(btn.dataset.filter);
        });
    });

    window.openCourse = function(courseId) {
        const course = coursesData.find(c => c.id === courseId);
        if (!course) return;

        document.getElementById('courseModalTitle').textContent = course.title;
        document.getElementById('courseModalBadge').textContent = course.difficulty.toUpperCase();

        const lessonsContainer = document.getElementById('courseLessonsList');
        lessonsContainer.innerHTML = '';

        if (course.lessonItems && course.lessonItems.length > 0) {
            course.lessonItems.forEach((item, index) => {
                lessonsContainer.innerHTML += `
                    <button class="lesson-btn ${index === 0 ? 'active' : ''}" onclick="loadLesson(${course.id}, ${index}, this)">
                        <i class="fa-regular fa-file-code"></i> ${item.title}
                    </button>
                `;
            });
            loadLesson(course.id, 0);
        } else {
            lessonsContainer.innerHTML = '<p style="color:var(--text-sec); font-size:0.9rem;">Lekce se připravují.</p>';
            document.getElementById('lessonTitle').textContent = "Obsah v přípravě";
            document.getElementById('lessonContent').innerHTML = "<p>Lekce budou brzy doplněny.</p>";
        }

        document.getElementById('courseModal').classList.add('show');
    };

    window.loadLesson = function(courseId, lessonIndex, clickedBtn = null) {
        const course = coursesData.find(c => c.id === courseId);
        if (!course || !course.lessonItems[lessonIndex]) return;

        const lesson = course.lessonItems[lessonIndex];
        document.getElementById('lessonTitle').textContent = lesson.title;
        document.getElementById('lessonContent').innerHTML = lesson.content;

        if (clickedBtn) {
            document.querySelectorAll('.lesson-btn').forEach(btn => btn.classList.remove('active'));
            clickedBtn.classList.add('active');
        }
    };

    document.getElementById('closeCourseModal')?.addEventListener('click', () => {
        document.getElementById('courseModal').classList.remove('show');
    });

    renderCourses();
}

// --- TUTORIÁLY ---
function initTutorials() {
    const list = document.getElementById('tutorialsList'); 
    const searchInput = document.getElementById('tutorialSearch');

    window.deleteTutorial = function(id) { 
        if(!confirm('Smazat tutoriál?')) return; 
        tutorialsData = tutorialsData.filter(t => t.id !== id); 
        localStorage.setItem('ryvexo-tut-data', JSON.stringify(tutorialsData)); 
        showToast('Smazáno.'); 
        renderTutorials(); 
    };

    window.renderTutorials = function(query = '') {
        if(!list) return; 
        list.innerHTML = ''; 
        const q = query.toLowerCase(); 
        const filtered = tutorialsData.filter(t => t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q));
        
        if (filtered.length === 0) { 
            list.innerHTML = '<p style="color:var(--text-sec); padding: 1rem;">Nenalezeno.</p>'; 
            return; 
        }

        const isTeacher = currentUser && currentUser.role === 'teacher';
        filtered.forEach(tut => {
            const deleteBtn = isTeacher ? `<button class="btn btn-outline" style="padding: 0.5rem 1rem; color: #f87171; border-color: rgba(248, 113, 113, 0.3); margin-left: 10px;" onclick="deleteTutorial(${tut.id})"><i class="fa-solid fa-trash"></i></button>` : '';
            list.innerHTML += `
                <div class="card glass-card list-item">
                    <div class="list-item-content">
                        <h3>${tut.title} <span class="tag">${tut.category}</span></h3>
                        <p>${tut.desc}</p>
                    </div>
                    <div style="display: flex; align-items: center;">
                        <span style="color:var(--text-sec); margin-right: 20px; font-size:0.9rem; font-weight: 600;"><i class="fa-regular fa-clock"></i> ${tut.time}</span>
                        <button class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem;" onclick="openTutorial(${tut.id})">Číst</button>
                        ${deleteBtn}
                    </div>
                </div>`;
        });
    };

    if(searchInput) searchInput.addEventListener('input', (e) => renderTutorials(e.target.value));
    renderTutorials();
}

window.openTutorial = function(id) { 
    const tut = tutorialsData.find(t => t.id === id); 
    if (tut) { 
        document.getElementById('tutorialModalTitle').textContent = tut.title; 
        document.getElementById('tutorialModalContent').innerHTML = tut.content; 
        document.getElementById('tutorialModal').classList.add('show'); 
    } 
};
document.getElementById('closeTutorialModal')?.addEventListener('click', () => { 
    document.getElementById('tutorialModal').classList.remove('show'); 
});


// --- KVÍZY ---
function initQuizzes() {
    const grid = document.getElementById('quizzesGrid');
    if (!grid) return;

    function getSolvedQuizzes() {
        if (!currentUser) return [];
        return JSON.parse(localStorage.getItem(`ryvexo-quizzes-${currentUser.username}`)) || [];
    }

    window.deleteQuiz = function(id) {
        if(!confirm('Smazat kvíz?')) return;
        quizzesData = quizzesData.filter(q => q.id !== id);
        localStorage.setItem('ryvexo-quiz-data', JSON.stringify(quizzesData));
        showToast('Smazáno.');
        renderQuizzes();
    };

    window.renderQuizzes = function() {
        grid.innerHTML = '';
        const isTeacher = currentUser && currentUser.role === 'teacher';
        const solvedQuizzes = getSolvedQuizzes();

        quizzesData.forEach((quiz) => {
            const isSolved = solvedQuizzes.includes(quiz.id);
            let optionsHTML = '';

            quiz.options.forEach((opt, oIndex) => {
                const isCorrectOpt = oIndex === quiz.correctIndex;
                const btnStyle = isSolved 
                    ? (isCorrectOpt ? 'background: rgba(74, 222, 128, 0.2); border-color: #4ade80; color: #4ade80; pointer-events: none;' : 'opacity: 0.3; pointer-events: none;') 
                    : '';
                optionsHTML += `<button class="btn btn-outline" style="width: 100%; text-align: left; justify-content: flex-start; margin-bottom: 8px; font-family: 'Inter', sans-serif; font-size: 0.95rem; text-transform: none; ${btnStyle}" onclick="answerQuiz(${quiz.id}, ${oIndex}, this)">${opt}</button>`;
            });

            const deleteBtn = isTeacher ? `<button class="icon-btn" style="width: 32px; height: 32px; font-size: 0.9rem; color: #f87171; border-color: rgba(248, 113, 113, 0.3); margin-left: 10px;" onclick="deleteQuiz(${quiz.id})"><i class="fa-solid fa-trash"></i></button>` : '';

            grid.innerHTML += `
                <div class="card glass-card" style="padding: 1.5rem; ${isSolved ? 'border-color: #4ade80;' : ''}">
                    <div style="display:flex; justify-content: space-between; align-items:flex-start; margin-bottom: 15px;">
                        <h3 style="font-family: 'Rajdhani', sans-serif; font-size: 1.4rem; color: ${isSolved ? '#4ade80' : 'var(--text-main)'};">
                            ${isSolved ? '<i class="fa-solid fa-check"></i> ' : ''}${quiz.title}
                        </h3>
                        <div style="display: flex; align-items: center;">
                            <span class="badge" style="margin-bottom:0; background: rgba(138, 43, 226, 0.1); border-color: var(--accent-purple); color: #d8b4fe;">+${quiz.xpReward} XP</span>
                            ${deleteBtn}
                        </div>
                    </div>
                    <p style="margin-bottom: 1.5rem; color: var(--text-sec);">${quiz.question}</p>
                    <div class="quiz-options">${optionsHTML}</div>
                </div>`;
        });
    };

    window.answerQuiz = function(quizId, selectedIndex, btnElement) {
        if(!currentUser) { showToast('Musíš se přihlásit!'); return; }

        const quiz = quizzesData.find(q => q.id === quizId);
        if (selectedIndex === quiz.correctIndex) {
            btnElement.style.background = 'rgba(74, 222, 128, 0.2)';
            btnElement.style.borderColor = '#4ade80';
            btnElement.style.color = '#4ade80';
            showToast(`Správně! +${quiz.xpReward} XP.`);

            const solved = getSolvedQuizzes();
            solved.push(quizId);
            localStorage.setItem(`ryvexo-quizzes-${currentUser.username}`, JSON.stringify(solved));

            currentUser.xp += quiz.xpReward;
            localStorage.setItem('ryvexo-user', JSON.stringify(currentUser));

            refreshAllViews();
            setTimeout(renderQuizzes, 800); 
        } else {
            btnElement.style.background = 'rgba(248, 113, 113, 0.2)';
            btnElement.style.borderColor = '#f87171';
            btnElement.style.color = '#f87171';
            btnElement.style.pointerEvents = 'none';
            showToast('Chyba. Zkus to znovu!');
        }
    };

    renderQuizzes();
}

// --- ROADMAPA ---
function initRoadmap() {
    const container = document.getElementById('roadmapTimeline'); 
    const fill = document.getElementById('roadmapFill'); 
    const pctText = document.getElementById('roadmapPercentage');
    let savedProgress = JSON.parse(localStorage.getItem('ryvexo-roadmap')) || {};

    function updateProgressBar() {
        const total = roadmapSteps.length; 
        const completed = Object.values(savedProgress).filter(v => v).length; 
        const pct = Math.round((completed / total) * 100);
        fill.style.width = `${pct}%`; 
        pctText.textContent = `${pct}%`;

        if (currentUser && pct > 0) { 
            currentUser.xp = completed * 300; 
            localStorage.setItem('ryvexo-user', JSON.stringify(currentUser)); 
            if(window.updateDashboardUI) window.updateDashboardUI(); 
        }
    }

    function renderRoadmap() {
        container.innerHTML = '';
        roadmapSteps.forEach(step => {
            const isDone = savedProgress[step.id] || false;
            container.innerHTML += `
                <div class="roadmap-step ${isDone ? 'completed' : ''}" data-id="${step.id}">
                    <div class="step-checkbox"><i class="fa-solid fa-check"></i></div>
                    <div class="step-content"><h3>${step.title}</h3><p style="color:var(--text-sec); font-size:0.95rem;">${step.desc}</p></div>
                </div>`;
        });

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
    setTimeout(updateProgressBar, 100); 
}

// --- KOMUNITA ---
function initCommunity() {
    const feed = document.getElementById('communityFeed'); 
    const formContainer = document.getElementById('postFormContainer');

    window.toggleLike = function(id) {
        if (!currentUser) return; 
        const post = communityPosts.find(p => p.id === id);
        if (post) { 
            post.isLiked = !post.isLiked; 
            post.likes += post.isLiked ? 1 : -1; 
            window.renderCommunityFeed(); 
        }
    };

    window.deletePost = function(id) { 
        if(!confirm('Smazat?')) return; 
        communityPosts = communityPosts.filter(p => p.id !== id); 
        showToast('Smazáno.'); 
        window.renderCommunityFeed(); 
    };

    window.renderCommunityFeed = function() {
        localStorage.setItem('ryvexo-posts', JSON.stringify(communityPosts)); 
        if(!feed) return; 
        feed.innerHTML = ''; 
        const isTeacher = currentUser && currentUser.role === 'teacher';

        [...communityPosts].reverse().forEach(post => {
            const likeIconClass = post.isLiked ? 'fa-solid' : 'fa-regular'; 
            const deleteBtn = isTeacher ? `<button class="action-btn" style="color: #f87171;" onclick="deletePost(${post.id})"><i class="fa-solid fa-trash"></i> Smazat</button>` : '';
            feed.innerHTML += `
                <div class="card glass-card post-card">
                    <div class="post-header"><span class="post-author"><i class="fa-solid fa-user-astronaut" style="color: var(--accent-cyan);"></i> ${post.author}</span><span>Právě teď</span></div>
                    <p class="post-text">${post.text}</p><span class="post-tag">${post.tag}</span>
                    <div class="post-actions">
                        <button class="action-btn ${post.isLiked ? 'liked' : ''}" onclick="toggleLike(${post.id})"><i class="${likeIconClass} fa-heart"></i> ${post.likes}</button>
                        <button class="action-btn" onclick="showToast('Odpovědi se připravují.')"><i class="fa-regular fa-comment"></i> Odpovědět</button>
                        ${deleteBtn}
                    </div>
                </div>`;
        });
    };

    document.getElementById('newPostBtn')?.addEventListener('click', () => { formContainer.classList.remove('hidden'); });
    document.getElementById('cancelPostBtn')?.addEventListener('click', () => { 
        formContainer.classList.add('hidden'); 
        document.getElementById('postContent').value = ''; 
        document.getElementById('postTag').value = ''; 
    });

    document.getElementById('submitPostBtn')?.addEventListener('click', () => {
        const contentInp = document.getElementById('postContent').value.trim(); 
        const tagInp = document.getElementById('postTag').value.trim();
        if (contentInp === '') return;
        communityPosts.push({ id: Date.now(), author: currentUser.username, text: contentInp, tag: tagInp || '#ryvexo', likes: 0, isLiked: false });
        window.renderCommunityFeed(); 
        formContainer.classList.add('hidden'); 
        document.getElementById('postContent').value = ''; 
        document.getElementById('postTag').value = ''; 
        showToast('Publikováno!');
    });

    window.renderCommunityFeed();
}

// --- ŽEBŘÍČEK A UŽIVATELÉ ---
function initLeaderboard() {
    const list = document.getElementById('leaderboardList');
    window.renderLeaderboard = function() {
        if(!list) return;
        
        // Načteme reálné studenty z databáze prohlížeče
        let dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        
        // Pokud je aktuálně přihlášený student, zajistíme, že má v DB aktuální XP
        if (currentUser && currentUser.role !== 'teacher') {
            const indexInDb = dbUsers.findIndex(u => u.email === currentUser.email);
            if (indexInDb > -1) {
                dbUsers[indexInDb].xp = currentUser.xp;
            } else {
                dbUsers.push({ username: currentUser.username, email: currentUser.email, xp: currentUser.xp });
            }
            localStorage.setItem('ryvexo-users-db', JSON.stringify(dbUsers));
        }

        // Seřadíme podle XP sestupně
        dbUsers.sort((a, b) => (b.xp || 0) - (a.xp || 0));
        list.innerHTML = '';

        if (dbUsers.length === 0) {
            list.innerHTML = '<p style="color: var(--text-sec); text-align: center; padding: 1rem;">Zatím žádní registrovaní studenti.</p>';
            return;
        }

        dbUsers.forEach((user, index) => {
            let rankStyle = "color: var(--text-sec); font-size: 1.2rem;"; 
            let medal = ""; 
            let bgStyle = "background: rgba(255,255,255,0.02);";
            
            if(index === 0) { rankStyle = "color: #fbbf24; font-size: 1.5rem;"; medal = '<i class="fa-solid fa-trophy" style="color: #fbbf24; margin-right: 10px;"></i>'; bgStyle = "background: rgba(251, 191, 36, 0.05); border-color: rgba(251, 191, 36, 0.3);"; }
            else if(index === 1) { rankStyle = "color: #94a3b8; font-size: 1.4rem;"; medal = '<i class="fa-solid fa-medal" style="color: #94a3b8; margin-right: 10px;"></i>'; }
            else if(index === 2) { rankStyle = "color: #b45309; font-size: 1.3rem;"; medal = '<i class="fa-solid fa-medal" style="color: #b45309; margin-right: 10px;"></i>'; }

            const isMe = currentUser && user.username === currentUser.username;
            if(isMe) bgStyle = "background: rgba(0, 210, 255, 0.1); border-color: var(--accent-cyan);";

            const userXp = user.xp || 0;
            const userLvl = Math.floor(userXp / 600) + 1;

            list.innerHTML += `
                <div class="list-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-radius: 6px; border: 1px solid var(--border); transition: transform 0.2s; ${bgStyle}">
                    <div style="display: flex; align-items: center; gap: 20px;">
                        <span style="font-family: 'Rajdhani', sans-serif; font-weight: 700; width: 30px; text-align: center; ${rankStyle}">${index + 1}.</span>
                        <div style="display: flex; flex-direction: column;">
                            <span style="font-family: 'Rajdhani', sans-serif; font-size: 1.3rem; font-weight: 700; color: ${isMe ? 'var(--accent-cyan)' : 'var(--text-main)'};">${medal}${user.username} ${isMe ? '<span style="font-size: 0.8rem; background: var(--accent-cyan); color: #000; padding: 2px 6px; border-radius: 4px; margin-left: 10px;">TY</span>' : ''}</span>
                            <span style="font-size: 0.85rem; color: var(--text-sec);">Úroveň ${userLvl}</span>
                        </div>
                    </div>
                    <div style="font-family: 'Rajdhani', sans-serif; font-size: 1.4rem; font-weight: 700; color: var(--accent-purple);">${userXp} <span style="font-size: 1rem; color: var(--text-sec);">XP</span></div>
                </div>`;
        });
    };
    renderLeaderboard();
}

// --- DASHBOARD & CMS ---
function initDashboard() {
    window.updateDashboardUI = function() {
        if (!currentUser) return;
        if (currentUser.role === 'teacher') {
            document.getElementById('studentDashboard')?.classList.add('hidden'); 
            document.getElementById('teacherDashboard')?.classList.remove('hidden');
            renderTeacherProjects();
        } else {
            document.getElementById('teacherDashboard')?.classList.add('hidden'); 
            document.getElementById('studentDashboard')?.classList.remove('hidden');
            document.getElementById('dashUsername').textContent = currentUser.username; 
            document.getElementById('dashXp').textContent = currentUser.xp;
            
            const lvl = Math.floor(currentUser.xp / 600) + 1; 
            document.getElementById('dashLevel').textContent = lvl;
            const nextLvlXp = lvl * 600; 
            const prevLvlXp = (lvl - 1) * 600; 
            let progressPct = ((currentUser.xp - prevLvlXp) / (nextLvlXp - prevLvlXp)) * 100;
            if (progressPct > 100) progressPct = 100; 
            document.getElementById('dashXpBar').style.width = `${progressPct}%`;
            renderStudentProjects();
        }
    };

    window.switchAdminTab = function(tab) {
        document.getElementById('adminFormTut').classList.add('hidden'); 
        document.getElementById('adminFormQuiz').classList.add('hidden');
        document.getElementById('tabTutBtn').classList.remove('active'); 
        document.getElementById('tabQuizBtn').classList.remove('active');
        if(tab === 'tut') { 
            document.getElementById('adminFormTut').classList.remove('hidden'); 
            document.getElementById('tabTutBtn').classList.add('active'); 
        } else { 
            document.getElementById('adminFormQuiz').classList.remove('hidden'); 
            document.getElementById('tabQuizBtn').classList.add('active'); 
        }
    };

    document.getElementById('saveTutBtn')?.addEventListener('click', () => {
        const title = document.getElementById('addTutTitle').value; 
        const category = document.getElementById('addTutCategory').value; 
        const time = document.getElementById('addTutTime').value; 
        const desc = document.getElementById('addTutDesc').value; 
        const content = document.getElementById('addTutContent').value;
        if(!title || !content) return;

        tutorialsData.push({ id: Date.now(), title, category: category || 'Obecné', time: time || '10 min', desc, content });
        localStorage.setItem('ryvexo-tut-data', JSON.stringify(tutorialsData)); 
        showToast('Publikováno!');
        if(window.renderTutorials) window.renderTutorials();
    });

    document.getElementById('saveQuizBtn')?.addEventListener('click', () => {
        const title = document.getElementById('addQuizTitle').value; 
        const question = document.getElementById('addQuizQuestion').value;
        const opts = [
            document.getElementById('addQuizOpt0').value, 
            document.getElementById('addQuizOpt1').value, 
            document.getElementById('addQuizOpt2').value, 
            document.getElementById('addQuizOpt3').value
        ];
        const correctIndex = parseInt(document.getElementById('addQuizCorrect').value) - 1; 
        const xpReward = parseInt(document.getElementById('addQuizXP').value) || 100;
        if(!title || !question || opts.includes('')) return;

        quizzesData.push({ id: Date.now(), title, question, options: opts, correctIndex, xpReward });
        localStorage.setItem('ryvexo-quiz-data', JSON.stringify(quizzesData)); 
        showToast('Publikováno!');
        if(window.renderQuizzes) window.renderQuizzes();
    });

    document.getElementById('submitProjectBtn')?.addEventListener('click', () => {
        const title = document.getElementById('projTitle').value.trim(); 
        const desc = document.getElementById('projDesc').value.trim();
        if(!title) return; 
        const projects = JSON.parse(localStorage.getItem('ryvexo-projects')) || [];
        projects.push({ id: Date.now(), student: currentUser.username, title, desc, date: new Date().toLocaleDateString('cs-CZ'), feedback: null });
        localStorage.setItem('ryvexo-projects', JSON.stringify(projects)); 
        showToast('Odesláno!'); 
        renderStudentProjects();
    });

    function renderStudentProjects() {
        const list = document.getElementById('studentProjectsList'); 
        if(!list) return;
        const projects = JSON.parse(localStorage.getItem('ryvexo-projects')) || [];
        const myProjects = projects.filter(p => p.student === currentUser.username);
        list.innerHTML = ''; 
        myProjects.reverse().forEach(p => {
            list.innerHTML += `
                <div style="background: rgba(255,255,255,0.02); padding: 1.2rem; border: 1px solid var(--border); border-radius: 4px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom: 8px;">
                        <strong style="font-size: 1.1rem;">${p.title}</strong>
                        <span style="color: var(--text-sec); font-size: 0.85rem;">${p.date}</span>
                    </div>
                    <p style="color: var(--text-sec); font-size: 0.95rem; margin-bottom: 12px;">${p.desc}</p>
                    ${p.feedback ? `<div style="background: rgba(0, 210, 255, 0.1); border-left: 3px solid var(--accent-cyan); padding: 10px; font-size: 0.9rem;"><strong style="color: var(--accent-cyan);">Hodnocení učitele:</strong><br>${p.feedback}</div>` : `<span style="color: #fbbf24; font-size: 0.85rem; font-weight: 600;"><i class="fa-solid fa-clock"></i> Čeká na hodnocení od učitele</span>`}
                </div>`;
        });
    }

    window.saveFeedback = function(id) {
        const feedbackText = document.getElementById(`feedback-${id}`).value; 
        const projects = JSON.parse(localStorage.getItem('ryvexo-projects')) || [];
        const projIndex = projects.findIndex(p => p.id === id);
        if(projIndex > -1) { 
            projects[projIndex].feedback = feedbackText; 
            localStorage.setItem('ryvexo-projects', JSON.stringify(projects)); 
            showToast('Hodnocení odesláno!'); 
            renderTeacherProjects(); 
        }
    };

    window.deleteProject = function(id) {
        if(!confirm('Smazat projekt?')) return; 
        let projects = JSON.parse(localStorage.getItem('ryvexo-projects')) || [];
        projects = projects.filter(p => p.id !== id); 
        localStorage.setItem('ryvexo-projects', JSON.stringify(projects)); 
        showToast('Smazáno.'); 
        renderTeacherProjects();
    };

    function renderTeacherProjects() {
        const list = document.getElementById('teacherProjectsList'); 
        if(!list) return;
        const projects = JSON.parse(localStorage.getItem('ryvexo-projects')) || []; 
        list.innerHTML = '';
        projects.reverse().forEach(p => {
            const isGraded = p.feedback && p.feedback.trim() !== ""; 
            const borderColor = isGraded ? 'var(--border)' : '#fbbf24';
            list.innerHTML += `
                <div class="card" style="background: rgba(0,0,0,0.2); padding: 1.5rem; border: 1px solid var(--border); border-left: 3px solid ${borderColor};">
                    <div style="display:flex; justify-content:space-between; margin-bottom: 10px;">
                        <h4 style="font-family: Rajdhani; font-size: 1.2rem;">${p.title} <span style="color: var(--accent-cyan); font-size: 0.9rem;">(${p.student})</span></h4>
                        <div style="display: flex; align-items: center; gap: 15px;">
                            <span style="color: var(--text-sec); font-size: 0.85rem;">${p.date}</span>
                            <button class="icon-btn" style="width: 30px; height: 30px; font-size: 0.85rem; color: #f87171; border-color: rgba(248, 113, 113, 0.3);" onclick="deleteProject(${p.id})"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                    <p style="color: var(--text-sec); margin-bottom: 15px;">${p.desc}</p>
                    <div style="margin-top: 10px;">
                        <textarea id="feedback-${p.id}" rows="2" style="width: 100%; background: rgba(0,0,0,0.3); border: 1px solid var(--border); color: var(--text-main); padding: 10px; border-radius: 4px; outline: none; margin-bottom: 10px; resize: vertical;">${p.feedback || ''}</textarea>
                        <button class="btn btn-outline" style="padding: 0.4rem 1rem; font-size: 0.85rem;" onclick="saveFeedback(${p.id})"><i class="fa-solid fa-check"></i> ${isGraded ? 'Upravit' : 'Odeslat'}</button>
                    </div>
                </div>`;
        });
    }

    // --- Správa uživatelů v učitelském panelu ---
    window.deleteStudentAccount = function(email) {
        if(!confirm(`Opravdu chceš smazat účet studenta (${email})?`)) return;
        let dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        dbUsers = dbUsers.filter(u => u.email !== email);
        localStorage.setItem('ryvexo-users-db', JSON.stringify(dbUsers));
        showToast('Účet studenta byl smazán.');
        renderTeacherUsers();
        if(window.renderLeaderboard) window.renderLeaderboard();
    };

    function renderTeacherUsers() {
        const list = document.getElementById('teacherUsersList');
        if(!list) return;
        let dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        
        if(dbUsers.length === 0) {
            list.innerHTML = '<p style="color: var(--text-sec);">Žádní registrovaní studenti.</p>';
            return;
        }

        list.innerHTML = '';
        dbUsers.forEach(u => {
            list.innerHTML += `
                <div style="background: rgba(0,0,0,0.2); padding: 1rem 1.2rem; border: 1px solid var(--border); border-radius: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <strong style="font-family: 'Rajdhani', sans-serif; font-size: 1.2rem; color: var(--text-main);">${u.username}</strong>
                        <span style="color: var(--text-sec); font-size: 0.9rem; margin-left: 15px;">${u.email}</span>
                        <span style="color: var(--accent-purple); font-size: 0.9rem; margin-left: 15px; font-weight: 650;">${u.xp || 0} XP</span>
                    </div>
                    <button class="btn btn-outline" style="padding: 0.4rem 0.8rem; font-size: 0.85rem; color: #f87171; border-color: rgba(248, 113, 113, 0.3);" onclick="deleteStudentAccount('${u.email}')">
                        <i class="fa-solid fa-user-xmark"></i> Smazat účet
                    </button>
                </div>`;
        });
    }

    // Zajistíme volání této funkce při zobrazení učitelského panelu
    const originalUpdateDash = window.updateDashboardUI;
    window.updateDashboardUI = function() {
        if(originalUpdateDash) originalUpdateDash();
        if(currentUser && currentUser.role === 'teacher') {
            renderTeacherUsers();
        }
    };
}

// --- GLOBÁLNÍ VYHLEDÁVÁNÍ ---
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

    searchBtn?.addEventListener('click', openSearch);
    searchModal?.addEventListener('click', (e) => {
        if (e.target === searchModal) closeSearch();
    });

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') { e.preventDefault(); openSearch(); }
        if (e.key === 'Escape' && searchModal?.classList.contains('show')) closeSearch();
    });

    searchInput?.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        if (q.length < 2) {
            results.innerHTML = '<div class="empty-state">Pokračuj ve psaní...</div>';
            return;
        }

        let hits = '';
        coursesData.filter(c => c.title.toLowerCase().includes(q)).forEach(c => {
            hits += `<div class="search-result-item" onclick="openCourse(${c.id}); document.getElementById('searchModal').classList.remove('show')"><h4>${c.title}</h4><span>Kurz</span></div>`;
        });
        tutorialsData.filter(t => t.title.toLowerCase().includes(q)).forEach(t => {
            hits += `<div class="search-result-item" onclick="openTutorial(${t.id}); document.getElementById('searchModal').classList.remove('show')"><h4>${t.title}</h4><span>Tutoriál</span></div>`;
        });

        results.innerHTML = hits === '' ? '<div class="empty-state">Nebyly nalezeny žádné výsledky.</div>' : hits;
    });
}

// --- DOPLŇKY (Kopírování & Počítadla) ---
function initMisc() {
    const copyBtn = document.getElementById('copyHeroCode');
    if(copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = `using UnityEngine;\n\npublic class PohybHrace : MonoBehaviour\n{\n    public float rychlost = 5f;\n    void Update()\n    {\n        float h = Input.GetAxis("Horizontal");\n        float v = Input.GetAxis("Vertical");\n        Vector3 pohyb = new Vector3(h, 0, v);\n        transform.Translate(pohyb * rychlost * Time.deltaTime);\n    }\n}`;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#00d2ff;"></i>';
                showToast('Kód zkopírován do schránky!');
                setTimeout(() => copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>', 2000);
            });
        });
    }

    window.showToast = function(msg) {
        const container = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fa-solid fa-circle-info" style="color:var(--accent-cyan); margin-right:10px;"></i> ${msg}`;
        container.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    };
}

function animateCounters() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        if (!target) return;
        stat.innerText = '0';
        const duration = 1200;
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
        requestAnimationFrame(updateCounter);
    });
}