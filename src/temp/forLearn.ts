// We can use the `DeviceMotionEvent` API to detect shaking motion on Android devices.
// Here's an example implementation in TypeScript:
//@ts-ignore
//@ts-nocheck
if (window.DeviceMotionEvent) {
    // Set a threshold for the amount of acceleration required to trigger a shake event
    const shakeThreshold = 15;
    // Set a time interval for how often to check for shake events
    const shakeInterval = 100;
    // Initialize variables to keep track of the last acceleration values
    let lastX, lastY, lastZ;

    // Initialize variables to keep track of the last time a shake event was triggered
    let lastShakeTime = new Date().getTime();

    // Add an event listener for the `devicemotion` event
    window.addEventListener('devicemotion', (event) => {
        // Get the acceleration values from the `event.accelerationIncludingGravity` property
        const { x, y, z } = event.accelerationIncludingGravity;
        // Calculate the change in acceleration from the last time
        const deltaX = Math.abs(x - lastX);
        const deltaY = Math.abs(y - lastY);
        const deltaZ = Math.abs(z - lastZ);

        // Check if the change in acceleration is above the threshold
        if (deltaX > shakeThreshold || deltaY > shakeThreshold || deltaZ > shakeThreshold) {
            // Get the current time
            const currentTime = new Date().getTime();

            // Check if enough time has passed since the last shake event
            if (currentTime - lastShakeTime > shakeInterval) {
                // Trigger a shake event
                console.log('Shake detected!');

                // Update the last shake time
                lastShakeTime = currentTime;
            }
        }

        // Update the last acceleration values
        lastX = x;
        lastY = y;
        lastZ = z;
    });
} else {
    console.log('DeviceMotionEvent is not supported');
}