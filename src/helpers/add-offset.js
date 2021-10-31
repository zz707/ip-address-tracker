export function addOffset(map) {
    const offset = map.getSize().y * .1;

    map.panBy([0, -offset], {animate: false});
}