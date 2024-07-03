import { Elysia } from 'elysia';
import { auth, Auth } from '../../lib/auth';

const AuthService = new Elysia({ name: "Service.Auth"})
    .derive({ as: 'scoped' }, async ({cookie: { session }}) => {
        const userSession = await auth.validateSession(session.value);
        return {
            Auth: {
                user: userSession?.user || null
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