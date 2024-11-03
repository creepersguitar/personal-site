-- Create a users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,               -- Unique identifier for each user
    username VARCHAR(50) NOT NULL UNIQUE, -- Unique username
    email VARCHAR(100) NOT NULL UNIQUE, -- Unique email address
    password VARCHAR(255) NOT NULL,      -- Password (hashed)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp of user creation
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Timestamp of last update
);

-- Create a roles table
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,               -- Unique identifier for each role
    role_name VARCHAR(50) NOT NULL UNIQUE,  -- Name of the role (e.g., Admin, User)
    description TEXT                     -- Description of the role
);

-- Create a user_roles junction table for many-to-many relationship
CREATE TABLE user_roles (
    user_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY (user_id, role_id),      -- Composite primary key
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, -- FK constraint
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE  -- FK constraint
);

-- Create a profiles table for user additional info
CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,               -- Unique identifier for each profile
    user_id INT NOT NULL UNIQUE,         -- Associate profile with a user
    bio TEXT,                            -- Biography of the user
    profile_picture VARCHAR(255),        -- URL/path to profile picture
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp of profile creation
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE  -- FK constraint
);

-- Example of inserting default roles
INSERT INTO roles (role_name, description) VALUES
('Admin', 'Administrator with full access to the system'),
('User', 'Standard user with limited access'),
('Guest', 'Guest user with minimal access');

-- Optional: Create indices for optimization
CREATE INDEX idx_username ON users(username);
CREATE INDEX idx_email ON users(email);
