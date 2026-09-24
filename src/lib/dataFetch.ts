export const getAllApps = async () => {
  const res = await fetch(
    "https://raw.githubusercontent.com/rohanislambd/hero-app-nextjs/refs/heads/main/public/data.json"
  );
  const data = await res.json();

  return data;
};