# Food Delivery App

A simple browser-based food delivery prototype developed as a Software Engineering laboratory project. The prototype lets customers browse neighborhood kitchens, search for dishes, manage a shopping bag, and place a basic order.

## Project Objective

To design and build a working food-ordering prototype that demonstrates the core customer journey: find food, add it to a cart, validate customer details, and receive an order confirmation. The project also documents its storyboard and manual test cases as part of the laboratory work.

## Features

- Customer login validation using a name and email address
- Restaurant and food item listing with prices and preparation estimates
- Food search by dish, restaurant, category, or description
- Add food to the cart
- Remove food from the cart and adjust item quantities
- Automatic cart subtotal, delivery fee, and total calculation
- Order placement with a confirmation screen
- Basic order ID generation
- Test cases and project storyboard for the laboratory work
- Restaurant and category filters, price sorting, and responsive layout

## Technologies

- HTML
- CSS
- JavaScript
- Git and GitHub

## Project Structure

```text
food-delivery-app/
|-- app/
|   |-- food-delivery.html  Application interface
|   |-- food-delivery.css   Application styling
|   `-- food-delivery.js    Application logic and sample menu data
|-- README.md            Project overview and setup
|-- storyboard.md        Laboratory storyboard and progress
`-- test-cases.md        Manual test cases and test conditions
```

## Run the Application

1. Download or clone the project.
2. Open `app/food-delivery.html` in a modern web browser.
3. Browse or search the menu, add dishes to the bag, and continue to checkout.

No package installation or build step is required. An internet connection is needed to load the remote food photographs and web fonts; the core interface and ordering interactions are client-side.

## Project Modules

| Module | Status | Details |
| --- | --- | --- |
| Customer sign-in validation | Implemented | Validates a name and email locally; no account or password is stored |
| Restaurant and food menu | Implemented | Displays four sample kitchens and eight sample dishes |
| Food search and filters | Implemented | Searches menu text and filters by kitchen or category |
| Cart management | Implemented | Adds, adjusts, and removes items; calculates totals |
| Order placement | Implemented | Shows a generated order number; order is not saved |
| Payment | Planned | No payment details are collected or processed |
| Delivery tracking | Planned | No courier or live tracking integration |
| Order history | Planned | Orders are not persisted between visits |

## Documentation and Testing

- [Storyboard](storyboard.md) describes the customer flow and laboratory progress.
- [Test cases](test-cases.md) lists manual test scenarios, conditions, steps, and expected results.

## Limitations

This is a front-end prototype using demonstration restaurant and menu data. It has no backend, database, real authentication, payment processing, delivery integration, or persistent order storage. The delivery address shown in the interface is sample content.