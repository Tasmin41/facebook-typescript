function subscribe(eventName: string, listener: EventListenerOrEventListenerObject) {
    document.addEventListener(eventName, listener);
}

function unsubscribe(eventName: string, listener: EventListenerOrEventListenerObject) {
    document.removeEventListener(eventName, listener);
}

function createEvent(eventName: string, data = null): CustomEvent<any> {
    return new CustomEvent(eventName, { detail: data });
}

function createGenerateHtmlEvent() {
    return new CustomEvent("generateHtml");
}

function dispatchEvent(event: CustomEvent<any>) {
    document.dispatchEvent(event);

}

export { createEvent, subscribe, unsubscribe, dispatchEvent, createGenerateHtmlEvent };