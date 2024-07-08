import Elysia, { t } from "elysia";
import AuthService from "../../services/authService";
import { auth, login, register } from "../../../lib/config/auth";
import { AuthModel } from "../../models/AuthModel";
import { ErrorMessages } from "../../../lib/config/constants";


export const AuthController = new Elysia({ prefix: "/auth"})
    .use(AuthService)
    .use(AuthModel)
    .post("/login", async ({body, Auth, error, cookie, redirect}) => {
        if (Auth.user){
            return redirect("/?error=" + ErrorMessages.LOGGED_IN)
        }
        if (!body.password || typeof body.email !== "string") {
            return redirect("/?error=" + ErrorMessages.INVALID_DATA);
        }
    
        try {
            
            const newCookie = await login(body.email, body.password)
            if (!newCookie){
                return redirect("/?error=" + ErrorMessages.UNKNOWN)
            }
            cookie[auth.sessionCookieName].set(newCookie)

            return redirect("/")
        } catch (err: any){
            console.log(err)
            return redirect("/?error="+(err?.message ?? ErrorMessages.UNKNOWN))
        }
    }, {
        body: 'auth.login'
    })
    .post("/register", async ({body, Auth, error, cookie, redirect}) => {
        if (Auth.user){
            return redirect("/?error=" + ErrorMessages.LOGGED_IN)
        }
        try {
            const newCookie = await register(body.email, body.password)
            if (!newCookie){
                return redirect("/?error=" + ErrorMessages.INVALID_DATA)// TODO: more details
            }
            
            cookie[auth.sessionCookieName].set(newCookie)

            return redirect("/")
        } catch (err)
        {
            return redirect("/?error="+ErrorMessages.UNKNOWN)
        }
    }, {
        body: 'auth.sign'
    })
    .guard({
        loginRequired: true
    }).get("/logout", async ({cookie, redirect}) => {
        cookie[auth.sessionCookieName].remove()
        return redirect("/?msg=Successfully logged out")
    })