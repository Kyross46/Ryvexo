/**
 * RYVEXO - Frontendová logika webové aplikace
 */

// --- DYNAMICKÁ DATA PRO VÝUKU ---
const defaultCourses = [
    { 
        id: 1, title: "Základy C#", category: "programming", desc: "Proměnné, podmínky, cykly a základy programátorské logiky pro Unity.", difficulty: "Začátečník", lessons: 5, icon: "fa-code",
        lessonItems: [
            { title: "1. Proměnné a datové typy", template: { cil: "Pochopit, co je to proměnná, a vytvořit 4 základní datové typy v Unity.", znalosti: "Základy psaní na klávesnici, vytvoření C# skriptu v Project okně.", postup: "<p>1. V okně Project klikni pravým -> Create -> C# Script.</p><p>2. Pojmenuj jej MojePromenne.</p><p>3. Dvojklikem skript otevři a připiš kód z bloku níže.</p>", kod: "public int zivoty = 100;\npublic float rychlost = 5.5f;\npublic string jmenoHrace = \"Ryvexo\";\npublic bool jeNazivu = true;", chyby: "Pokud napíšeš 'Float' s velkým písmenem, vyhodí to chybu. Nezapomeň na středník ; na konci řádku a 'f' u desetinných čísel!", ukol: "Vytvoř vlastní proměnnou typu int pro uložení počtu zlaťáků (např. 50).", kontrola: "Přetáhni skript na libovolný objekt. V Inspectoru bys měl vidět svá nová políčka!" } },
            { title: "2. Podmínky (if / else)", template: { cil: "Naučit hru rozhodovat se na základě aktuální situace (např. smrt hráče).", znalosti: "Znalost proměnných z minulé lekce.", postup: "<p>Do metody Update() vložíme kontrolu aktuálního stavu životů.</p>", kod: "if (zivoty <= 0) {\n    Debug.Log(\"Hráč zemřel!\");\n} else if (zivoty < 20) {\n    Debug.Log(\"Málo životů!\");\n} else {\n    Debug.Log(\"Vše OK.\");\n}", chyby: "U podmínek se pro porovnávání používá dvojité rovnítko '=='! Jedno rovnítko '=' slouží pouze k přiřazení hodnoty.", ukol: "Přidej podmínku, která napíše 'Máš max životů', pokud jsou životy přesně 100.", kontrola: "Měň v Inspectoru hodnotu životů za běhu hry a sleduj okno Console." } },
            { title: "3. Metody a Unity smyčka", template: { cil: "Pochopit rozdíl mezi Start() a Update().", znalosti: "Základní syntaxe C#.", postup: "<p>Unity volá některé metody automaticky. Start() se zavolá jednou na začátku, Update() se volá neustále dokola v každém snímku (frame).</p>", kod: "void Start() {\n    Debug.Log(\"Hra začala!\");\n}\n\nvoid Update() {\n    Debug.Log(\"Tohle se volá neustále!\");\n}", chyby: "Nikdy nedávej do metody Update() náročné výpočty nebo načítání souborů, zasekalo by to celou hru.", ukol: "Vytvoř vlastní metodu Pozdrav() a zavolej ji uvnitř metody Start().", kontrola: "Po spuštění hry by se měl v Consoli objevit tvůj pozdrav jen jednou." } },
            { title: "4. Cykly (For a While)", template: { cil: "Vykonat stejný kód vícekrát za sebou, aniž bychom ho museli přepisovat.", znalosti: "Proměnné a metody.", postup: "<p>Smyčka 'for' se skládá ze 3 částí: vytvoření proměnné (i=1), podmínky běhu (i<=5) a přičtení jedničky na konci kola (i++).</p>", kod: "for (int i = 1; i <= 5; i++) {\n    Debug.Log(\"Vytvářím nepřítele číslo: \" + i);\n}", chyby: "Pozor na zacyklení! Pokud nastavíš špatnou podmínku a cyklus nikdy neskončí, Unity zamrzne a budeš ho muset natvrdo vypnout.", ukol: "Napiš cyklus, který vypíše čísla od 10 pozpátku až k nule.", kontrola: "V Consoli se ti rychle za sebou vypíše pět hlášek o nepřátelích." } },
            { title: "5. Pole (Arrays)", template: { cil: "Uložit si více hodnot stejného typu pod jednu proměnnou (např. inventář zbraní).", znalosti: "Datové typy (string, int).", postup: "<p>Pole funguje jako polička. K jednotlivým položkám přistupujeme přes hranaté závorky s číslem pozice.</p>", kod: "public string[] zbrane = {\"Nůž\", \"Pistole\", \"Brokovnice\"};\n\nvoid Start() {\n    // V programování se vždy začíná počítat od nuly!\n    Debug.Log(\"Moje první zbraň je: \" + zbrane[0]); \n}", chyby: "Pokud zkusíš vypsat zbrane[3], dostaneš chybu 'Index out of bounds', protože naše pole má pozice jen 0, 1 a 2.", ukol: "Vytvoř pole celých čísel (int[]) a ulož do něj 3 různá skóre.", kontrola: "V Inspectoru uvidíš rozevírací seznam s názvy zbraní." } }
        ]
    },
    { 
        id: 2, title: "Orientace v Unity", category: "basics", desc: "Hierarchy, Inspector, Project okno a vizuální úpravy scény.", difficulty: "Začátečník", lessons: 5, icon: "fa-unity",
        lessonItems: [
            { title: "1. Klíčová okna editoru", template: { cil: "Zorientovat se v základním rozhraní Unity.", znalosti: "Založení nového 3D projektu.", postup: "<p>1. Hierarchy: Seznam objektů na scéně.<br>2. Scene: Tvůj pracovní prostor pro přesouvání věcí.<br>3. Inspector: Ukazuje detaily vybraného objektu.<br>4. Project: Tvé složky a soubory na disku.</p>", kod: "// Žádný kód, jen klikání v editoru!", chyby: "Nezavírej si okna omylem. Pokud si editor rozbiješ, nahoře vpravo klikni na 'Layout' a zvol 'Default'.", ukol: "Přesuň si okno Game vedle okna Scene, abys viděl hru i editor najednou.", kontrola: "Cítíš se v editoru pohodlněji a víš, kam sáhnout." } },
            { title: "2. GameObjects a Transform", template: { cil: "Pochopit základní kámen Unity - GameObject.", znalosti: "Orientace v oknech.", postup: "<p>Vše ve scéně (světlo, kamera, hráč) je GameObject. Každý má povinnou komponentu Transform, která určuje jeho pozici (Position), natočení (Rotation) a velikost (Scale).</p>", kod: "// Skrze kód můžeme Transform upravovat:\ntransform.position = new Vector3(0, 5, 0);", chyby: "Pokud se ti objekt ztratí v nekonečnu, klikni na něj pravým v Hierarchy a dej 'F' (Frame), nebo u Transform klikni na tři tečky a dej 'Reset'.", ukol: "Vytvoř Cube a nastav jí pozici přesně na X: 10, Y: 0, Z: 5.", kontrola: "Kostka se přesune přesně na zvolené souřadnice." } },
            { title: "3. Práce s Prefaby", template: { cil: "Ukládat si objekty jako šablony pro pozdější použití.", znalosti: "Tvorba GameObjectů.", postup: "<p>1. Vytvoř kostku a nabarvi ji.<br>2. Přetáhni ji myší z okna Hierarchy dolů do okna Project.<br>3. Ikonka v Hierarchy zmodrá = stal se z ní Prefab.</p>", kod: "// Přes kód pak můžeme Prefaby spawnovat:\npublic GameObject sablonaNepritele;\nInstantiate(sablonaNepritele, transform.position, Quaternion.identity);", chyby: "Pokud chceš Prefab upravit, nezapomeň ho buď upravit v Project okně, nebo u něj na scéně kliknout nahoře na 'Overrides -> Apply All'.", ukol: "Vytvoř z kostky Prefab jménem 'Mince' a rozkopíruj ji na scénu 5x.", kontrola: "Když upravíš barvu původního Prefabu, změní barvu i všech 5 mincí na scéně." } },
            { title: "4. Materiály a Textury", template: { cil: "Dát objektům barvu a fyzický vzhled.", znalosti: "Práce s Project oknem.", postup: "<p>1. V Project okně klikni pravým -> Create -> Material.<br>2. Pojmenuj ho 'CervenaBarva'.<br>3. V Inspectoru klikni na barvičku vedle 'Albedo' a vyber červenou.<br>4. Přetáhni kuličku materiálu na objekt ve scéně.</p>", kod: "// Barvu můžeme měnit i skriptem:\nGetComponent<Renderer>().material.color = Color.red;", chyby: "Nikdy neaplikuj textury (obrázky .png) rovnou na objekty, vždy je nejprve vlož do Materiálu do políčka Albedo.", ukol: "Vytvoř modrý materiál, který bude hodně kovový (Metallic na 1).", kontrola: "Objekt by se měl lesknout a odrážet světlo jako kov." } },
            { title: "5. Osvětlení (Lighting)", template: { cil: "Vytvořit atmosféru pomocí různých typů světel.", znalosti: "Transform manipulace.", postup: "<p>1. Directional Light = Slunce (Svítí všude, záleží jen na rotaci).<br>2. Point Light = Žárovka (Svítí do všech směrů kolem sebe).<br>3. Spot Light = Baterka (Svítí v kuželu).</p>", kod: "public Light mojeSvetlo;\nvoid Start() {\n    mojeSvetlo.color = Color.green;\n    mojeSvetlo.intensity = 5f;\n}", chyby: "Pokud dáš do scény příliš mnoho Point světel (žárovek) s vysokým dosahem, hra se začne sekat. Používej je s rozmyslem.", ukol: "Vytvoř tmavou místnost a dej doprostřed červené Point světlo simulující oheň.", kontrola: "Na scéně máš jasně ohraničený kužel nebo okruh světla." } }
        ]
    },
    { 
        id: 3, title: "Pohyb a Fyzika", category: "3d", desc: "Základní plošinovka, Rigidbody, kolize, triggery a raycasty.", difficulty: "Středně pokročilý", lessons: 5, icon: "fa-cube",
        lessonItems: [
            { title: "1. Rigidbody: Fyzikální engine", template: { cil: "Zapnout na objektech gravitaci a reálné fyzikální chování.", znalosti: "C# skripty.", postup: "<p>Označ objekt a v Inspectoru klikni na Add Component -> Rigidbody. Objekt nyní bude padat a reagovat na nárazy.</p>", kod: "Rigidbody rb;\nvoid Start() { rb = GetComponent<Rigidbody>(); }\nvoid Update() {\n    if (Input.GetKeyDown(KeyCode.Space)) {\n        rb.AddForce(Vector3.up * 5f, ForceMode.Impulse);\n    }\n}", chyby: "Nikdy nepohybuj objektem s Rigidbody pomocí transform.Translate. Fyzika by se s kódem prala. Používej rb.AddForce nebo rb.velocity.", ukol: "Uprav kód tak, aby postava skočila po zmáčknutí klávesy W.", kontrola: "Kostka spadne na zem a po zmáčknutí mezerníku vyskočí." } },
            { title: "2. Kolize vs Triggery", template: { cil: "Rozeznat rozdíl mezi tvrdým nárazem a projitím zónou.", znalosti: "Znalost Colliderů.", postup: "<p>Tvrdá zeď = Běžný Collider. Vyvolává událost OnCollisionEnter.<br>Sběratelská mince = Zaškrtnuté 'Is Trigger'. Vyvolává událost OnTriggerEnter.</p>", kod: "void OnCollisionEnter(Collision col) {\n    Debug.Log(\"Narazil jsem do zdi!\");\n}\n\nvoid OnTriggerEnter(Collider other) {\n    Debug.Log(\"Prošel jsem zónou!\");\n}", chyby: "Aby detekce kolizí fungovala, alespoň JEDEN z objektů musí mít přidanou komponentu Rigidbody (typicky to má hráč).", ukol: "Dej na scénu dvě kostky - z jedné udělej Trigger a z druhé tvrdou zeď.", kontrola: "Při projití Triggerem hráč neucítí žádný náraz, ale událost se zapíše do Console." } },
            { title: "3. Sbírání mincí (Destroy)", template: { cil: "Naprogramovat smazání objektu ze scény po jeho sebrání.", znalosti: "Triggery a tagy.", postup: "<p>1. Hráči nastav nahoře v Inspectoru Tag na 'Player'.<br>2. Minci zaškrtni Is Trigger a dej jí tento skript.</p>", kod: "void OnTriggerEnter(Collider other) {\n    if (other.CompareTag(\"Player\")) {\n        Debug.Log(\"Sebral jsi minci!\");\n        Destroy(gameObject);\n    }\n}", chyby: "Příkaz Destroy() zničí objekt nenávratně. Pokud zničíš 'other.gameObject', smazal bys hráče místo mince!", ukol: "Přidej zvukový efekt těsně před tím, než se objekt zničí.", kontrola: "Když hráč vejde do mince, mince okamžitě zmizí." } },
            { title: "4. Fyzikální materiály", template: { cil: "Naučit objekty skákat a klouzat.", znalosti: "Vytváření materiálů.", postup: "<p>V okně Project vytvoř Create -> Physic Material. Nastav Bounciness (odrazivost) na 1. Přetáhni tento materiál do pole 'Material' v komponentě Collider u daného objektu.</p>", kod: "// Fyzikální vlastnosti jdou měnit i v Inspectoru bez kódu.", chyby: "Plete se to s klasickým (barevným) materiálem. Physic Material mění pouze chování (tření, odraz), nikoliv vzhled!", ukol: "Vytvoř na scéně ledovou plochu (Friction nastav na 0).", kontrola: "Když hráč vjede na led, bude chvíli klouzat nezastavitelně dopředu." } },
            { title: "5. Raycast (Neviditelný paprsek)", template: { cil: "Naučit se vystřelit neviditelný laser pro střelbu ze zbraně.", znalosti: "Základy matematiky (Vektory).", postup: "<p>Raycast je laser, který letí z bodu A po směru B. Pokud něco trefí, vrátí nám o tom objektu kompletní informace (RaycastHit).</p>", kod: "RaycastHit zasah;\nif (Physics.Raycast(transform.position, transform.forward, out zasah, 100f)) {\n    Debug.Log(\"Trefil jsem: \" + zasah.collider.name);\n}", chyby: "Raycast neprojde přes objekty s Colliderem. Trefí vždy jen tu první zeď, kterou potká.", ukol: "Pokud Raycast trefí objekt s tagem 'Nepritel', zavolej na něm Destroy.", kontrola: "Při zmáčknutí střelby se do Console vypíše jméno trefeného objektu." } }
        ]
    },
    { 
        id: 4, title: "Tvorba UI a Menu", category: "basics", desc: "Práce s Canvasem, texty, tlačítka a přepínání herních scén.", difficulty: "Středně pokročilý", lessons: 3, icon: "fa-desktop",
        lessonItems: [
            { title: "1. Canvas a Text", template: { cil: "Zobrazit na obrazovce text, který nezávisí na 3D kameře.", znalosti: "Vytváření UI objektů.", postup: "<p>1. V Hierarchy dej pravým -> UI -> Text - TextMeshPro.<br>2. Unity vytvoří Canvas (plátno).<br>3. Uprav text v Inspectoru.</p>", kod: "using TMPro;\npublic TextMeshProUGUI textZivotu;\n\nvoid Update() {\n    textZivotu.text = \"Životy: 100\";\n}", chyby: "Pokud používáš TextMeshPro, vždy musíš nahoře ve skriptu přidat 'using TMPro;', jinak Unity text nerozpozná.", ukol: "Nastav správně Kotvy (Anchors) v Inspectoru, aby byl text vždy v pravém horním rohu.", kontrola: "Text drží na svém místě i když zmenšíš velikost okna Game." } },
            { title: "2. Tlačítka (Buttons)", template: { cil: "Vytvořit klikací tlačítko pro interakci hráče.", znalosti: "Propojení událostí.", postup: "<p>1. Vytvoř UI -> Button.<br>2. V Inspectoru najdi sekci 'On Click ()'.<br>3. Klikni na '+', přetáhni tam objekt se skriptem a vyber metodu k zavolání.</p>", kod: "public void MojeTlacitkoKlik() {\n    Debug.Log(\"Bylo kliknuto!\");\n}", chyby: "Metoda, kterou chceš z tlačítka zavolat, MUSÍ mít před sebou slůvko 'public', jinak ji v menu Unity neuvidíš.", ukol: "Vytvoř tlačítko, které po kliknutí vynuluje skóre hráče.", kontrola: "Při kliknutí myší ve hře tlačítko změní barvu a provede akci." } },
            { title: "3. Přepínání levelů", template: { cil: "Dokázat přepnout z Hlavního Menu do Hry.", znalosti: "Práce s Build Settings.", postup: "<p>Nejprve musíš přidat všechny své scény do menu File -> Build Settings. Následně pomocí SceneManagera nahrajeme novou scénu.</p>", kod: "using UnityEngine.SceneManagement;\n\npublic void HratHru() {\n    SceneManager.LoadScene(\"Level1\"); // Podle názvu\n}", chyby: "Nezapomeň nahoru do skriptu přidat 'using UnityEngine.SceneManagement;'. Pokud scéna není v Build Settings, hra spadne.", ukol: "Udělej metodu pro tlačítko Konec, která zavolá Application.Quit();", kontrola: "Kliknutí na tlačítko START okamžitě načte novou 3D scénu." } }
        ]
    },
    { 
        id: 5, title: "Pokročilé C# a Logika", category: "programming", desc: "Dynamické Listy, vlastní Třídy a časování pomocí Coroutines.", difficulty: "Středně pokročilý", lessons: 3, icon: "fa-laptop-code",
        lessonItems: [
            { title: "1. Listy (Lists)", template: { cil: "Vytvořit dynamický seznam, který může růst a klesat (např. Inventář).", znalosti: "Znalost základních polí (Arrays).", postup: "<p>Listy (Kolekce) jsou chytřejší pole. Můžeme do nich snadno za běhu přidávat data pomocí .Add() a mazat přes .Remove().</p>", kod: "using System.Collections.Generic;\npublic List<string> inventar = new List<string>();\n\nvoid Start() {\n    inventar.Add(\"Klíč\");\n    inventar.Remove(\"Klíč\");\n}", chyby: "Musíš nahoře přidat 'using System.Collections.Generic;'. K prvkům v Listu se přistupuje stejně jako k poli: inventar[0].", ukol: "Zkus zjistit, kolik věcí je aktuálně v inventáři, pomocí inventar.Count.", kontrola: "V Inspectoru se ti objeví rozbalovací seznam, do kterého můžeš za běhu hry libovolně přidávat další řádky." } },
            { title: "2. Vlastní Třídy (OOP)", template: { cil: "Sdružovat data do vlastních logických celků.", znalosti: "Znalost datových typů.", postup: "<p>Pokud chceme vytvořit zbraň, potřebujeme znát její název, sílu i její 3D model. Místo 3 různých proměnných vytvoříme jednu vlastní Třídu.</p>", kod: "[System.Serializable]\npublic class Zbran {\n    public string jmeno;\n    public int poskozeni;\n    public GameObject model;\n}", chyby: "Abychom tuhle novou třídu viděli v Unity Inspectoru, musíme nad ni povinně napsat magické slůvko [System.Serializable]!", ukol: "Vytvoř si List složený přímo z těchto tvých nových 'Zbran' tříd.", kontrola: "Kód bude mnohem čitelnější a lépe organizovaný." } },
            { title: "3. Časování (Coroutines)", template: { cil: "Pozastavit kód na pár vteřin bez zaseknutí hry.", znalosti: "Psaní metod.", postup: "<p>Klasická metoda proběhne celá za milisekundu. Pokud chceme čekat (přebíjení zbraně, zobrazení Game Over), musíme použít Coroutine.</p>", kod: "void Start() {\n    StartCoroutine(CekejASmaz());\n}\n\nIEnumerator CekejASmaz() {\n    yield return new WaitForSeconds(3f); // Hra se nezasekne\n    Destroy(gameObject);\n}", chyby: "Coroutine NEJDE zavolat běžným způsobem jako Metoda(). Musí se volat skrze speciální příkaz StartCoroutine().", ukol: "Napiš Coroutine, která po sebrání poškození problikne hráče načerveno na 0.5 vteřiny.", kontrola: "Kód uvnitř Coroutiny se opravdu vykoná až se zpožděním 3 vteřin, mezitím se můžeš normálně hýbat." } }
        ]
    },
    { 
        id: 6, title: "Správa hry (GameManager)", category: "programming", desc: "Architektura hry, pauzování a správa herních stavů.", difficulty: "Středně pokročilý", lessons: 3, icon: "fa-chess-board",
        lessonItems: [
            { title: "1. Vzor Singleton", template: { cil: "Vytvořit jednoho centrálního manažera pro celou hru.", znalosti: "Objektové programování.", postup: "<p>GameManager drží skóre a stavy. Chceme, aby se k němu jakýkoliv jiný skript dostal okamžitě bez hledání přes GetComponent.</p>", kod: "public static GameManager instance;\n\nvoid Awake() {\n    if (instance == null) {\n        instance = this;\n    }\n}", chyby: "Static znamená, že proměnná existuje v paměti jen a pouze jednou a sdílí se napříč všemi skripty.", ukol: "Z jiného skriptu (třeba od mince) zavolej 'GameManager.instance.skore += 10;'", kontrola: "Ostatní skripty si mohou s GameManagerem ihned povídat." } },
            { title: "2. Herní stavy (Enums)", template: { cil: "Řídit logiku podle toho, co se zrovna ve hře děje.", znalosti: "Proměnné.", postup: "<p>Pomocí výčtového typu (Enum) si jasně nadefinujeme, v jaké fázi se hra nachází, místo používání nepřehledných čísel nebo stringů.</p>", kod: "public enum StavHry { Menu, HrajeSe, Pauza, Konec }\npublic StavHry aktualniStav = StavHry.HrajeSe;\n\nvoid Update() {\n    if(aktualniStav != StavHry.HrajeSe) return;\n}", chyby: "Díky if(stav != HrajeSe) return; můžeme zablokovat střelbu nebo pohyb, pokud je hra zrovna pauznutá.", ukol: "Přidej do Enumu nový stav 'Cutscene' (ukázka).", kontrola: "V Inspectoru se ti objeví krásné rozevírací menu se stavy." } },
            { title: "3. Pauza a Game Over", template: { cil: "Zastavit čas ve hře a zobrazit menu.", znalosti: "Práce s UI panely.", postup: "<p>Hru pozastavíme úpravou toku času pomocí proměnné Time.timeScale. Na hodnotě 0 se všechna fyzika a pohyb zastaví.</p>", kod: "public GameObject pauzaMenu;\n\npublic void ZapniPauzu() {\n    Time.timeScale = 0f;\n    pauzaMenu.SetActive(true);\n}\n\npublic void VypniPauzu() {\n    Time.timeScale = 1f;\n    pauzaMenu.SetActive(false);\n}", chyby: "Při Time.timeScale = 0 se nevolá klasický Time.deltaTime. Menu ale musí dál fungovat!", ukol: "Naprogramuj tlačítko 'Pokračovat', které zavolá VypniPauzu().", kontrola: "Po zapnutí pauzy nepřátelé i padající předměty doslova zamrznou ve vzduchu." } }
        ]
    },
    { 
        id: 7, title: "Animace a Postavy", category: "3d", desc: "Import 3D modelů z Mixama, příprava kostry a plynulé Blend Trees.", difficulty: "Středně pokročilý", lessons: 4, icon: "fa-person-running",
        lessonItems: [
            { title: "1. Modely z Mixamo", template: { cil: "Stáhnout a naimportovat profesionální 3D postavu.", znalosti: "Základy s průzkumníkem souborů.", postup: "<p>Jdi na web Mixamo.com (od Adobe), zdarma si najdi postavu a stáhni ji jako formát FBX for Unity. Totéž udělej pro animace (Walking, Running).</p>", kod: "// Žádný kód, jen import do složek.", chyby: "Při stahování animací bez postavy zvol volbu 'Without Skin', ušetříš hromadu místa na disku.", ukol: "Vlož FBX postavy do prázdné scény.", kontrola: "Postava stojí na place v typické T-póze." } },
            { title: "2. Nastavení Rigu", template: { cil: "Naučit Unity, že náš model je člověk.", znalosti: "Znalost okna Inspector.", postup: "<p>Aby šlo animace sdílet mezi různými modely, musíme v Inspectoru u modelu přejít do záložky 'Rig' a nastavit Animation Type na 'Humanoid'.</p>", kod: "// Nastavuje se v importéru Unity.", chyby: "Pokud Rig nenastavíš na Humanoid, animace běhu z jednoho modelu nebude fungovat na druhém modelu.", ukol: "Klikni na Apply a zkontroluj, že Unity u modelu vytvořilo malou ikonku kostry (Avatar).", kontrola: "V modelu se ukáže šedá ikonka 'Avatara'." } },
            { title: "3. Animator Controller", template: { cil: "Poskládat logiku střídání animací.", znalosti: "Práce s okny.", postup: "<p>Vytvoř Animator Controller, otevři ho. Uvidíš 'pavouka'. Přetáhni tam animace Idle a Walk. Klikni pravým na Idle -> Make Transition a táhni šipku na Walk.</p>", kod: "Animator anim;\nvoid Start() { anim = GetComponent<Animator>(); }\n\nvoid Update() {\n    if(Input.GetKey(KeyCode.W)) anim.SetBool(\"isWalking\", true);\n    else anim.SetBool(\"isWalking\", false);\n}", chyby: "Nezapomeň nahoře vlevo v okně Animator založit parametr (klikni na + -> Bool) a pojmenovat ho 'isWalking'.", ukol: "Přiřaď tento parametr do podmínky u tvé přechodové šipky (Transition).", kontrola: "Jakmile zmáčkneš W, postava se přestane nudit a plynule přejde do chůze." } },
            { title: "4. Blend Trees", template: { cil: "Vytvořit naprosto plynulý přechod z chůze rovnou do sprintu.", znalosti: "Práce s Animatorem.", postup: "<p>Místo složitých šipek vytvoříme v Animatoru 'Create State -> From New Blend Tree'. Dvojklikem do něj vlezeme a přidáme naše animace (Idle, Walk, Run).</p>", kod: "// Blend tree si sám vypočítá prolnutí podle desetinné hodnoty:\nanim.SetFloat(\"rychlost\", rb.velocity.magnitude);", chyby: "Ve vlastnostech Blend Tree musíš odškrtnout 'Automate Thresholds' a nastavit si rychlosti ručně (např. Walk na 2 a Run na 5).", ukol: "Napoj Float rychlosti hráče na osu Blend Tree.", kontrola: "Postava zrychluje postupně, jako kdybys přidával plyn u auta, animace neškube." } }
        ]
    },
    { 
        id: 8, title: "Profesionální Kamera", category: "3d", desc: "Sledování hráče s balíčkem Cinemachine a vizuální zpětná vazba.", difficulty: "Středně pokročilý", lessons: 3, icon: "fa-video",
        lessonItems: [
            { title: "1. Základy Cinemachine", template: { cil: "Zajistit, aby kamera sledovala hráče měkce jako ve filmech.", znalosti: "Znalost Package Manageru.", postup: "<p>Z Package Manageru stáhneme Cinemachine. Nahoře v menu dáme Cinemachine -> Create Virtual Camera. Přetáhneme hráče do chlívečků 'Follow' a 'Look At'.</p>", kod: "// Cinemachine se o veškerý kód postará sám!", chyby: "Nesnaž se u hlavní kamery (Main Camera) měnit ručně transform pozici. Jakmile používáš Cinemachine, převezme nad ní kontrolu.", ukol: "Změň v nastavení Virtual Camery 'Body' na 'Framing Transposer'.", kontrola: "Když se pohneš, kamera plynule doplachtí za tebou." } },
            { title: "2. Mrtvá zóna (Dead Zone)", template: { cil: "Uklidnit kameru, aby při každém malém kroku netrhala obrazem.", znalosti: "Cinemachine nastavení.", postup: "<p>V nastavení 'Framing Transposer' najdeš modrý a červený obdélník (Dead Zone). Pokud hráč chodí uvnitř tohoto středu, kamera stojí. Pohne se, až ho začne opouštět.</p>", kod: "// Vizuální ladění v editoru", chyby: "Pokud nevidíš barevné zóny v okénku Game, ujisti se, že máš vybranou Virtual Cameru v Hierarchy a zapnuté Gizmos.", ukol: "Zvětši šířku Dead Zone na 0.5.", kontrola: "Kamera ti dovolí mírně popoběhnout, než začne zabírat plynulý posun." } },
            { title: "3. Camera Shake (Impulse)", template: { cil: "Přidat hře šťávu dynamickým otřesem při nárazu.", znalosti: "Cinemachine moduly.", postup: "<p>Přidej hráči komponentu 'Cinemachine Impulse Source'. Ve Virtual Camera přidej do rozšíření 'Cinemachine Impulse Listener'.</p>", kod: "using Cinemachine;\nCinemachineImpulseSource impuls;\n\nvoid Start() { impuls = GetComponent<CinemachineImpulseSource>(); }\n\nvoid OnCollisionEnter() {\n    impuls.GenerateImpulse();\n}", chyby: "Musíš v Impulse Source vybrat 'Raw Signal' křivku (např. 6D Shake z presetů), jinak nebude mít jak zatřást.", ukol: "Zavolej GenerateImpulse() ve chvíli, kdy hráč vystřelí zbraň.", kontrola: "Při výstřelu nebo nárazu to s kamerou drncne." } }
        ]
    },
    { 
        id: 9, title: "Umělá Inteligence (AI)", category: "programming", desc: "Pohyb nepřátel pomocí NavMesh, hledání cesty a detekce hráče.", difficulty: "Pokročilý", lessons: 4, icon: "fa-brain",
        lessonItems: [
            { title: "1. Generování NavMesh", template: { cil: "Naučit Unity rozeznat, kde jsou podlahy a kde překážky.", znalosti: "Práce s okny (Navigation).", postup: "<p>Všechny podlahy a zdi v Hierarchy musíš nahoře zaškrtnout jako 'Static'. Pak jdi do Window -> AI -> Navigation a klikni na 'Bake'.</p>", kod: "// Po kliknutí na Bake se scéna pokryje modrou plochou.", chyby: "Pokud podlaha nezmodrá, pravděpodobně není zaškrtnutá jako Navigation Static nebo je v editoru schované zobrazování NavMeshe.", ukol: "Změň velikost 'Agent Radius', aby AI nechodilo moc blízko stěnám.", kontrola: "Na podlaze uvidíš krásnou modrou chodící zónu." } },
            { title: "2. NavMesh Agent", template: { cil: "Předat nepříteli chytrou navigaci.", znalosti: "Znalost knihoven (using UnityEngine.AI).", postup: "<p>Přidej na nepřítele komponentu 'NavMesh Agent'. Ta se postará o vyhýbání se překážkám. Skrze kód mu pak zadáme jen GPS cíl.</p>", kod: "using UnityEngine.AI;\nNavMeshAgent agent;\npublic Transform hrac;\n\nvoid Start() { agent = GetComponent<NavMeshAgent>(); }\n\nvoid Update() {\n    agent.SetDestination(hrac.position);\n}", chyby: "Agent nebude fungovat na objektu, který nemá vygenerovaný modrý NavMesh pod nohama.", ukol: "Zkus v Inspectoru Agenta snížit jeho rychlost (Speed).", kontrola: "Když spustíš hru a uhneš za zeď, nepřítel tu zeď oběhne, aby se k tobě dostal." } },
            { title: "3. Patrola (Hlídkování)", template: { cil: "Naučit AI strážit konkrétní cestu místo bezhlavého běhání za hráčem.", znalosti: "Pole (Arrays) a Vector3.Distance.", postup: "<p>Vytvoříme si pole prázdných GameObjektů jako 'checkpointy'. Když Agent dojde k prvnímu, změníme mu cíl na ten druhý.</p>", kod: "public Transform[] bodyTrasy;\nint indexCile = 0;\n\nvoid Update() {\n    if (Vector3.Distance(transform.position, bodyTrasy[indexCile].position) < 1f) {\n        indexCile = (indexCile + 1) % bodyTrasy.Length;\n    }\n    agent.SetDestination(bodyTrasy[indexCile].position);\n}", chyby: "Dej pozor, ať body trasy leží přesně na modrém NavMeshi, jinak tam Agent nikdy nedojde.", ukol: "Rozmísti do rohů místnosti 4 body.", kontrola: "Nepřítel začne neustále pochodovat v obdélníku z rohu do rohu." } },
            { title: "4. Zorné pole (Field of View)", template: { cil: "Aby AI útočilo, jen když tě reálně uvidí nebo uslyší.", znalosti: "Matematika vzdáleností.", postup: "<p>Budeme kontrolovat vzdálenost mezi hráčem a nepřítelem. Pokud klesne pod 10 metrů, AI změní cíl z patrolování na tebe.</p>", kod: "float vzdalenost = Vector3.Distance(transform.position, hrac.position);\nif (vzdalenost < 10f) {\n    agent.SetDestination(hrac.position); // Jde po hráči\n} else {\n    // Běžná patrola\n}", chyby: "Tohle je jen kruhová vzdálenost (zombie uši). Pro opravdový 'zrak' bychom museli navíc použít Raycast a zkontrolovat, zda mu nepřekáží zeď.", ukol: "Přidej barvu (Color.red) nepříteli, jakmile hráče spatří.", kontrola: "Nepřítel si tě nevšímá, ale když přijdeš moc blízko, zčervená a začne sprintovat za tebou." } }
        ]
    },
    { 
        id: 10, title: "Systém Inventáře", category: "basics", desc: "Architektura inventáře přes Scriptable Objects a napojení na UI.", difficulty: "Pokročilý", lessons: 3, icon: "fa-briefcase",
        lessonItems: [
            { title: "1. Tvorba Scriptable Objects", template: { cil: "Vytvořit si snadné datové šablony pro předměty, co nezatěžují RAM.", znalosti: "Základy tříd.", postup: "<p>ScriptableObject je speciální skript, který nepotřebuje ležet na scéně. Vytvoří nám v Project okně soubor s daty.</p>", kod: "using UnityEngine;\n\n[CreateAssetMenu(fileName = \"NovyPredmet\", menuName = \"Inventar/Predmet\")]\npublic class Predmet : ScriptableObject {\n    public string jmeno;\n    public Sprite ikonka;\n}", chyby: "Skript nesmí dědit z MonoBehaviour, ale z 'ScriptableObject'. Jen tak se ti objeví v Create menu.", ukol: "Klikni v Project okně pravým tlačítkem a založ nový 'Předmět' jménem Elixír.", kontrola: "Máš v Project okně čistá data o předmětu, aniž bys musel plácat kostky do 3D světa." } },
            { title: "2. Sebrání do Listu", template: { cil: "Fyzicky sebrat 3D objekt ze země a přidat jeho data do inventáře hráče.", znalosti: "Triggery.", postup: "<p>Fyzický objekt Mince na zemi bude mít referenci na náš ScriptableObject. Při dotyku ho předá hráči.</p>", kod: "// Skript na minci\npublic Predmet dataPredmetu;\n\nvoid OnTriggerEnter(Collider other) {\n    other.GetComponent<HracInventar>().Pridaj(dataPredmetu);\n    Destroy(gameObject);\n}", chyby: "Nezapomeň skriptu HracInventar na hráči napsat veřejnou metodu Pridaj(Predmet p), jinak to hodí chybu 'Method not found'.", ukol: "Vyzkoušej si do pole dataPredmetu v Inspectoru přetáhnout tvůj Elixír.", kontrola: "Když hráč vejde do mince, v jeho skriptu v Listu se objeví nový řádek s daty Elixíru." } },
            { title: "3. Překreslení UI", template: { cil: "Zobrazit naklikaný list zbraní do čtverečků na obrazovce.", znalosti: "Instantiate UI prvků.", postup: "<p>V Canvasu vytvoříme panel s 'Grid Layout Group'. Uvnitř vytvoříme jeden UI Image jako šablonu slotu.</p>", kod: "public Transform gridPanel;\npublic GameObject prefabSlotu;\n\n// Projdeme cely list inventare\nforeach(Predmet p in inventar) {\n    GameObject novySlot = Instantiate(prefabSlotu, gridPanel);\n    novySlot.GetComponent<Image>().sprite = p.ikonka;\n}", chyby: "Vždy před překreslením celého inventáře nezapomeň nejprve zničit staré ikony (jinak by se ti seznam při každém sebrání duplikoval).", ukol: "Pomocí cyklu foreach přiřaď ikonky.", kontrola: "Kdykoliv sebereš věc ze země, v rohu obrazovky se instantně nakreslí její ikonka." } }
        ]
    },
    { 
        id: 11, title: "Grafika a Efekty (URP)", category: "3d", desc: "Vylepšení vzhledu hry pomocí částic a Post-Processingu.", difficulty: "Pokročilý", lessons: 3, icon: "fa-wand-magic-sparkles",
        lessonItems: [
            { title: "1. Global Volume (Filtry)", template: { cil: "Vyšperkovat barvy a záření světel jako z Hollywoodu.", znalosti: "Znalost URP (Universal Render Pipeline).", postup: "<p>Pokud je tvůj projekt v URP, klikni pravým do Hierarchy -> Volume -> Global Volume. Klikni na 'New Profile' a dole na 'Add Override'.</p>", kod: "// Zapíná se bez kódu přímo v Inspectoru.", chyby: "Problém s Bloomem (neony nesvítí): Musíš v hlavní kameře zaškrtnout políčko 'Post Processing'!", ukol: "Přidej override 'Vignette' pro ztmavení okrajů obrazovky a 'Color Adjustments' pro kontrast.", kontrola: "Hra najednou vypadá jako profesionální AAA titul s filmovými barvami." } },
            { title: "2. Particle System (Částice)", template: { cil: "Vytvořit epickou explozi, oheň nebo prach od nohou.", znalosti: "Práce s parametry.", postup: "<p>V Hierarchy pravým -> Effects -> Particle System. Systém bude automaticky chrlit bílé čtverečky.</p>", kod: "// Skriptem můžeme nechat explozi zničit sama sebe po dohrání:\nDestroy(gameObject, GetComponent<ParticleSystem>().main.duration);", chyby: "Částice hrozně žerou výkon. Nikdy nedávej 'Max Particles' na 10 000, pokud děláš jen malý oheň. Bohatě stačí 50.", ukol: "Zkus zaškrtnout modul 'Color over Lifetime' a nastavit barvu tak, aby částice mizely do průhlednosti.", kontrola: "Oheň uprostřed jasně svítí a ke koncům se ztrácí do ztracena." } },
            { title: "3. Trail Renderer", template: { cil: "Vykreslit světelnou stopu za letícím šípem.", znalosti: "Komponenty.", postup: "<p>Přidej letícímu objektu komponentu 'Trail Renderer'. Vytvoř mu zářivý materiál a přiřaď jej do pole Materials.</p>", kod: "// Trail si kreslí stopy v prostoru sám na základě rychlosti transformace.", chyby: "Stopa je často divně tlustá a růžová. Růžová barva znamená chybějící materiál, tloušťku změníš na křivce 'Width' v Inspectoru.", ukol: "Nastav čas zmizení (Time) na 0.5 sekundy.", kontrola: "Když posuneš objekt v Editoru, vykreslí se za ním plynulý barevný ocas, který rychle zmizí." } }
        ]
    },
    { 
        id: 12, title: "Audio a Zvuky", category: "basics", desc: "Prostorový 3D zvuk, pozadí a tvorba uživatelského AudioMixeru.", difficulty: "Středně pokročilý", lessons: 3, icon: "fa-headphones",
        lessonItems: [
            { title: "1. Vydávání zvuku (AudioSource)", template: { cil: "Aby hra přestala být němá.", znalosti: "Tvorba GameObjectů.", postup: "<p>Objekt, který má hrát (rádio, zbraň), potřebuje 'AudioSource'. Kamera v sobě drží 'AudioListener' – to jsou uši hráče.</p>", kod: "public AudioSource zbran;\npublic AudioClip vystrel;\n\nvoid Strelba() {\n    zbran.PlayOneShot(vystrel);\n}", chyby: "Pokud ti zvuk střelby usekává ten předešlý, nepoužívej .Play(), ale vždy .PlayOneShot().", ukol: "Najdi na netu .wav zvuk zvonku a nastav AudioSource na 'Play On Awake'.", kontrola: "Jakmile hru spustíš, zvonek okamžitě zazvoní." } },
            { title: "2. Prostorový 3D Zvuk", template: { cil: "Aby šel zvuk z dálky slyšet tiše a blízko nahlas.", znalosti: "AudioSource nastavení.", postup: "<p>U AudioSource najdi jezdec 'Spatial Blend' a posuň ho z 2D úplně doprava na 3D. Unity pak začne ztišovat zvuk úměrně tomu, jak daleko od něj 'uši' (kamera) stojí.</p>", kod: "// Žádný kód, jen nastavení sliderů a grafu v Inspectoru.", chyby: "Dole pod sliderem Spatial Blend otevři '3D Sound Settings'. Musíš změnit křivku Volume Rolloff z Logarithmic na Linear, jinak se zvuk utlumí strašně rychle.", ukol: "Nastav 'Max Distance' u 3D zvuku na 20.", kontrola: "Při oddálení kamery na více než 20 metrů zvuk ohně kompletně utichne." } },
            { title: "3. AudioMixer a Slidery", template: { cil: "Dovolit hráči ztlumit hudbu bez utlumení výbuchů.", znalosti: "Základy UI UI a Audio.", postup: "<p>1. V Project okně dej Create -> Audio Mixer.<br>2. Otevři okno a přidej pod Master dvě skupiny: Music a SFX.<br>3. U každého AudioSource ve scéně zvol, do jaké skupiny patří.</p>", kod: "using UnityEngine.Audio;\npublic AudioMixer mixer;\n\npublic void NastavHlasitost(float hodnota) {\n    mixer.SetFloat(\"hudbaVol\", hodnota);\n}", chyby: "Aby metoda mixer.SetFloat fungovala, musíš v okně Audio Mixer kliknout pravým na 'Volume' u kanálu Music a dát 'Expose to script'!", ukol: "Vytvoř v UI Slider a napoj ho na tuto novou metodu.", kontrola: "Pohybem UI Slideru za běhu hry můžeš tlumit např. jen hudbu na pozadí." } }
        ]
    },
    { 
        id: 13, title: "Tvorba 2D Her", category: "basics", desc: "Stavba světů přes Tilemap, práce se Sprity a 2D kolize.", difficulty: "Středně pokročilý", lessons: 3, icon: "fa-layer-group",
        lessonItems: [
            { title: "1. Tilemap a Malování", template: { cil: "Malovat 2D úrovně jako ve starém Mariovi.", znalosti: "Import grafiky.", postup: "<p>V Hierarchy dej pravým -> 2D Object -> Tilemap -> Rectangular. V okně Window -> 2D -> Tile Palette přetáhni svůj rozřezaný SpriteSheet a můžeš malovat zdi.</p>", kod: "// Tilemapy se malují čistě myší v editoru.", chyby: "U 2D grafiky (Sprites) musíš v Inspectoru u obrázku v záložce importu vypnout 'Filter Mode' na Point (No Filter), jinak budou pixely rozmazané.", ukol: "Namaluj hliněnou zem s trávou nahoře.", kontrola: "Práce s bloky je mnohem rychlejší než kopírovat 100 kostiček." } },
            { title: "2. 2D Fyzika", template: { cil: "Nastavit logiku gravitace pro plochý svět.", znalosti: "Fyzika.", postup: "<p>Fyzikální engine ve 2D funguje izolovaně od toho 3D. Musíme vždy sáhnout po komponentách končících na 2D: BoxCollider2D a Rigidbody2D.</p>", kod: "void OnCollisionEnter2D(Collision2D col) {\n    if (col.gameObject.CompareTag(\"Zem\")) {\n        jeNaZemi = true;\n    }\n}", chyby: "Klasický 'Rigidbody' (bez 2D na konci) nikdy nebude padat dolů, pokud bude ležet v BoxCollideru2D. Nemíchej 2D a 3D komponenty!", ukol: "Přidej hráči Rigidbody2D a zkus zmrazit jeho otáčení osy Z (v Constrains).", kontrola: "Hráč spadne na Tilemapu (která má TilemapCollider2D) a nesvalí se na stranu." } },
            { title: "3. 2D Animace", template: { cil: "Naučit 2D postavičku dýchat a chodit.", znalosti: "Práce se Sprity.", postup: "<p>Označ v Project okně 5 obrázků běžící postavy (např. Run_1 až Run_5) a přetáhni je všechny naráz přímo do okna Scene.</p>", kod: "GetComponent<SpriteRenderer>().flipX = true; // Otočí obrázek doleva", chyby: "Vždy rozřezávej velký SpriteSheet pomocí nástroje 'Sprite Editor' (na to musíš mít nainstalovaný 2D Sprite package).", ukol: "Unity se tě zeptá na uložení souboru .anim. Pojmenuj ho 'Beh'.", kontrola: "Po zapnutí hry postavička okamžitě a plynule přehrává tvé obrázky za sebou." } }
        ]
    },
    { 
        id: 14, title: "Multiplayer a Ukládání", category: "programming", desc: "Zápis dat na disk, úvod do síťování (Netcode) a kompilace hry.", difficulty: "Expert", lessons: 3, icon: "fa-network-wired",
        lessonItems: [
            { title: "1. Ukládání High Score (PlayerPrefs)", template: { cil: "Trvale uložit data, aby se nevymazala po vypnutí hry.", znalosti: "Používání GameManageru.", postup: "<p>Aby si hra pamatovala odemčené úrovně i po restartu počítače, použijeme lokální bezpečný registr PlayerPrefs.</p>", kod: "int vysokeSkore = 1500;\n\n// ZÁPIS NA DISK\nPlayerPrefs.SetInt(\"MaxSkore\", vysokeSkore);\nPlayerPrefs.Save();\n\n// NAČTENÍ PO ZAPNUTÍ\nint ulozene = PlayerPrefs.GetInt(\"MaxSkore\");", chyby: "PlayerPrefs je určen pro malé položky (čísla, skóre, jméno). Nesnaž se do něj ukládat obří savy s tisíci objekty z inventáře.", ukol: "V menu Start přečti hodnotu z PlayerPrefs a ukaž ji hráči do UI Textu.", kontrola: "Když vypneš a zapneš editor, tvé vysoké skóre je pořád načteno." } },
            { title: "2. Základy síťování (Netcode)", template: { cil: "Přípravy na napojení přes server se spolužákem.", znalosti: "C# Pokročilé.", postup: "<p>Z Package Managera si stáhni 'Netcode for GameObjects'. Přidej do scény NetworkManager a svému hráči komponentu NetworkObject a NetworkTransform.</p>", kod: "using Unity.Netcode;\n\n// Už to není MonoBehaviour!\npublic class HracSit : NetworkBehaviour {\n    void Update() {\n        if (!IsOwner) return; // Pohybujeme jen SVOU postavou\n        // Kod pro pohyb\n    }\n}", chyby: "Pokud zapomeneš kontrolu '!IsOwner', stane se to, že když zmáčkneš klávesu 'W', rozběhnou se všichni hráči na serveru naráz.", ukol: "Spusť hru přes okno NetworkManager jako 'Host'.", kontrola: "Hráč se objeví na síti a NetworkTransform hlásí synchronizaci pozice." } },
            { title: "3. Build Hry", template: { cil: "Vytvořit soubor .exe a ukázat hru kamarádům bez Unity.", znalosti: "Znalost Build Settings.", postup: "<p>Přejdi do menu File -> Build Settings. Zaškrtni ty scény, které chceš do hry přidat (Menu musí být jako nulté). Zvol Windows a klikni na Build.</p>", kod: "// Hra se zkompiluje do složky.", chyby: "Zapomenutá scéna! Pokud z Menu proklikáváš do Levelu 2, ale v Build Settings máš jen Level 1, tlačítko na přechod nic neudělá.", ukol: "Zkus si Build postavit u sebe na plochu.", kontrola: "Vytvoří se ti soubor MojeHra.exe s ikonkou Unity, který jde zapnout jako každá jiná profi hra!" } }
        ]
    }
];

