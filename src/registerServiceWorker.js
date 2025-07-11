/* eslint-disable no-console */
import { register } from 'register-service-worker';
if (process.env.NODE_ENV === 'production') {
    register("".concat(process.env.BASE_URL, "service-worker.js"), {
        ready: function () {
            console.log('App is being served from cache by a service worker.\n' +
                'For more details, visit https://goo.gl/AFskqB');
        },
        registered: function () {
            console.log('Service worker has been registered.');
        },
        cached: function () {
            console.log('Content has been cached for offline use.');
        },
        updatefound: function () {
            console.log('New content is downloading.');
        },
        updated: function () {
            console.log('New content is available; please refresh.');
        },
        offline: function () {
            console.log('No internet connection found. App is running in offline mode.');
        },
        error: function (error) {
            console.error('Error during service worker registration:', error);
        }
    });
}
//# sourceMappingURL=registerServiceWorker.js.map