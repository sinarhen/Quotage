import { Elysia } from 'elysia';
import { auth, Auth } from '../../lib/auth';

const AuthService = new Elysia({ name: "Service.Auth"})
    .derive({ as: 'scoped' }, async ({cookie}) => {
        let session = cookie[auth.sessionCookieName].value;
        let user;
        if (session){
            user = (await auth.validateSession(session)).user;
        }
        return {
            Auth: {
                user: user
            }
        }
    })
    .macro(({ onBeforeHandle}) => ({
        loginRequired(value: boolean){
            onBeforeHandle(({Auth, error}) => {
                if (!Auth?.user && value) return error(401)
            })
        }
    }))

export default AuthService;