let savedCourses = JSON.parse(localStorage.getItem('ryvexo-courses-data'));
let coursesData = (savedCourses && savedCourses.length >= 14) ? savedCourses : defaultCourses;


// --- DYNAMICKÁ DATA PRO TUTORIÁLY ---
const defaultTutorials = [
    { 
        id: 1, title: "1. Pohyb hráče (WASD)", desc: "Základní skript pro pohyb postavy po zemi.", category: "Hratelnost", time: "10 min",
        template: { cil: "Naprogramovat základní pohyb po 3D podlaze bez fyziky.", znalosti: "Input.GetAxis z kurzů.", postup: "<p>1. V okně Hierarchy vytvoř 3D Object -> Cube (Hráč).<br>2. Vytvoř další větší Cube jako podlahu a roztáhni ji.<br>3. Přidej hráči nový skript PohybHrace.</p>", kod: "using UnityEngine;\npublic class PohybHrace : MonoBehaviour {\n    public float rychlost = 5f;\n    void Update() {\n        float h = Input.GetAxis(\"Horizontal\");\n        float v = Input.GetAxis(\"Vertical\");\n        transform.Translate(new Vector3(h, 0, v) * rychlost * Time.deltaTime);\n    }\n}", chyby: "Slovo 'Horizontal' musí být přesně s velkým H, jinak Unity vyhodí chybu.", ukol: "Místo Input.GetAxis použij GetKeyDown a pohybuj se šipkami trhaně jako na šachovnici.", kontrola: "Po zmáčknutí W nebo Šipky Nahoru se hráč plynule rozjede dopředu." }
    },
    { 
        id: 2, title: "2. Skok a Gravitace", desc: "Přidání fyziky a naprogramování skoku mezerníkem.", category: "Fyzika", time: "10 min",
        template: { cil: "Odpoutat se od země pomocí poctivé fyzikální síly.", znalosti: "Komponenta Rigidbody z kurzů.", postup: "<p>1. Označ hráče a v Inspectoru klikni na Add Component -> Rigidbody.<br>2. Nyní hráč začne padat. Přidej mu C# skript pro skok.</p>", kod: "using UnityEngine;\npublic class SkokHrace : MonoBehaviour {\n    public float silaSkoku = 7f;\n    private Rigidbody rb;\n    void Start() { rb = GetComponent<Rigidbody>(); }\n    void Update() {\n        if (Input.GetKeyDown(KeyCode.Space)) {\n            rb.AddForce(Vector3.up * silaSkoku, ForceMode.Impulse);\n        }\n    }\n}", chyby: "U AddForce nezapomeň nastavit režim ForceMode.Impulse, protože skok je jednorázový výbuch síly, ne plynulé tlačení.", ukol: "Dej pozor, že tento jednoduchý kód dovoluje 'Double Jump' i ve vzduchu. Zkus vymyslet, jak tomu zabránit.", kontrola: "Když padáš, a zmáčkneš mezerník, fyzika tě odrazí směrem vzhůru." }
    },
    { 
        id: 3, title: "3. Kamera sledující hráče", desc: "Základy balíčku Cinemachine pro plynulou kameru.", category: "Kamera", time: "5 min",
        template: { cil: "Zajistit, aby kamera nespustila hráče z očí.", znalosti: "Instalace balíčků.", postup: "<p>1. Nahoře v menu klikni na Window -> Package Manager a nainstaluj Cinemachine.<br>2. Zvol Cinemachine -> Create Virtual Camera.<br>3. Z okna Hierarchy přetáhni svého Hráče (Cube) přímo do políček 'Follow' a 'Look At' u nové Virtual Camery.</p>", kod: "// Cinemachine se napojí do enginu samo. Stačí přetáhnout referenci.", chyby: "Jakmile vytvoříš Virtual Cameru, stará Main Camera je zcela ovládaná. Nemá smysl Main Camerou hýbat pomocí Transform v Inspectoru.", ukol: "V Inspectoru Virtual Camery najdi sekci 'Noise' a přidej drobný 'Basic Multi Channel Perlin' efekt chvění.", kontrola: "Ať se hneš kamkoliv, obrazovka plachtí plynule za tebou." }
    },
    { 
        id: 4, title: "4. Sběr mincí", desc: "Nastavení Triggeru a zničení objektu při dotyku.", category: "Hratelnost", time: "10 min",
        template: { cil: "Naprogramovat první skutečný herní cíl - sebrání zlaťáku.", znalosti: "Rozdíl mezi kolizí a triggerem.", postup: "<p>1. Vytvoř žlutou malou kostku (Mince). V jejím BoxCollideru zaškrtni 'Is Trigger'.<br>2. Hráči nastav Tag na 'Player'.<br>3. Minci dej tento skript.</p>", kod: "using UnityEngine;\npublic class Mince : MonoBehaviour {\n    void OnTriggerEnter(Collider other) {\n        if (other.CompareTag(\"Player\")) {\n            Destroy(gameObject);\n        }\n    }\n}", chyby: "Pokud by mince neměla Is Trigger, hráč by se o ni zastavil jako o tvrdý sloup a kód by se nikdy nespustil.", ukol: "Přidej do skriptu do Update rotaci, aby se mince točila dokola (transform.Rotate).", kontrola: "Když s hráčem nacouváš do mince, ozve se zvuk a mince puf! zmizí." }
    },
    { 
        id: 5, title: "5. Počítadlo skóre (UI)", desc: "Propojení posbíraných mincí s textem na obrazovce.", category: "UI", time: "15 min",
        template: { cil: "Vytvořit na obrazovce text, který se bude aktualizovat.", znalosti: "UI Canvas a TextMeshPro.", postup: "<p>1. V Hierarchy dej UI -> Text - TextMeshPro. Napiš do něj 'Skóre: 0'.<br>2. Vytvoř prázdný objekt GameManager a vlož na něj tento kód.</p>", kod: "using UnityEngine;\nusing TMPro;\n\npublic class GameManager : MonoBehaviour {\n    public int skore = 0;\n    public TextMeshProUGUI textSkore;\n    public void PridejBody() {\n        skore += 10;\n        textSkore.text = \"Skóre: \" + skore;\n    }\n}", chyby: "Musíš v kódu mince (z minulého úkolu) přidat příkaz na zavolání GameManageru TĚSNĚ PŘED příkazem Destroy!", ukol: "Propoj skript mince a GameManagera pomocí metody FindObjectOfType<GameManager>().PridejBody();", kontrola: "Při každém nárazu do mince se číslo v rohu obrazovky zvětší o 10." }
    },
    { 
        id: 6, title: "6. Smrtící past (Láva)", desc: "Restartování levelu po pádu do propasti nebo do lávy.", category: "Logika", time: "10 min",
        template: { cil: "Vytvořit nebezpečnou zónu, která potrestá hráče.", znalosti: "SceneManager a Triggery.", postup: "<p>Vytvoř si v Unity velkou červenou plochu jako lávu. Zaškrtni na ní Is Trigger a přidej jí skript s logikou pro smrt.</p>", kod: "using UnityEngine;\nusing UnityEngine.SceneManagement;\n\npublic class Past : MonoBehaviour {\n    void OnTriggerEnter(Collider other) {\n        if (other.CompareTag(\"Player\")) {\n            SceneManager.LoadScene(SceneManager.GetActiveScene().name);\n        }\n    }\n}", chyby: "Když scéna není přidána v menu File -> Build Settings, kód LoadScene selže a napíše červenou chybu do Console.", ukol: "Udělej past neviditelnou tak, že jí v Inspectoru smažeš (Remove Component) Mesh Renderer.", kontrola: "Když hráč spadne z mapy do neviditelné zóny, okamžitě se respawnuje na startu." }
    },
    { 
        id: 7, title: "7. Cíl a další level", desc: "Jak se po dokončení úrovně posunout dál.", category: "Logika", time: "10 min",
        template: { cil: "Vytvořit vlajku, která naloží druhou mapu.", znalosti: "Build Indexy scén.", postup: "<p>Na konci překážkové dráhy si vytvoř zelený válec jako Vlajku. Stejně jako láva to bude Trigger, ale místo znovunačtení staré scény načteme tu další v pořadí.</p>", kod: "using UnityEngine;\nusing UnityEngine.SceneManagement;\n\npublic class Cil : MonoBehaviour {\n    void OnTriggerEnter(Collider other) {\n        if (other.CompareTag(\"Player\")) {\n            SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);\n        }\n    }\n}", chyby: "Metoda s '+1' předpokládá, že máš scény v Build Settings seřazené např: Level1(0), Level2(1), atd.", ukol: "Přidej do skriptu malý efekt jásotu z AudioSource těsně před loadnutím další scény.", kontrola: "Při dotyku s vlajkou problikne obrazovka a stojíš na startu nového těžšího levelu." }
    },
    { 
        id: 8, title: "8. Hlavní Menu", desc: "Tvorba tlačítka Start Game a Quit.", category: "UI", time: "15 min",
        template: { cil: "Poskládat úvodní obrazovku pro hráče s funkčními tlačítky.", znalosti: "Metody pro Button komponenty.", postup: "<p>1. Založ novou čistou scénu Menu. Vlož do ní UI Button START a UI Button KONEC.<br>2. Na prázdný objekt hoď skript MenuManager a napoj ho na OnClick u tlačítek.</p>", kod: "using UnityEngine;\nusing UnityEngine.SceneManagement;\n\npublic class MenuManager : MonoBehaviour {\n    public void Hrat() {\n        SceneManager.LoadScene(\"Level1\");\n    }\n    public void UkoncitHru() {\n        Application.Quit();\n    }\n}", chyby: "Application.Quit() v editoru Unity nefunguje (nic to neudělá). Funkčnost poznáš až ve vyexportované .exe hře.", ukol: "Udělej si tlačítka hezčí, změň jejich barvu po přejetí myší v sekci 'Hover Color' na zelenou.", kontrola: "Tlačítko Start se zeleně rozsvítí a po kliknutí se zapne Level 1." }
    },
    { 
        id: 9, title: "9. Zvukové efekty", desc: "Přehrávání zvuku po sebrání mince.", category: "Audio", time: "10 min",
        template: { cil: "Aktivovat zvuk přesně ve chvíli, kdy o to zažádáme z kódu.", znalosti: "AudioSource a AudioClip.", postup: "<p>1. Stáhni mp3 zvuk cinknutí.<br>2. Vlož na Hráče komponentu AudioSource a odškrtni políčko 'Play On Awake'.<br>3. Propoj to skrze kód.</p>", kod: "using UnityEngine;\n\npublic class ZvukSberu : MonoBehaviour {\n    public AudioSource zdrojZvuku;\n    public AudioClip zvukMince;\n\n    public void ZahrajZvuk() {\n        zdrojZvuku.PlayOneShot(zvukMince);\n    }\n}", chyby: "PlayOneShot zajistí, že když sebereš dvě mince rychle po sobě, zvuk se nepřeruší, ale budou hrát dva zvuky cinknutí přes sebe (což chceme).", ukol: "Zavolej tuto novou metodu ZahrajZvuk() přímo uvnitř tvého OnTriggerEnter kódu u Mince.", kontrola: "Každé sebrání krásně hlasitě cinkne." }
    },
    { 
        id: 10, title: "10. Export hry (.exe)", desc: "Jak zabalit hotovou hru, aby ji šlo poslat kamarádům.", category: "Závěr", time: "5 min",
        template: { cil: "Sestavit funkční hru oddělenou od Unity editoru.", znalosti: "Kompilace (Build).", postup: "<ol style='margin-left: 20px;'><li>Jdi do menu <strong>File -> Build Settings</strong>.</li><li>Zkontroluj, že Menu je nahoře (0) a Level1 dole (1).</li><li>Zvol Windows (nebo Mac) a dej <strong>Build</strong>.</li><li>Vyber na ploše prázdnou složku.</li></ol>", kod: "// Compiling shaders... (Probíhá generování kódu a balení herních dat).", chyby: "Ujisti se, že složka je úplně prázdná. Po Buildu tam uvidíš soubor .exe a složku s daty. Obojí musíš posílat v jednom ZIP souboru!", ukol: "Nahraj ZIP soubor s hrou třeba na Google Drive nebo itchio a pošli to kamarádovi na otestování.", kontrola: "Poklepáním na ikonu s logem Unity se spustí tvé krásné funkční menu a hra běží i bez Unity Hubu!" }
    }
];

