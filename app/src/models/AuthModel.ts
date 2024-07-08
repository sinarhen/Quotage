import Elysia, { t } from "elysia";

export const AuthModel = new Elysia({ name: 'Model.Auth' })
    .model({
        'auth.sign': t.Object({
            email: t.RegExp(/.+@.+/),
            username: t.String({
                minLength: 3,
            }),
            password: t.String({
                minLength: 5
            })
        }),
        'auth.login': t.Object({
            email: t.RegExp(/.+@.+/),
            username: t.String({
                minLength: 3
            }),
            password: t.String({
                minLength: 5
            })
        })
    })