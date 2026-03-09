import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

interface CartLineItem {
  name: string;
  price: number;
  quantity: number;
  size?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, shipping } = body as {
      items: CartLineItem[];
      shipping: {
        name: string;
        email: string;
        address: string;
        city: string;
        state: string;
        zip: string;
      };
    };

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No items in cart" },
        { status: 400 }
      );
    }

    const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] =
      items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.size ? `${item.name} (${item.size})` : item.name,
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${request.headers.get("origin") || "https://curliegirlie.com"}/checkout/success`,
      cancel_url: `${request.headers.get("origin") || "https://curliegirlie.com"}/checkout`,
      customer_email: shipping.email,
      metadata: {
        customer_name: shipping.name,
        address: shipping.address,
        city: shipping.city,
        state: shipping.state,
        zip: shipping.zip,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
