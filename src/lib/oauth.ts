import { GitHub, Google } from "arctic";

// Use the standard Node.js environment variable.
// It will be 'development' when you run `npm run dev`.
// It will be 'production' when you deploy.
const isDev = process.env.NODE_ENV === "development";

// Fail-fast checks
if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    throw new Error("Missing GitHub OAuth client ID or secret.");
}
if (!process.env.TEST_GITHUB_CLIENT_ID || !process.env.TEST_GITHUB_CLIENT_SECRET) {
    throw new Error("Missing GitHub OAuth client ID or secret, test.");
}
if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("Missing Google OAuth client ID or secret.");
}

const githubRedirectURL = isDev
    ? "http://localhost:3000/login/github/callback"
    : "https://www.recesshacks.org/login/github/callback";

const googleRedirectURL = isDev
    ? "http://localhost:3000/login/google/callback"
    : "https://www.recesshacks.org/login/google/callback";

const githubID = isDev
    ? process.env.TEST_GITHUB_CLIENT_ID
    : process.env.GITHUB_CLIENT_ID;

const githubKEY = isDev
    ? process.env.TEST_GITHUB_CLIENT_SECRET
    : process.env.GITHUB_CLIENT_SECRET;

// --- ADD THIS LOG TO PROVE WHICH URL IS BEING USED ---
console.log(`[OAuth Init] Running in ${isDev ? 'DEVELOPMENT' : 'PRODUCTION'} mode.`);
console.log(`[OAuth Init] GitHub Redirect URI set to: ${githubRedirectURL}`);
// ---------------------------------------------------


export const github = new GitHub(
    githubID,
    githubKEY,
    githubRedirectURL // Pass the determined URL as a string
);

export const google = new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    googleRedirectURL // Pass the determined URL as a string
);
