export async function setCookie(name, value){
    if (navigator.cookieEnabled) { 
        const cookieName = encodeURIComponent(name);
        const cookieValue = encodeURIComponent(value);
        const cookieText = `${cookieName}=${cookieValue}; max-age=28800`;
        document.cookie = cookieText;

    }
}
