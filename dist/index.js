/**
 * Pause execution for the given milliseconds.
 * @param ms Number of ms to wait
 */
export default function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
