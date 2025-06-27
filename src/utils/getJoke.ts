export async function getJoke() {
    const res = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
        cache: "no-store",
    });
    return res.json();
}