<?php
// api.php - Centrální mozek pro ukládání dat
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

$dataFile = 'database.json';

// Pokud databáze na serveru ještě neexistuje, vytvoříme ji prázdnou
if (!file_exists($dataFile)) {
    $initialData = [
        "users" => [],
        "courses" => [],
        "tutorials" => [],
        "quizzes" => [],
        "posts" => [],
        "projects" => [],
        "roadmap" => [],
        "user_quizzes" => []
    ];
    // Zápis do souboru (ujisti se, že složka na webhostingu má práva k zápisu)
    file_put_contents($dataFile, json_encode($initialData, JSON_PRETTY_PRINT));
}

// Přečtení dat, která posílá tvůj script.js
$request = json_decode(file_get_contents('php://input'), true);
$action = $request['action'] ?? '';

// 1. Akce: Odeslání všech dat do prohlížeče (při načtení webu)
if ($action === 'load') {
    $data = json_decode(file_get_contents($dataFile), true);
    echo json_encode(["success" => true, "data" => $data]);
    exit;
}

// 2. Akce: Uložení specifické části dat (např. odevzdání projektu, nový příspěvek)
if ($action === 'save') {
    $key = $request['key'] ?? '';         // Např. "projects" nebo "users"
    $payload = $request['payload'] ?? []; // Samotná data ke vložení
    
    if ($key !== '') {
        $data = json_decode(file_get_contents($dataFile), true);
        $data[$key] = $payload; // Přepíšeme starou část dat tou novou aktuální
        
        // Uložíme zpět do souboru
        if (file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT))) {
            echo json_encode(["success" => true]);
            exit;
        } else {
            echo json_encode(["success" => false, "message" => "Nepodařilo se zapsat do souboru na serveru. Zkontroluj práva (CHMOD)."]);
            exit;
        }
    }
}

echo json_encode(["success" => false, "message" => "Neznámý požadavek"]);
?>