async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Matheus-AR/js-portfolio-profissional/main/data/profile.json';
    const fetching = await fetch(url)
    return fetching.json();
}