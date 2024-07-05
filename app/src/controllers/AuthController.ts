import Elysia, { t } from "elysia";
import AuthService from "../services/authService";
import { auth, register } from "../../lib/config/auth";


const AuthModel = new Elysia({ name: 'Model.Auth' })
    .model({
        'auth.sign': t.Object({
            email: t.RegExp(/.+@.+/),
            password: t.String({
                minLength: 5
            })
        })
    })
export const AuthController = new Elysia({ prefix: "/auth"})
    .use(AuthService)
    .use(AuthModel)
    .post("/register", async ({body, Auth, error, cookie, redirect}) => {
        if (Auth.user){
            return error(400, "You already signed in")
        }
        try {
            const newCookie = await register(body.email, body.password)
            if (!newCookie){
                return error(400, "Wrong data provided") // TODO: more details
            }
            
            cookie[auth.sessionCookieName].set(newCookie)

            return redirect("/")
        } catch (err)
        {
            return redirect("/?error=Something went wrong")
        }
    }, {
        body: 'auth.sign'
    })