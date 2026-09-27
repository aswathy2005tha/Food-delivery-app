# Food Delivery App - Laboratory Storyboard

## Project Title

Food Delivery App

## Objective

Build a browser-based food delivery prototype where customers can browse restaurant menus, search and filter dishes, manage a cart, validate their customer details, and place a basic order. Payment, delivery tracking, and order history are future modules.

## Storyboard / Progress

| No. | Problem / Task | Description | Status |
| ---: | --- | --- | --- |
| 1 | Requirement analysis | Identify the customer features and define the initial project scope | Completed |
| 2 | Project setup | Create the HTML, CSS, JavaScript, storyboard, and test-case files | Completed |
| 3 | Customer sign-in | Validate a customer's name and email before checkout | Completed |
| 4 | Restaurant selection | Browse dishes from the available neighborhood kitchens | Completed |
| 5 | Food menu | Display food items, descriptions, prices, and preparation estimates | Completed |
| 6 | Food search | Search by dish, kitchen, category, or description | Completed |
| 7 | Cart management | Add items, change quantities, remove items, and calculate the total | Completed |
| 8 | Order placement | Confirm checkout and generate a basic order number | Completed |
| 9 | Payment | Add a secure payment option for customer orders | Planned |
| 10 | Delivery tracking | Show delivery status and courier progress | Planned |
| 11 | Order history | Save and display a customer's previous orders | Planned |
| 12 | Testing | Run the manual scenarios listed in `test-cases.md` | In Progress |
| 13 | Documentation | Maintain the storyboard and test-case documentation | Completed |

## Customer Storyboard

| Step | Customer action | Application response |
| --- | --- | --- |
| 1. Browse | Open the menu and view available kitchens and dishes | Displays sample restaurants, food cards, prices, and estimated times |
| 2. Find food | Search, filter by kitchen or category, or sort by price | Updates the visible dishes to match the selected criteria |
| 3. Build a cart | Add dishes and adjust quantities | Updates the bag count, subtotal, delivery fee, and total |
| 4. Sign in | Enter a name and valid email when prompted at checkout | Validates the fields locally; no account or password is stored |
| 5. Place an order | Continue after successful validation | Displays a generated order number and clears the cart |

## Story Flow

| No. | Flow stage | Customer action | Application response | Status |
| ---: | --- | --- | --- | --- |
| 1 | Open app | Open the food delivery page | Shows the kitchens, menu, search, and bag | Implemented |
| 2 | Browse kitchens | Choose a kitchen or food category | Filters the available dishes | Implemented |
| 3 | Find a dish | Search by dish, kitchen, category, or description; optionally sort by price | Shows matching menu items in the selected order | Implemented |
| 4 | Manage bag | Add a dish, adjust quantity, or remove it | Updates item count, subtotal, delivery fee, and total | Implemented |
| 5 | Validate customer | Continue to checkout and enter a name and valid email | Checks the fields locally before allowing checkout | Implemented |
| 6 | Place order | Confirm checkout | Displays a generated order number and clears the bag | Implemented |
| 7 | Pay for order | Choose a payment method | Payment processing will be added in a future module | Planned |
| 8 | Track delivery | View courier and delivery progress | Live delivery status will be added in a future module | Planned |
| 9 | Review past orders | Open order history | Saved previous orders will be added in a future module | Planned |

## Software Engineering Activities

| Activity | Project work |
| --- | --- |
| Requirement analysis | Define customer, menu, cart, and order requirements |
| System design | Outline the customer journey and screen responses in this storyboard |
| Implementation | Build the interface with HTML and CSS and implement interactions in JavaScript |
| Testing | Document manual checks in `test-cases.md` and verify the main browser workflow |
| Documentation | Record module progress, customer flow, and prototype limitations |
| Version control | Keep project files organized for tracking and sharing through GitHub |

## Progress Tracking

Statuses describe the current prototype. Testing is in progress: key browser workflows have been checked, while the full manual test-case list remains to be run. Planned modules do not collect payment information, track deliveries, or save order history.

## Prototype Notes

- Open `app/food-delivery.html` in a modern browser to run the prototype.
- The app uses sample kitchen and dish data; no backend, database, or live delivery service is connected.
- Dish photography and web fonts load from external services and require an internet connection.