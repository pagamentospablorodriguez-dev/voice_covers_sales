import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import Stripe from "stripe";
import { z } from "zod";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID || "price_1QbLxvP1UqsNQrfXqJqKqKqK";
const APP_URL = process.env.APP_URL || "https://voice-covers.example.com";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  payment: router({
    createCheckoutSession: publicProcedure
      .output(z.object({ sessionUrl: z.string().nullable() }))
      .mutation(async () => {
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
              {
                price: STRIPE_PRICE_ID,
                quantity: 1,
              },
            ],
            mode: "payment",
            success_url: `${APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${APP_URL}/`,
          });

          return {
            sessionUrl: session.url,
          };
        } catch (error) {
          console.error("Stripe error:", error);
          return {
            sessionUrl: null,
          };
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;