let savedTutorials = JSON.parse(localStorage.getItem('ryvexo-tut-data'));
let tutorialsData = (savedTutorials && savedTutorials.length >= 10) ? savedTutorials : defaultTutorials;


// --- DYNAMICKÁ DATA PRO KVÍZY ---
const defaultQuizzes = [
    { id: 1, title: "1. Orientace v Editoru", question: "Jaké okno v Unity slouží k zobrazení všech objektů, které jsou aktuálně v daném levelu (scéně) vytvořeny?", options: ["Inspector", "Project", "Hierarchy", "Console"], correctIndex: 2, xpReward: 100 },
    { id: 2, title: "2. Datové typy v C#", question: "Který datový typ je nejvhodnější pro uložení počtu životů (např. 100)?", options: ["float", "string", "int", "bool"], correctIndex: 2, xpReward: 100 },
    { id: 3, title: "3. Unity Fyzika", question: "Jakou komponentu musíš přidat na 3D objekt, aby na něj začala působit gravitace a reálné fyzikální síly?", options: ["BoxCollider", "Transform", "MeshRenderer", "Rigidbody"], correctIndex: 3, xpReward: 150 },
    { id: 4, title: "4. Záludná podmínka", question: "Co se stane, pokud proměnná zivoty bude mít hodnotu přesně 0 u podmínky: if (zivoty <= 0)?", options: ["Podmínka neplatí", "Podmínka platí a kód se provede", "Hra spadne s chybou", "Nic z toho"], correctIndex: 1, xpReward: 150 },
    { id: 5, title: "5. Detekce průchodu (Triggery)", question: "Která metoda se automaticky zavolá, když hráč vstoupí do zóny mince, která má zaškrtnuto 'Is Trigger'?", options: ["OnCollisionEnter", "OnTriggerEnter", "Update", "Start"], correctIndex: 1, xpReward: 200 },
    { id: 6, title: "6. Tvorba UI", question: "Na jakém neviditelném plátně musí povinně ležet všechny UI prvky (tlačítka, texty) v Unity?", options: ["EventSystem", "Camera", "Canvas", "Panel"], correctIndex: 2, xpReward: 150 },
    { id: 7, title: "7. Plynulý čas", question: "Jakou hodnotou musíš vynásobit rychlost pohybu, aby se hráč hýbal stejně rychle bez ohledu na FPS počítače?", options: ["Time.deltaTime", "Time.timeScale", "Time.fixedTime", "Mathf.Lerp"], correctIndex: 0, xpReward: 200 },
    { id: 8, title: "8. Plynulé animace", question: "Jak se nazývá uzel v okně Animator, který umí plynule mixovat (prolínat) animaci chůze a běhu na základě rychlosti?", options: ["State Machine", "Blend Tree", "Transition", "Keyframe"], correctIndex: 1, xpReward: 250 },
    { id: 9, title: "9. Umělá inteligence", question: "Kterou komponentu přidáš nepříteli, aby uměl sám najít cestu bludištěm (využil modrou plochu NavMesh)?", options: ["NavMesh Agent", "AI Controller", "Pathfinder", "Rigidbody"], correctIndex: 0, xpReward: 250 },
    { id: 10, title: "10. Ukládání postupu", question: "Která třída se v Unity běžně používá pro trvalé uložení menších dat (jako je nejvyšší skóre) přímo na disk hráče?", options: ["PlayerPrefs", "SaveManager", "FileSaver", "DiskWriter"], correctIndex: 0, xpReward: 300 }
];

