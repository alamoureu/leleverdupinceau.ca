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

const CONFIG = {
  ADMIN_PASSWORD_HASH: simpleHash('111tbel', 'leverDuPinceau_salt_2025'),
  SALT: 'leverDuPinceau_salt_2025',
  SESSION_DURATION: 8 * 60 * 60 * 1000, // 8 hours
};

export class AuthService {
  static ROLES = {
    ADMIN: 'admin',
  };

  static isAuthenticated(role) {
    const sessionKey = `leverDuPinceau_${role}_session`;
    const session = localStorage.getItem(sessionKey);

    if (!session) return false;

    try {
      const sessionData = JSON.parse(session);
      const now = new Date().getTime();

      if (now > sessionData.expiresAt) {
        localStorage.removeItem(sessionKey);
        return false;
      }

      return true;
    } catch {
      localStorage.removeItem(sessionKey);
      return false;
    }
  }

  static authenticate(password, role) {
    if (role !== this.ROLES.ADMIN) return false;

    const passwordHash = simpleHash(password, CONFIG.SALT);
    if (passwordHash !== CONFIG.ADMIN_PASSWORD_HASH) return false;

    const sessionData = {
      role,
      authenticatedAt: new Date().getTime(),
      expiresAt: new Date().getTime() + CONFIG.SESSION_DURATION,
    };

    localStorage.setItem(
      `leverDuPinceau_${role}_session`,
      JSON.stringify(sessionData)
    );
    return true;
  }

  static logout(role) {
    localStorage.removeItem(`leverDuPinceau_${role}_session`);
  }

  static getSession(role) {
    const session = localStorage.getItem(`leverDuPinceau_${role}_session`);
    if (!session) return null;

    try {
      return JSON.parse(session);
    } catch {
      return null;
    }
  }

  static isSessionExpiringSoon(role) {
    const session = this.getSession(role);
    if (!session) return false;

    const now = new Date().getTime();
    const thirtyMinutes = 30 * 60 * 1000;
    return session.expiresAt - now < thirtyMinutes;
  }

  static extendSession(role) {
    const session = this.getSession(role);
    if (!session) return false;

    session.expiresAt = new Date().getTime() + CONFIG.SESSION_DURATION;
    localStorage.setItem(
      `leverDuPinceau_${role}_session`,
      JSON.stringify(session)
    );
    return true;
  }
}
