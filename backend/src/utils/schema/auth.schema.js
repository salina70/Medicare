import * as Y from 'yup'

export const loginSchema = Y.object({
    email: Y.string().email().required("very important").label('Email'),
    password: Y.string().required().label('Secret'),
    remember_me: Y.boolean().label('Remember me')
})