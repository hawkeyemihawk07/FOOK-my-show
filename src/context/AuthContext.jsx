import { useEffect, useState } from "react";
import AuthContext from "./auth-context";

const USERS_STORAGE_KEY = "bookmyshow-auth-users";
const SESSION_STORAGE_KEY = "bookmyshow-auth-session";
const RESET_STORAGE_KEY = "bookmyshow-auth-reset";

function readStorage(key, fallbackValue) {
  if (typeof window === "undefined") {
    return fallbackValue;
  }

  try {
    const storedValue = window.localStorage.getItem(key);

    if (!storedValue) {
      return fallbackValue;
    }

    return JSON.parse(storedValue);
  } catch {
    return fallbackValue;
  }
}

function writeStorage(key, value) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(key, JSON.stringify(value));
}

function removeStorage(key) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(key);
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => readStorage(USERS_STORAGE_KEY, []));
  const [sessionEmail, setSessionEmail] = useState(() =>
    readStorage(SESSION_STORAGE_KEY, null)
  );
  const [resetRequests, setResetRequests] = useState(() =>
    readStorage(RESET_STORAGE_KEY, {})
  );

  useEffect(() => {
    writeStorage(USERS_STORAGE_KEY, users);
  }, [users]);

  useEffect(() => {
    if (sessionEmail) {
      writeStorage(SESSION_STORAGE_KEY, sessionEmail);
      return;
    }

    removeStorage(SESSION_STORAGE_KEY);
  }, [sessionEmail]);

  useEffect(() => {
    writeStorage(RESET_STORAGE_KEY, resetRequests);
  }, [resetRequests]);

  const currentUser = users.find((user) => user.email === sessionEmail) ?? null;

  function register({ email, password, confirmPassword }) {
    const normalizedEmail = normalizeEmail(email);

    if (!validateEmail(normalizedEmail)) {
      throw new Error("Enter a valid email address.");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long.");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    if (users.some((user) => user.email === normalizedEmail)) {
      throw new Error("An account with this email already exists.");
    }

    const nextUser = {
      email: normalizedEmail,
      password,
      createdAt: new Date().toISOString(),
    };

    setUsers((currentUsers) => [...currentUsers, nextUser]);
    setSessionEmail(normalizedEmail);
    return nextUser;
  }

  function login({ email, password }) {
    const normalizedEmail = normalizeEmail(email);
    const matchedUser = users.find((user) => user.email === normalizedEmail);

    if (!matchedUser || matchedUser.password !== password) {
      throw new Error("Incorrect email or password.");
    }

    setSessionEmail(normalizedEmail);
    return matchedUser;
  }

  function logout() {
    setSessionEmail(null);
  }

  function requestPasswordReset(email) {
    const normalizedEmail = normalizeEmail(email);

    if (!validateEmail(normalizedEmail)) {
      throw new Error("Enter a valid email address.");
    }

    const matchedUser = users.find((user) => user.email === normalizedEmail);

    if (!matchedUser) {
      throw new Error("No account was found for that email.");
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));

    setResetRequests((currentRequests) => ({
      ...currentRequests,
      [normalizedEmail]: {
        code,
        requestedAt: Date.now(),
      },
    }));

    return code;
  }

  function resetPassword({ email, code, newPassword, confirmPassword }) {
    const normalizedEmail = normalizeEmail(email);
    const resetRequest = resetRequests[normalizedEmail];

    if (!resetRequest) {
      throw new Error("Request a reset code first.");
    }

    if (resetRequest.code !== code.trim()) {
      throw new Error("Reset code is incorrect.");
    }

    if (newPassword.length < 6) {
      throw new Error("New password must be at least 6 characters long.");
    }

    if (newPassword !== confirmPassword) {
      throw new Error("Passwords do not match.");
    }

    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.email === normalizedEmail ? { ...user, password: newPassword } : user
      )
    );
    setResetRequests((currentRequests) => {
      const nextRequests = { ...currentRequests };
      delete nextRequests[normalizedEmail];
      return nextRequests;
    });
    setSessionEmail(normalizedEmail);
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        logout,
        register,
        requestPasswordReset,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
