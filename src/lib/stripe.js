import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export const PLAN_PRICE_ID = {
    'grouth' : 'price_1UbP30F9JTcMpoalXmxgBc3i',
    'premium': 'price_1UbP3kF9JTcMpoal08zL3i4o',
    'recruiterGrowth':'price_1UbP5DF9JTcMpoalrdCXRsHR',
    'enterprise':'price_1UbP69F9JTcMpoalcVcR2vS2',
}