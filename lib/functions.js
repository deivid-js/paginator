function byId(id) {
    return document.getElementById(id);
}

function byClass(classname) {
    return Array.from(document.getElementsByClassName(classname));
}

function addEventByClass(classname, event, call) {
    byClass(classname).forEach(item => item.addEventListener(event, call));
}

function addEventById(id, event, call) {
    byId(id).addEventListener(event, call);
}

function fillById(id, html) {
    byId(id) && (byId(id).innerHTML = html);
}

function loadingStart() {
    byId('loading').classList.add('is-active');
}

function loadingDestroy(_timeout) {
    const timeout = _timeout || 0;

    setTimeout(() => byId('loading').classList.remove('is-active'), timeout);
}

function loadAlert(msg) {
    alert(msg);
}

function addEventBySelector(selector, event, call) {
    const arr = Array.from(document.querySelectorAll(selector));

    if (arr.length) {
        arr.forEach(item => item.addEventListener(event, call));
    }
}

function recreateElement(el) {
    let newEl = el.cloneNode(true);

    el.parentNode.replaceChild(newEl, el);
}

function redirect(to) {
    window.location.href = to;
}
