/**@description login routing*/
export const LOGIN = {
    path: 'login',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description login routing*/
export const SIGNUP = {
    path: 'sign-up',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description account routing*/
export const ACCOUNT = {
    path: '',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description forgot password routing*/
export const FORGOT_PASSWORD = {
    path: 'forgot-password',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description reset password routing*/
export const RESET_PASSWORD = {
    path: 'reset-password',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description layout routing*/
export const LAYOUT = {
    path: '',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description dashboard routing*/
export const DASHBOARD = {
    path: 'dashboard',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description user management routing*/
export const USER_MANAGEMENT = {
    path: 'user-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description transaction management routing*/
export const TRANSACTION_MANAGEMENT = {
    path: 'transaction-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description earning management routing*/
export const EARNINGS_MANAGEMENT = {
    path: 'earning-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description notification management routing*/
export const NOTIFICATION_MANAGEMENT = {
    path: 'notification-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description content management routing*/
export const CONTENT_MANAGEMENT = {
    path: 'content-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description staff management routing*/
export const STAFF_MANAGEMENT = {
    path: 'staff-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description add staff routing*/
export const ADD_STAFF = {
    path: 'add-staff',
    get fullUrl(): string {
        return `${STAFF_MANAGEMENT.fullUrl}/${this.path}`
    }
}

/**@description client management routing*/
export const CLIENT_MANAGEMENT = {
    path: 'client-management',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description profile management routing*/
export const MY_PROFILE = {
    path: 'my-profile',
    get fullUrl(): string {
        return `/${this.path}`
    }
}

/**@description profile management routing*/
export const DETAIL = {
    path: 'detail',
    get fullUrl(): string {
        return `${CLIENT_MANAGEMENT.fullUrl}/${this.path}`
    }
}

/**@description send-notification management routing*/
export const SEND_NOTIFICATION = {
    path: 'send-notification',
    get fullUrl(): string {
        return `${NOTIFICATION_MANAGEMENT.fullUrl}/${this.path}`
    }
}

export const ADD_FAQ = {
    path: 'add-faq',
    get fullUrl(): string {
        return `${CONTENT_MANAGEMENT.fullUrl}/${this.path}`
    }
}