export function setCookie(name, value){
    if (navigator.cookieEnabled) { 
        const cookieName = encodeURIComponent(name);
        const cookieValue = encodeURIComponent(value);
        const cookieText = `${cookieName}=${cookieValue}`;
        document.cookie = cookieText;
    }
}