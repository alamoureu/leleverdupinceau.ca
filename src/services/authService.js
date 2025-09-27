// Simple hash function for password security
const simpleHash = (str, salt) => {
  let hash = 0;
  const combined = str + salt;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(36);
};

// Configuration - In production, these should come from environment variables
const CONFIG = {
  ADMIN_PASSWORD_HASH: simpleHash('111tbel', 'leverDuPinceau_salt_2025'),
  EMPLOYEE_PASSWORD_HASH: simpleHash('employe2025', 'leverDuPinceau_salt_2025'),
  SALT: 'leverDuPinceau_salt_2025',
  SESSION_DURATION: 8 * 60 * 60 * 1000, // 8 hours in milliseconds
};

// Authentication service
export class AuthService {
  static ROLES = {
    ADMIN: 'admin',
    EMPLOYEE: 'employee',
  };

  // Check if user is authenticated for a specific role
  static isAuthenticated(role) {
    const sessionKey = `leverDuPinceau_${role}_session`;
    const session = localStorage.getItem(sessionKey);

    if (!session) return false;

    try {
      const sessionData = JSON.parse(session);
      const now = new Date().getTime();

      // Check if session is still valid
      if (now > sessionData.expiresAt) {
        localStorage.removeItem(sessionKey);
        return false;
      }

      return true;
    } catch (error) {
      localStorage.removeItem(sessionKey);
      return false;
    }
  }

  // Authenticate user with password
  static authenticate(password, role) {
    const passwordHash = simpleHash(password, CONFIG.SALT);
    let isValid = false;

    switch (role) {
      case this.ROLES.ADMIN:
        isValid = passwordHash === CONFIG.ADMIN_PASSWORD_HASH;
        break;
      case this.ROLES.EMPLOYEE:
        isValid = passwordHash === CONFIG.EMPLOYEE_PASSWORD_HASH;
        break;
      default:
        return false;
    }

    if (isValid) {
      // Create session
      const sessionData = {
        role,
        authenticatedAt: new Date().getTime(),
        expiresAt: new Date().getTime() + CONFIG.SESSION_DURATION,
      };

      const sessionKey = `leverDuPinceau_${role}_session`;
      localStorage.setItem(sessionKey, JSON.stringify(sessionData));

      // No need to store plaintext password - session-based auth is sufficient

      return true;
    }

    return false;
  }

  // Logout user
  static logout(role) {
    const sessionKey = `leverDuPinceau_${role}_session`;
    localStorage.removeItem(sessionKey);

    // Clean logout - no plaintext passwords stored
  }

  // Get session info
  static getSession(role) {
    const sessionKey = `leverDuPinceau_${role}_session`;
    const session = localStorage.getItem(sessionKey);

    if (!session) return null;

    try {
      return JSON.parse(session);
    } catch (error) {
      return null;
    }
  }

  // Check if session is about to expire (within 30 minutes)
  static isSessionExpiringSoon(role) {
    const session = this.getSession(role);
    if (!session) return false;

    const now = new Date().getTime();
    const thirtyMinutes = 30 * 60 * 1000;

    return session.expiresAt - now < thirtyMinutes;
  }

  // Extend session
  static extendSession(role) {
    const session = this.getSession(role);
    if (!session) return false;

    session.expiresAt = new Date().getTime() + CONFIG.SESSION_DURATION;
    const sessionKey = `leverDuPinceau_${role}_session`;
    localStorage.setItem(sessionKey, JSON.stringify(session));

    return true;
  }
}
