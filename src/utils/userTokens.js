export const getToken = () => {
    return sessionStorage.getItem('token') ;
}
export const removeToken = () => {
    sessionStorage.removeItem('token'); 
}
export const setToken = (token) => {
    sessionStorage.setItem('token', token); 
}