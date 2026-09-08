<?php

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
    exit;
}

/* Database connection */
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'himanshu_workshop';

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed.'
    ]);
    exit;
}

$conn->set_charset('utf8mb4');

/* Get form data */
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$message = trim($_POST['message'] ?? '');

/* Validation */
if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in all fields.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);
    exit;
}

/* Insert into database */
$stmt = $conn->prepare(
    "INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)"
);

$stmt->bind_param('sss', $name, $email, $message);

if ($stmt->execute()) {

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully.'
    ]);

} else {

    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Could not save your message.'
    ]);
}

$stmt->close();
$conn->close();

exit;