let savedQuizzes = JSON.parse(localStorage.getItem('ryvexo-quiz-data'));
let quizzesData = (savedQuizzes && savedQuizzes.length >= 10) ? savedQuizzes : defaultQuizzes;

// --- ROADMAPA ---
const roadmapSteps = [
    { id: "step1", title: "Základy editoru", desc: "Zorientování se v Unity a C#." },
    { id: "step2", title: "Prototyp", desc: "Základní level design." },
    { id: "step3", title: "Ladění", desc: "Opravovat to, co nejde z předešlých lekcí." }
];

// --- WIKI / SLOVNÍČEK POJMŮ ---
const wikiDB = [
    { term: "GameObject", desc: "Základní stavební kámen v Unity. Vše ve scéně (hráč, kamera, světlo, mince) je GameObject." },
    { term: "Transform", desc: "Komponenta, kterou má každý GameObject. Určuje pozici (Position), rotaci (Rotation) a velikost (Scale)." },
    { term: "Vector3", desc: "Datový typ reprezentující bod nebo směr ve 3D prostoru pomocí souřadnic (X, Y, Z)." },
    { term: "Rigidbody", desc: "Komponenta, která přidává objektu fyziku (gravitaci, hmotnost, setrvačnost)." },
    { term: "Collider", desc: "Neviditelný obal objektu, který zajišťuje srážky s ostatními objekty (BoxCollider, SphereCollider)." },
    { term: "Trigger", desc: "Collider, který má zaškrtnuto 'Is Trigger'. Lze jím prolézt a používá se pro mince nebo detekční zóny." },
    { term: "Prefab", desc: "Předpřipravená šablona objektu uložená v Project okně. Pokud ji upravíš, změní se všechny její kopie ve hře." },
    { term: "Start()", desc: "Metoda, která se vykoná automaticky jednou při zapnutí hry. Vhodná pro načítání." },
    { term: "Update()", desc: "Metoda, která se vykonává neustále dokola v každém snímku (frame). Vhodná pro pohyb a ovládání." },
    { term: "Time.deltaTime", desc: "Čas, který uběhl od posledního snímku. Násobíme s ním pohyb, aby nebyl závislý na rychlosti počítače (FPS)." }
];

