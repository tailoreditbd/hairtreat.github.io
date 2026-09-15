<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const GOOGLE_SHEET_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzCSOfdbmMQc2A8cY591qgwoGwfUX88X3Co1ozD5TT56W3T6tddN5S8EkYO5O_dNyp_/exec';

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'message' => 'Method not allowed']);
}

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    respond(400, ['success' => false, 'message' => 'Invalid request']);
}
if (!empty($input['website'])) {
    respond(200, ['success' => true]);
}

$allowedFields = ['name', 'phone', 'email', 'service', 'message', 'page', 'button'];
$lead = [];
foreach ($allowedFields as $field) {
    $value = isset($input[$field]) && is_scalar($input[$field]) ? trim((string) $input[$field]) : '';
    $lead[$field] = mb_substr($value, 0, $field === 'message' ? 2000 : 500);
}
if ($lead['page'] === '' && $lead['button'] === '') {
    respond(422, ['success' => false, 'message' => 'Lead details are required']);
}

$payload = json_encode($lead, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
$ch = curl_init(GOOGLE_SHEET_WEB_APP_URL);
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_HTTPHEADER => ['Content-Type: text/plain;charset=utf-8'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_CONNECTTIMEOUT => 8,
    CURLOPT_TIMEOUT => 15,
]);
$responseBody = curl_exec($ch);
$curlError = curl_error($ch);
$statusCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($responseBody === false || $curlError !== '' || $statusCode < 200 || $statusCode >= 300) {
    error_log('HairTreat lead submission failed: HTTP ' . $statusCode . ' ' . $curlError);
    respond(502, ['success' => false, 'message' => 'Could not save your information']);
}
$sheetResponse = json_decode($responseBody, true);
if (!is_array($sheetResponse) || ($sheetResponse['success'] ?? false) !== true) {
    error_log('HairTreat Sheet rejected lead: ' . mb_substr((string) $responseBody, 0, 1000));
    respond(502, ['success' => false, 'message' => 'Google Sheet did not confirm the save']);
}
respond(200, ['success' => true]);
