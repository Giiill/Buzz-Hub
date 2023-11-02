import { envByUrl } from "../utils/enviroment";

const env = envByUrl();

function parseRoutesENV(init: Record<string, string>) {
    return Object.keys(init).reduce((routes, route) => {
        routes[route] = env + init[route];
        return routes;
    }, {} as Record<string, string>);
};

const ERoutes: Record<string, any> = parseRoutesENV({
    HomePage: '/',
    Messages: '/messages',
    NotFoundPage: '*',

});


export { ERoutes };