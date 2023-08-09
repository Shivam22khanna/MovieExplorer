const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ea87baedfc23f901f9551f11e9ab2db5',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;