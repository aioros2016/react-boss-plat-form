export default {
    isAuth: false, //标志用户是否登录
    authLogin(cb){
        this.isAuth = true
        setTimeout(cb, 500)
    },
    logout(cb){
        this.isAuth = false
        setTimeout(cb, 500)
    }
}