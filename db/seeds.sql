-- Insert sample users
INSERT INTO users (username, email, password, created_at, updated_at) VALUES
('TechPriest_1', 'techpriest1@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz', NOW(), NOW()),  -- Password: password123
('Inquisitor_1', 'inquisitor1@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz', NOW(), NOW()),  -- Password: password123
('AdeptusMechanicus', 'adeptusmechanicus@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz', NOW(), NOW()),  -- Password: password123
('SisterRepentia', 'sisterrepentia@example.com', '$2y$10$abcdefghijklmnoqrstuvwxyz', NOW(), NOW());  -- Password: password123

-- Insert sample roles (if not already included in schema)
INSERT INTO roles (role_name, description) VALUES
('Admin', 'Administrator with full access to the system'),
('User', 'Standard user with limited access'),
('Guest', 'Guest user with minimal access');

-- Associate users with roles
INSERT INTO user_roles (user_id, role_id) VALUES
(1, 1),  -- TechPriest_1 is Admin
(2, 2),  -- Inquisitor_1 is User
(3, 2),  -- AdeptusMechanicus is User
(4, 3);  -- SisterRepentia is Guest

-- Insert sample profiles for users
INSERT INTO profiles (user_id, bio, profile_picture, created_at) VALUES
(1, 'A dedicated Tech-Priest serving the Omnissiah.', 'https://example.com/profiles/techpriest1.png', NOW()),
(2, 'An Inquisitor on a mission to purge heresy.', 'https://example.com/profiles/inquisitor1.png', NOW()),
(3, 'A member of the Adeptus Mechanicus, preserving ancient technology.', 'https://example.com/profiles/adeptusmechanicus.png', NOW()),
(4, 'A Sister Repentia seeking redemption.', 'https://example.com/profiles/sisterrepentia.png', NOW());

-- Optional: Add additional data for other tables as necessary
-- Example: Create a factions table
INSERT INTO factions (name, description) VALUES
('Adeptus Mechanicus', 'The guardians of mankind’s technology.'),
('Inquisition', 'The secretive organization hunting for heresy.'),
('Sisters of Battle', 'The elite female warriors of the Imperium.');

-- Link users to factions if applicable
INSERT INTO user_factions (user_id, faction_id) VALUES
(1, 1),  -- TechPriest_1 in Adeptus Mechanicus
(2, 2),  -- Inquisitor_1 in Inquisition
(3, 1),  -- AdeptusMechanicus in Adeptus Mechanicus
(4, 3);  -- SisterRepentia in Sisters of Battle
