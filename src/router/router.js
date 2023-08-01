import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../components/layout/Landing.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import AboutUs from '../components/layout/AboutUs.vue'
import ContactUs from '../components/layout/ContactUs.vue'
import Team from '../components/layout/Team.vue'
import Menu from '../components/layout/Menu.vue'
import Parent from '../components/layout/Parent.vue'
import DashBoard from '../components/layout/Dashboard.vue'
import Deposit from '../components/layout/Deposit/Deposit.vue'
import Transfer from '../components/layout/Transfer/Transfer.vue'
import Messages from '../components/layout/Messages/Messages.vue'
import Transactions from '../components/layout/Transactions/Transactions.vue'
import Profile from '../components/layout/Profile.vue'
import Settings from '../components/layout/settings/Settings.vue'
import Security from '../components/layout/settings/Security.vue'
import Account from '../components/layout/settings/Account.vue'
import Theme from '../components/layout/settings/Theme.vue'
import Notifications from '../components/layout/settings/Notifications.vue'
import LoadingVue from '../components/reusables/Loading.vue'

const routes = [
    {
        path: '/',
        component: Landing,
        meta: {
            auth_required: false
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        meta: {
            auth_required: false
        }
    },
    {
        path: '/register',
        component: Register,
        name: 'register',
        meta: {
            auth_required: false
        }
    },
    {
        path: '/menu',
        component: Menu,
        meta: {
            auth_required: false
        }
    },
    {
        path: '/contact-us',
        component: ContactUs,
        meta: {
            auth_required: false
        }
    },
    {
        path: '/about-us',
        component: AboutUs,
        meta: {
            auth_required: false
        }
    },
    {
        path: '/team',
        component: Team,
        meta: {
            auth_required: false
        }
    },
    {
        path: '/',
        component: Parent,
        name: 'parent',
        meta: {auth_required: true},
        children: [
            {
                path: 'dashboard',
                component: DashBoard
            },
            {
                path: 'profile',
                component: Profile
            },
            {
                path: '/deposit',
                component: Deposit
            },
            {
                path: '/loading',
                component: LoadingVue
            },
            {
                path: '/transfer',
                component: Transfer
            },
            {
                path: '/messages',
                component: Messages
            },
            {
                path: '/transactions',
                component: Transactions
            },
            {
                path: 'settings',
                component: Settings,
                children: [
                    {
                        path: 'account',
                        component: Account
                    },
                    {
                        path: 'security',
                        component: Security
                    },
                    {
                        path: 'theme',
                        component: Theme
                    },
                    {
                        path: 'notifications',
                        component: Notifications
                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to) => {
    const token = localStorage.getItem('auth_token')
    console.log(token);

    if (to.meta.auth_required && !token) return '/login'
})

export {router}