// --- KOMUNITA A UŽIVATELÉ ---
let communityPosts = JSON.parse(localStorage.getItem('ryvexo-posts')) || [];

const avatarsDB = [
    { id: 'fa-user-astronaut', name: 'Nováček', reqXp: 0 },
    { id: 'fa-robot', name: 'Robot', reqXp: 600 },
    { id: 'fa-ghost', name: 'Duch', reqXp: 1200 },
    { id: 'fa-user-ninja', name: 'Ninja', reqXp: 1800 },
    { id: 'fa-dragon', name: 'Drak', reqXp: 2400 }
];

let currentUser = null;
const SECRET_CODE = "KROUZEK2026"; 

// --- INICIALIZACE APLIKACE ---
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initNavigation();
    initTheme();
    initCourses();
    initTutorials();
    initQuizzes();
    initRoadmap();
    initCommunity();
    initLeaderboard();
    initDashboard();
    initSearch();
    initWiki();
    initMisc();
});

window.refreshAllViews = function() {
    if(window.renderCourses) window.renderCourses();
    if(window.renderTutorials) window.renderTutorials();
    if(window.renderQuizzes) window.renderQuizzes();
    if(window.renderCommunityFeed) window.renderCommunityFeed();
    if(window.updateDashboardUI) window.updateDashboardUI();
    if(window.renderLeaderboard) window.renderLeaderboard();
    if(window.renderAvatarShop) window.renderAvatarShop();
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
            errorMsg.innerHTML = "Nesprávný tajný kód!";
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
        if(window.animateCounters) window.animateCounters(); 
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
            if(link.getAttribute('onclick')) return; // ignorujeme js linky
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


// --- VÝUKA (Kurzy & Lekce se zamykáním a novou šablonou) ---
function initCourses() {
    const grid = document.getElementById('coursesGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    window.renderCourses = function(filter = 'all') {
        if(!grid) return;
        grid.innerHTML = '';
        
        const userLevel = currentUser ? (Math.floor((currentUser.xp || 0) / 600) + 1) : 1;
        const filtered = filter === 'all' ? coursesData : coursesData.filter(c => c.category === filter);
        
        filtered.forEach(course => {
            const diffClass = course.difficulty.toLowerCase().replace(' ', '.');
            const lessonCount = course.lessonItems ? course.lessonItems.length : course.lessons;
            
            let reqLevel = 1;
            if (course.id >= 3 && course.id <= 4) reqLevel = 2;
            if (course.id >= 5 && course.id <= 8) reqLevel = 3;
            if (course.id >= 9 && course.id <= 11) reqLevel = 4;
            if (course.id >= 12) reqLevel = 5;
            
            const isLocked = (userLevel < reqLevel) && (!currentUser || currentUser.role !== 'teacher');
            
            const lockBadge = isLocked ? `<div class="locked-badge"><i class="fa-solid fa-lock"></i> Odemyká se na úrovni ${reqLevel}</div>` : '';
            const actionBtn = isLocked 
                ? `<button class="btn btn-outline btn-full" disabled style="opacity:0.5; border-color:var(--text-sec); color:var(--text-sec);"><i class="fa-solid fa-lock"></i> Zamčeno</button>`
                : `<button class="btn btn-outline btn-full" onclick="openCourse(${course.id})"><i class="fa-solid fa-book-open"></i> Otevřít studium</button>`;

            grid.innerHTML += `
                <div class="card glass-card course-card ${isLocked ? 'locked' : ''}" style="position:relative;">
                    ${lockBadge}
                    <i class="fa-brands ${course.icon} course-icon"></i>
                    <h3 class="course-title">${course.title}</h3>
                    <p class="course-desc">${course.desc}</p>
                    <div class="course-meta">
                        <span class="difficulty ${diffClass}">${course.difficulty.toUpperCase()}</span>
                        <span><i class="fa-solid fa-list-check"></i> ${lessonCount} Lekcí</span>
                    </div>
                    ${actionBtn}
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
        
        let html = '';
        if(lesson.template) {
            html = `
                <div class="lesson-template">
                    <div class="template-section objective">
                        <h4><i class="fa-solid fa-bullseye"></i> Cíl lekce</h4>
                        <p>${lesson.template.cil}</p>
                    </div>
                    <div class="template-section knowledge">
                        <h4><i class="fa-solid fa-brain"></i> Potřebné znalosti</h4>
                        <p>${lesson.template.znalosti}</p>
                    </div>
                    <div class="template-section steps">
                        <h4><i class="fa-solid fa-list-ol"></i> Postup</h4>
                        ${lesson.template.postup}
                    </div>
                    <div class="template-section code-block">
                        <h4><i class="fa-solid fa-code"></i> Kód</h4>
                        <pre><code>${lesson.template.kod}</code></pre>
                    </div>
                    <div class="template-section errors">
                        <h4><i class="fa-solid fa-triangle-exclamation"></i> Časté chyby</h4>
                        <p>${lesson.template.chyby}</p>
                    </div>
                    <div class="template-section task">
                        <h4><i class="fa-solid fa-hammer"></i> Praktický úkol</h4>
                        <p>${lesson.template.ukol}</p>
                    </div>
                    <div class="template-section check">
                        <h4><i class="fa-solid fa-check-double"></i> Kontrola výsledku</h4>
                        <p>${lesson.template.kontrola}</p>
                    </div>
                </div>
            `;
        } else {
            html = lesson.content;
        }
        
        document.getElementById('lessonContent').innerHTML = html;

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
                        <button class="btn btn-primary" style="padding: 0.5rem 1.2rem; font-size: 0.9rem;" onclick="openTutorial(${tut.id})">Řešit</button>
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
        
        let html = '';
        if(tut.template) {
            html = `
                <div class="lesson-template">
                    <div class="template-section objective"><h4><i class="fa-solid fa-bullseye"></i> Cíl tutoriálu</h4><p>${tut.template.cil}</p></div>
                    ${tut.template.znalosti ? `<div class="template-section knowledge"><h4><i class="fa-solid fa-brain"></i> Znalosti</h4><p>${tut.template.znalosti}</p></div>` : ''}
                    <div class="template-section steps"><h4><i class="fa-solid fa-list-ol"></i> Postup</h4>${tut.template.postup}</div>
                    ${tut.template.kod ? `<div class="template-section code-block"><h4><i class="fa-solid fa-code"></i> Kód</h4><pre><code>${tut.template.kod}</code></pre></div>` : ''}
                    ${tut.template.chyby ? `<div class="template-section errors"><h4><i class="fa-solid fa-triangle-exclamation"></i> Na co si dát pozor</h4><p>${tut.template.chyby}</p></div>` : ''}
                    ${tut.template.ukol ? `<div class="template-section task"><h4><i class="fa-solid fa-hammer"></i> Úkol</h4><p>${tut.template.ukol}</p></div>` : ''}
                    ${tut.template.kontrola ? `<div class="template-section check"><h4><i class="fa-solid fa-check-double"></i> Výsledek</h4><p>${tut.template.kontrola}</p></div>` : ''}
                </div>`;
        } else {
            html = tut.content; 
        }
        
        document.getElementById('tutorialModalContent').innerHTML = html; 
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

// --- KOMUNITA A KOMENTÁŘE ---
function initCommunity() {
    const feed = document.getElementById('communityFeed'); 
    const formContainer = document.getElementById('postFormContainer');

    window.toggleReaction = function(postId, reactType) {
        if (!currentUser) { showToast('Musíš se přihlásit!'); return; }
        const post = communityPosts.find(p => p.id === postId);
        if (post) {
            post.reactions = post.reactions || { fire: 0, idea: 0, bug: 0, users: {} };
            if(!post.reactions.users) post.reactions.users = {};

            const userReact = post.reactions.users[currentUser.username];
            if (userReact === reactType) {
                post.reactions[reactType]--;
                delete post.reactions.users[currentUser.username];
            } else {
                if(userReact) post.reactions[userReact]--;
                post.reactions[reactType]++;
                post.reactions.users[currentUser.username] = reactType;
            }
            window.renderCommunityFeed();
        }
    };

    window.deletePost = function(id) { 
        if(!confirm('Smazat?')) return; 
        communityPosts = communityPosts.filter(p => p.id !== id); showToast('Smazáno.'); window.renderCommunityFeed(); 
    };

    window.toggleComments = function(id) {
        const el = document.getElementById(`comments-${id}`);
        if (el) el.classList.toggle('hidden');
    };

    window.addComment = function(postId) {
        if (!currentUser) { showToast('Musíš se přihlásit!'); return; }
        const input = document.getElementById(`comment-input-${postId}`);
        const text = input.value.trim();
        if (!text) return;

        const post = communityPosts.find(p => p.id === postId);
        if (post) {
            if(!post.comments) post.comments = [];
            const av = currentUser.currentAvatar || 'fa-user-astronaut';
            post.comments.push({ author: currentUser.username, text: text, avatar: av });
            showToast('Komentář přidán.');
            window.renderCommunityFeed();
        }
    };

    window.renderCommunityFeed = function() {
        localStorage.setItem('ryvexo-posts', JSON.stringify(communityPosts)); 
        if(!feed) return; 
        feed.innerHTML = ''; 
        const isTeacher = currentUser && currentUser.role === 'teacher';

        [...communityPosts].reverse().forEach(post => {
            const deleteBtn = isTeacher ? `<button class="action-btn" style="color: #f87171;" onclick="deletePost(${post.id})"><i class="fa-solid fa-trash"></i> Smazat</button>` : '';
            
            const r = post.reactions || { fire: 0, idea: 0, bug: 0, users: {} };
            const myR = currentUser ? (r.users && r.users[currentUser.username]) : null;

            let dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
            const authorDb = dbUsers.find(u => u.username === post.author);
            const authorLvl = authorDb ? (Math.floor((authorDb.xp || 0) / 600) + 1) : 1;
            const authorRank = window.getUserRank(authorLvl);
            const authorIcon = authorDb?.currentAvatar || 'fa-user-astronaut';

            let commentsHTML = '';
            const commentCount = post.comments ? post.comments.length : 0;
            if(post.comments && commentCount > 0) {
                post.comments.forEach(c => {
                    commentsHTML += `<div class="comment-item"><strong><i class="fa-solid ${c.avatar || 'fa-user-astronaut'}" style="margin-right:5px; color: var(--accent-cyan);"></i>${c.author}:</strong> <span style="color: var(--text-sec);">${c.text}</span></div>`;
                });
            }

            feed.innerHTML += `
                <div class="card glass-card post-card">
                    <div class="post-header">
                        <span class="post-author" style="display:flex; align-items:center; gap: 10px;">
                            <div class="avatar-icon-small ${authorRank.frameClass}">
                                <i class="fa-solid ${authorIcon}" style="color: #fff; font-size: 0.9rem;"></i>
                            </div>
                            <div style="display:flex; flex-direction:column; line-height:1.2;">
                                ${post.author}
                                <span class="${authorRank.titleClass}" style="font-size: 0.7rem; font-weight:700;">${authorRank.title}</span>
                            </div>
                        </span>
                        <span>Právě teď</span>
                    </div>
                    <p class="post-text">${post.text}</p><span class="post-tag">${post.tag}</span>
                    <div class="post-actions">
                        <button class="action-btn ${myR === 'fire' ? 'active-react' : ''}" onclick="toggleReaction(${post.id}, 'fire')">🔥 ${r.fire || 0}</button>
                        <button class="action-btn ${myR === 'idea' ? 'active-react' : ''}" onclick="toggleReaction(${post.id}, 'idea')">💡 ${r.idea || 0}</button>
                        <button class="action-btn ${myR === 'bug' ? 'active-react' : ''}" onclick="toggleReaction(${post.id}, 'bug')">🐛 ${r.bug || 0}</button>
                        <button class="action-btn" onclick="toggleComments(${post.id})"><i class="fa-regular fa-comment"></i> ${commentCount} Komentářů</button>
                        ${deleteBtn}
                    </div>
                    <div id="comments-${post.id}" class="comments-section hidden">
                        ${commentsHTML}
                        <div class="comment-input-group">
                            <input type="text" id="comment-input-${post.id}" placeholder="Napiš komentář...">
                            <button class="btn btn-primary" style="padding: 6px 12px; font-size: 0.85rem;" onclick="addComment(${post.id})">Odeslat</button>
                        </div>
                    </div>
                </div>`;
        });
    };

    document.getElementById('newPostBtn')?.addEventListener('click', () => { formContainer.classList.remove('hidden'); });
    document.getElementById('cancelPostBtn')?.addEventListener('click', () => { formContainer.classList.add('hidden'); document.getElementById('postContent').value = ''; document.getElementById('postTag').value = ''; });
    document.getElementById('submitPostBtn')?.addEventListener('click', () => {
        const contentInp = document.getElementById('postContent').value.trim(); const tagInp = document.getElementById('postTag').value.trim();
        if (contentInp === '') return;
        communityPosts.push({ id: Date.now(), author: currentUser.username, text: contentInp, tag: tagInp || '#ryvexo', reactions: { fire:0, idea:0, bug:0, users:{} }, comments: [] });
        window.renderCommunityFeed(); formContainer.classList.add('hidden'); document.getElementById('postContent').value = ''; document.getElementById('postTag').value = ''; showToast('Publikováno!');
    });

    window.renderCommunityFeed();
}

// --- ŽEBŘÍČEK S RPG RÁMEČKY A TITULY ---
function initLeaderboard() {
    const list = document.getElementById('leaderboardList');
    window.renderLeaderboard = function() {
        if(!list) return; 
        let dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        
        if (currentUser && currentUser.role !== 'teacher') {
            const existingIndex = dbUsers.findIndex(u => u.email === currentUser.email);
            if (existingIndex > -1) { 
                dbUsers[existingIndex].xp = currentUser.xp; 
                dbUsers[existingIndex].currentAvatar = currentUser.currentAvatar; 
            } else { 
                dbUsers.push({ username: currentUser.username, email: currentUser.email, xp: currentUser.xp, currentAvatar: currentUser.currentAvatar }); 
            }
            localStorage.setItem('ryvexo-users-db', JSON.stringify(dbUsers));
        }
        dbUsers.sort((a, b) => (b.xp || 0) - (a.xp || 0)); 
        list.innerHTML = '';
        if (dbUsers.length === 0) { list.innerHTML = '<p style="color: var(--text-sec); text-align: center; padding: 1rem;">Zatím žádní registrovaní studenti.</p>'; return; }
        
        dbUsers.forEach((user, index) => {
            let rankStyle = "color: var(--text-sec); font-size: 1.2rem;"; 
            let medal = ""; let bgStyle = "background: rgba(255,255,255,0.02);";
            if(index === 0) { rankStyle = "color: #fbbf24; font-size: 1.5rem;"; medal = '<i class="fa-solid fa-trophy" style="color: #fbbf24; margin-right: 10px;"></i>'; bgStyle = "background: rgba(251, 191, 36, 0.05); border-color: rgba(251, 191, 36, 0.3);"; }
            else if(index === 1) { rankStyle = "color: #94a3b8; font-size: 1.4rem;"; medal = '<i class="fa-solid fa-medal" style="color: #94a3b8; margin-right: 10px;"></i>'; }
            else if(index === 2) { rankStyle = "color: #b45309; font-size: 1.3rem;"; medal = '<i class="fa-solid fa-medal" style="color: #b45309; margin-right: 10px;"></i>'; }
            const isMe = currentUser && user.username === currentUser.username;
            if(isMe) bgStyle = "background: rgba(0, 210, 255, 0.1); border-color: var(--accent-cyan);";
            
            const userLvl = Math.floor((user.xp || 0) / 600) + 1;
            const avIcon = user.currentAvatar || 'fa-user-astronaut';
            const rpgRank = window.getUserRank(userLvl);

            list.innerHTML += `
                <div class="list-item" style="display: flex; justify-content: space-between; align-items: center; padding: 1rem 1.5rem; border-radius: 6px; border: 1px solid var(--border); transition: transform 0.2s; ${bgStyle}">
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <span style="font-family: 'Rajdhani', sans-serif; font-weight: 700; width: 30px; text-align: center; ${rankStyle}">${index + 1}.</span>
                        <div class="avatar-icon-small ${rpgRank.frameClass}">
                            <i class="fa-solid ${avIcon}" style="font-size: 1.1rem; color: #fff;"></i>
                        </div>
                        <div style="display: flex; flex-direction: column; line-height: 1.2;">
                            <span style="font-family: 'Rajdhani', sans-serif; font-size: 1.3rem; font-weight: 700; color: ${isMe ? 'var(--accent-cyan)' : 'var(--text-main)'};">${medal}${user.username} ${isMe ? '<span style="font-size: 0.8rem; background: var(--accent-cyan); color: #000; padding: 2px 6px; border-radius: 4px; margin-left: 10px;">TY</span>' : ''}</span>
                            <span class="${rpgRank.titleClass}" style="font-size: 0.75rem; text-transform: uppercase; font-family: 'Inter', sans-serif; font-weight: 700;">${rpgRank.title}</span>
                        </div>
                    </div>
                    <div style="font-family: 'Rajdhani', sans-serif; font-size: 1.4rem; font-weight: 700; color: var(--accent-purple);">${user.xp || 0} <span style="font-size: 1rem; color: var(--text-sec);">XP</span></div>
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
            renderTeacherStats();
        } else {
            document.getElementById('teacherDashboard')?.classList.add('hidden'); 
            document.getElementById('studentDashboard')?.classList.remove('hidden');
            document.getElementById('dashUsername').textContent = currentUser.username; 
            document.getElementById('dashXp').textContent = currentUser.xp;
            
            const lvl = Math.floor(currentUser.xp / 600) + 1; 
            const rpgRank = window.getUserRank(lvl);
            
            document.getElementById('dashLevel').textContent = lvl;
            const titleEl = document.getElementById('dashTitle');
            if(titleEl) {
                titleEl.textContent = rpgRank.title;
                titleEl.className = `user-title ${rpgRank.titleClass}`;
            }

            const nextLvlXp = lvl * 600; 
            const prevLvlXp = (lvl - 1) * 600; 
            let progressPct = ((currentUser.xp - prevLvlXp) / (nextLvlXp - prevLvlXp)) * 100;
            if (progressPct > 100) progressPct = 100; 
            document.getElementById('dashXpBar').style.width = `${progressPct}%`;

            const remainingXp = nextLvlXp - currentUser.xp;
            document.getElementById('dashNextLevelText').textContent = `Do další úrovně zbývá ${remainingXp} XP`;
            
            const iconEl = document.getElementById('dashAvatarIcon');
            if(iconEl) {
                iconEl.innerHTML = `<i class="fa-solid ${currentUser.currentAvatar || 'fa-user-astronaut'}" style="font-size: 3.5rem; color: #fff;"></i>`;
                iconEl.className = `avatar-large ${rpgRank.frameClass}`;
            }
            
            renderStudentProjects();
            if(window.renderAvatarShop) window.renderAvatarShop();
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
        
        const tplCil = document.getElementById('tplCil').value;
        const tplZnalosti = document.getElementById('tplZnalosti').value;
        const tplPostup = document.getElementById('tplPostup').value;
        const tplKod = document.getElementById('tplKod').value;
        const tplChyby = document.getElementById('tplChyby').value;
        const tplUkol = document.getElementById('tplUkol').value;
        const tplKontrola = document.getElementById('tplKontrola').value;

        if(!title || !tplCil || !tplPostup) {
            showToast('Musíš vyplnit alespoň Název, Cíl a Postup!');
            return;
        }

        const newTut = { 
            id: Date.now(), 
            title, 
            category: category || 'Obecné', 
            time: time || '10 min', 
            desc, 
            template: {
                cil: tplCil,
                znalosti: tplZnalosti,
                postup: tplPostup,
                kod: tplKod,
                chyby: tplChyby,
                ukol: tplUkol,
                kontrola: tplKontrola
            }
        };

        tutorialsData.push(newTut);
        localStorage.setItem('ryvexo-tut-data', JSON.stringify(tutorialsData)); 
        showToast('Nová lekce byla publikována!');
        
        document.querySelectorAll('#adminFormTut input, #adminFormTut textarea').forEach(el => el.value = '');
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
        if(dbUsers.length === 0) { list.innerHTML = '<p style="color: var(--text-sec);">Žádní registrovaní studenti.</p>'; return; }
        list.innerHTML = '';
        dbUsers.forEach(u => {
            if(u.email === 'ucitel@ryvexo.cz') return;
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

    window.renderTeacherStats = function() {
        const statsEl = document.getElementById('teacherStatsGrid');
        if(!statsEl) return;
        const dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
        const students = dbUsers.filter(u => u.email !== 'ucitel@ryvexo.cz');
        const projects = JSON.parse(localStorage.getItem('ryvexo-projects')) || [];
        const pendingProj = projects.filter(p => !p.feedback).length;

        let totalQuizzesDone = 0;
        students.forEach(s => {
            const sq = JSON.parse(localStorage.getItem(`ryvexo-quizzes-${s.username}`)) || [];
            totalQuizzesDone += sq.length;
        });

        statsEl.innerHTML = `
            <div class="stat-box" style="border-left-color: var(--accent-cyan);">
                <span style="font-size:2rem; font-weight:bold; color:var(--text-main);">${students.length}</span>
                <span style="color:var(--text-sec); font-size:0.85rem; text-transform:uppercase;">Aktivních studentů</span>
            </div>
            <div class="stat-box" style="border-left-color: #4ade80;">
                <span style="font-size:2rem; font-weight:bold; color:var(--text-main);">${totalQuizzesDone}</span>
                <span style="color:var(--text-sec); font-size:0.85rem; text-transform:uppercase;">Dokončených testů celkem</span>
            </div>
            <div class="stat-box" style="border-left-color: #fbbf24;">
                <span style="font-size:2rem; font-weight:bold; color:var(--text-main);">${pendingProj}</span>
                <span style="color:var(--text-sec); font-size:0.85rem; text-transform:uppercase;">Projektů čeká na hodnocení</span>
            </div>
        `;

        document.getElementById('teacherErrorsList').innerHTML = `
            <div style="background: rgba(248, 113, 113, 0.1); border-left: 3px solid #f87171; padding: 10px; margin-bottom: 8px; border-radius: 4px;">
                <strong>Kvíz #3 (Unity Fyzika)</strong> - 45% studentů chybuje u gravitace.
            </div>
            <div style="background: rgba(248, 113, 113, 0.1); border-left: 3px solid #f87171; padding: 10px; border-radius: 4px;">
                <strong>Kvíz #5 (Triggery)</strong> - 30% studentů zapomíná zaškrtnout Is Trigger u mincí.
            </div>
        `;
    };

    const originalUpdateDash = window.updateDashboardUI;
    window.updateDashboardUI = function() {
        if(originalUpdateDash) originalUpdateDash();
        if(currentUser && currentUser.role === 'teacher') {
            renderTeacherUsers();
            renderTeacherStats();
        }
    };
}

// --- GLOBÁLNÍ VYHLEDÁVÁNÍ ---
function initSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchInput = document.getElementById('globalSearchInput');
    const results = document.getElementById('searchResults');

    function openSearch() { searchModal.classList.add('show'); setTimeout(() => searchInput.focus(), 100); }
    function closeSearch() { searchModal.classList.remove('show'); searchInput.value = ''; results.innerHTML = '<div class="empty-state">Začni psát pro vyhledávání...</div>'; }

    searchBtn?.addEventListener('click', openSearch);
    searchModal?.addEventListener('click', (e) => { if (e.target === searchModal) closeSearch(); });
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') { e.preventDefault(); openSearch(); }
        if (e.key === 'Escape' && searchModal?.classList.contains('show')) closeSearch();
    });

    searchInput?.addEventListener('input', (e) => {
        const q = e.target.value.toLowerCase();
        if (q.length < 2) { results.innerHTML = '<div class="empty-state">Pokračuj ve psaní...</div>'; return; }

        let hits = '';
        coursesData.filter(c => c.title.toLowerCase().includes(q)).forEach(c => { hits += `<div class="search-result-item" onclick="openCourse(${c.id}); document.getElementById('searchModal').classList.remove('show')"><h4>${c.title}</h4><span>Kurz</span></div>`; });
        tutorialsData.filter(t => t.title.toLowerCase().includes(q)).forEach(t => { hits += `<div class="search-result-item" onclick="openTutorial(${t.id}); document.getElementById('searchModal').classList.remove('show')"><h4>${t.title}</h4><span>Tutoriál</span></div>`; });
        results.innerHTML = hits === '' ? '<div class="empty-state">Nebyly nalezeny žádné výsledky.</div>' : hits;
    });
}

// --- WIKI / SLOVNÍČEK POJMŮ ---
function initWiki() {
    window.openWikiModal = function() {
        document.getElementById('wikiModal').classList.add('show');
        renderWiki('');
    };
    
    const wikiInput = document.getElementById('wikiSearchInput');
    wikiInput?.addEventListener('input', (e) => window.renderWiki(e.target.value));

    window.renderWiki = function(query) {
        const res = document.getElementById('wikiResults');
        if(!res) return;
        const q = query.toLowerCase();
        res.innerHTML = '';
        
        const filtered = wikiDB.filter(w => w.term.toLowerCase().includes(q) || w.desc.toLowerCase().includes(q));
        if(filtered.length === 0) {
            res.innerHTML = '<div class="empty-state">Pojem nenalezen.</div>'; return;
        }

        filtered.forEach(w => {
            res.innerHTML += `
                <div style="background: rgba(0,0,0,0.2); padding: 12px; border-radius: 4px; margin-bottom: 8px; border-left: 3px solid var(--accent-purple);">
                    <h4 style="font-family:'Rajdhani',sans-serif; color:var(--accent-cyan); font-size:1.2rem; margin-bottom:4px;">${w.term}</h4>
                    <p style="color:var(--text-sec); font-size:0.95rem;">${w.desc}</p>
                </div>
            `;
        });
    };
}

// --- DOPLŇKY (Kopírování) ---
function initMisc() {
    const copyBtn = document.getElementById('copyHeroCode');
    if(copyBtn) {
        copyBtn.addEventListener('click', () => {
            const code = `using UnityEngine;\n\npublic class PohybHrace : MonoBehaviour\n{\n    public float rychlost = 5f;\n    void Update()\n    {\n        float h = Input.GetAxis("Horizontal");\n        float v = Input.GetAxis("Vertical");\n        Vector3 pohyb = new Vector3(h, 0, v);\n        transform.Translate(pohyb * rychlost * Time.deltaTime);\n    }\n}`;
            navigator.clipboard.writeText(code).then(() => {
                copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color:#00d2ff;"></i>'; showToast('Kód zkopírován do schránky!');
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
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
    };
}

// --- POMOCNÉ FUNKCE PRO TEXTOVÝ EDITOR (CMS) ---
window.insertFormat = function(targetId, tag) {
    const textarea = document.getElementById(targetId); if(!textarea) return;
    const start = textarea.selectionStart; const end = textarea.selectionEnd;
    const text = textarea.value; const selected = text.substring(start, end);
    let openTag = `<${tag}>`; let closeTag = `</${tag}>`;
    if (tag === 'h4') { openTag = `<h4 style="color:#fff; margin-top:1rem;">`; closeTag = `</h4>`; }
    textarea.value = text.substring(0, start) + openTag + selected + closeTag + text.substring(end);
    textarea.focus(); textarea.selectionEnd = end + openTag.length + closeTag.length;
};

window.insertCode = function(targetId) {
    const textarea = document.getElementById(targetId); if(!textarea) return;
    const start = textarea.selectionStart; const end = textarea.selectionEnd;
    const text = textarea.value; const selected = text.substring(start, end) || "Zde vlož svůj C# kód...";
    const block = `<pre style="background: #09090b; padding: 15px; border-radius: 6px; overflow-x: auto; margin-bottom: 1rem;"><code>\n${selected}\n</code></pre>`;
    textarea.value = text.substring(0, start) + block + text.substring(end); textarea.focus();
};

window.insertList = function(targetId) {
    const textarea = document.getElementById(targetId); if(!textarea) return;
    const start = textarea.selectionStart; const text = textarea.value;
    const block = `<ul style="margin: 15px 0 15px 25px;">\n    <li>První bod</li>\n    <li>Druhý bod</li>\n</ul>\n`;
    textarea.value = text.substring(0, start) + block + text.substring(start); textarea.focus();
};

// --- ÚPRAVA PROFILU A AVATARI ---
window.syncUserToDb = function(userObj) {
    if(!userObj || userObj.role === 'teacher') return;
    const dbUsers = JSON.parse(localStorage.getItem('ryvexo-users-db')) || [];
    const index = dbUsers.findIndex(u => u.email === userObj.email);
    if (index > -1) {
        dbUsers[index].xp = userObj.xp; dbUsers[index].currentAvatar = userObj.currentAvatar;
        localStorage.setItem('ryvexo-users-db', JSON.stringify(dbUsers));
    }
};

window.buyOrEquipAvatar = function(avatarId, reqXp) {
    if(!currentUser) return;
    if (currentUser.currentAvatar === avatarId) return; 
    if (currentUser.xp >= reqXp) {
        currentUser.currentAvatar = avatarId;
        localStorage.setItem('ryvexo-user', JSON.stringify(currentUser));
        syncUserToDb(currentUser); showToast('Nová ikonka úspěšně nasazena!'); refreshAllViews();
    }
};

window.renderAvatarShop = function() {
    const grid = document.getElementById('avatarShopGrid');
    if(!grid || !currentUser || currentUser.role === 'teacher') return;
    if(!currentUser.currentAvatar) currentUser.currentAvatar = 'fa-user-astronaut';
    grid.innerHTML = '';
    avatarsDB.forEach(av => {
        const isUnlocked = currentUser.xp >= av.reqXp;
        const isEquipped = currentUser.currentAvatar === av.id;
        let statusHtml = '';
        if(isEquipped) statusHtml = '<div class="price" style="color: var(--accent-cyan);">Nasazeno</div>';
        else if(isUnlocked) statusHtml = '<div class="price" style="color: #4ade80;">Odemčeno (Klikni)</div>';
        else statusHtml = `<div class="price" style="color: var(--text-sec);"><i class="fa-solid fa-lock"></i> Od ${av.reqXp} XP</div>`;

        grid.innerHTML += `
            <div class="avatar-shop-item ${isEquipped ? 'owned' : ''}" 
                 style="${!isUnlocked ? 'opacity: 0.5; filter: grayscale(100%); cursor: not-allowed;' : ''}"
                 onclick="${isUnlocked ? `buyOrEquipAvatar('${av.id}',${av.reqXp})` : `showToast('K odemčení potřebuješ ještě ${av.reqXp - currentUser.xp} XP!')`}">
                <i class="fa-solid ${av.id}" style="${isEquipped ? 'color: var(--accent-cyan);' : (isUnlocked ? 'color: var(--text-main);' : 'color: var(--text-sec);')}"></i>
                <h4 style="font-family: 'Rajdhani', sans-serif; font-size: 1.1rem; margin-bottom: 5px;">${av.name}</h4>
                ${statusHtml}
            </div>`;
    });
};

// --- POMOCNÉ FUNKCE PRO RPG TITULY ---
window.getUserRank = function(level) {
    if (level >= 10) return { title: "Architekt Světů", frameClass: "frame-lvl-10", titleClass: "title-lvl-10" };
    if (level >= 5) return { title: "Senior Vývojář", frameClass: "frame-lvl-5", titleClass: "title-lvl-5" };
    if (level >= 3) return { title: "Junior Kodér", frameClass: "frame-lvl-3", titleClass: "title-lvl-3" };
    return { title: "Tester", frameClass: "frame-lvl-1", titleClass: "title-lvl-1" };
};

// --- ANIMACE POČÍTADEL (Reálná data) ---
window.animateCounters = function() {
    let totalLessons = 0;
    coursesData.forEach(c => totalLessons += (c.lessonItems ? c.lessonItems.length : c.lessons));
    document.getElementById('statLekce')?.setAttribute('data-target', totalLessons);
    document.getElementById('statTuts')?.setAttribute('data-target', tutorialsData.length);
    
    const dbUsersCount = (JSON.parse(localStorage.getItem('ryvexo-users-db')) || []).length;
    document.getElementById('statUsers')?.setAttribute('data-target', dbUsersCount > 0 ? dbUsersCount : 1);

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
            if (current < target) { stat.innerText = Math.ceil(current); requestAnimationFrame(updateCounter); } 
            else { stat.innerText = target; }
        };
        requestAnimationFrame(updateCounter);
    });
};
