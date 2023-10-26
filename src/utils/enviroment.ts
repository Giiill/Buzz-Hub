
enum EEnviroment {
    Develop = 'develop',
    Production = 'production'
}

// function to determine environment specification based on URL
function getEnviroment(): EEnviroment {
    const href = window.location.href;
    const isDev = /(localhost:)|(127.0.0.1:)/.test(href);
    if (isDev) {
        return EEnviroment.Develop;
    } else {
        return EEnviroment.Production;
    }
};

// Function to determine the path depending on the current environment
function envByUrl() {
    const env = getEnviroment();
    // Depending on the environment, we return the appropriate path
    switch (env) {
        case EEnviroment.Develop:
            return '';
        case EEnviroment.Production:
            return '/Buzz-Hub/';
    }
};

export { envByUrl };