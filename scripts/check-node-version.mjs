const [major] = process.versions.node.split(".").map(Number);

const supported = major >= 20 && major < 25;

if (!supported) {
  console.error("");
  console.error("Unsupported Node.js version for this project.");
  console.error(`Detected: ${process.version}`);
  console.error("Required: >=20 and <25");
  console.error("");
  console.error("This project fails under Node 25 because Next.js dev SSR hits a broken");
  console.error("server-side `localStorage` implementation (`localStorage.getItem` is undefined).");
  console.error("");
  console.error("Use Node 22 or Node 24 LTS, then retry:");
  console.error("  nvm use");
  console.error("  rm -rf .next");
  console.error("  npm install");
  console.error("  npm run dev");
  console.error("");
  process.exit(1);
}
