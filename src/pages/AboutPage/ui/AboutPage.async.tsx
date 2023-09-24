import { lazy } from 'react'

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
    // Just for testing loading, remove later!!!
    // @ts-expect-error
    setTimeout(() => { resolve(import('./AboutPage')) }, 1500)
}))
