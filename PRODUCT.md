# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Arabic-reading buyers of مؤسسة الكود books, often on a phone, choosing a title and paying on the official Shopify store.

## Product Purpose

A prerendered storefront for the real Alcode catalog: browse, search, and hand a cart to Shopify checkout. Success is a correct cart permalink and a page that stays readable in Arabic, RTL, light, and dark.

## Positioning

The public reading room for مؤسسة الكود’s own books. Titles, authors, prices, descriptions, and images come only from the Shopify catalog. Checkout is Shopify’s, not a second payment form.

## Operating Context

GitHub Pages at https://blog.alcode.ae. Cart and wishlist live in the browser. Shipping is a flat 25 AED on every non-empty order. There is no free-shipping threshold and no added tax.

## Capabilities and Constraints

- Do not invent or edit book titles, authors, prices, descriptions, ISBNs, or other catalog facts.
- Checkout and buy-now links stay Shopify cart permalinks on the configured store origin.
- WhatsApp for the store is 971563244942. Email remains info@alcode.ae.
- Do not merge into main from this work, and do not touch the ziina-checkout or apex-domain branches.

## Brand Commitments

The gold and ink identity stays: sand paper, ink, and gold. Arabic first, RTL. The redesign may change layout and motion; it may not rebrand the house or the catalog.

## Evidence on Hand

Catalog and images are generated from content/catalog.json into src/generated/store.json and public/books. Author copy is content/author.json.

## Product Principles

- Show the book, then the price, then the way to buy.
- Every number on a receipt is a catalog number or the flat 25 AED ship fee.
- A control names its action in Arabic.
- Motion yields to prefers-reduced-motion.

## Accessibility & Inclusion

Arabic RTL, keyboard access, visible focus, and text that does not clip at 320px. Light and dark are both first-class.
