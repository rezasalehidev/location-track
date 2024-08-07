import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';

TaskManager.defineTask('location-task', ({ data, error }) => {
    if (error) {
        console.error(error);
        return;
    }
    if (data) {
        const { locations } = data as { locations: Location.LocationObject[] };
        console.log('Received new locations', locations);
    }
});
