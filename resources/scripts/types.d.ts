import { AxiosInstance } from 'axios'
import AlpineInstance from 'alpinejs'
import _ from 'lodash'

declare global {
    interface Window {
        axios: AxiosInstance
        _: typeof _
    }
}

declare global {
    interface Window {
        Alpine: typeof AlpineInstance
    }
}

declare module '*.jpg' {
    const content: any
    export default content
}

declare module '*.jpeg' {
    const content: any
    export default content
}

declare module '*.svg' {
    const content: any
    export default content
}

declare module '*.png' {
    const content: any
    export default content
}
