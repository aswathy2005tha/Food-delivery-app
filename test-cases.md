# Food Delivery App - Test Cases

## Test Objective

Verify the customer can browse and search the menu, manage a cart, validate sign-in details, and place a basic order in the Food Delivery App prototype.

## Test Conditions

- Open `app/food-delivery.html` in a modern browser with JavaScript enabled.
- Start from a fresh page load for tests that require an empty cart or signed-out customer. Cart and sign-in state are held in the current page only.
- The prototype contains four sample kitchens and eight sample dishes.
- Internet access is needed for remote food images and fonts, but not for the core menu and cart interactions.
- Use the sample dish `Lemon tahini bowl` ($14.50) for cart-total tests. The delivery fee is $2.50 when the cart contains items.
- For responsive testing, set the browser viewport to 390 pixels wide or another width below 720 pixels.

## Test Case Table

| Test Case ID | Test Scenario | Test Condition | Test Steps | Expected Result |
| --- | --- | --- | --- | --- |
| TC-01 | Initial menu | Fresh page load | Open the app | Four kitchens and eight dish cards are displayed; bag count is 0 |
| TC-02 | Restaurant filter | Menu is loaded | Select `Green Fork` | Only Green Fork dishes are shown and its filter is active |
| TC-03 | Category filter | Menu is loaded | Select `Pasta` | Only pasta dishes are shown and the category filter is active |
| TC-04 | Search by dish | Menu is loaded; search is empty | Search for `rigatoni` | Sunday rigatoni is shown |
| TC-05 | Search by kitchen | Menu is loaded; search is empty | Search for `Little Fig` | Little Fig dishes are shown |
| TC-06 | No matching search result | Menu is loaded | Search for text that is not in any dish or kitchen | Empty-state message appears; selecting Clear filters restores the menu |
| TC-07 | Sort by price | At least two dishes are visible | Select low-to-high, then high-to-low | Visible dishes reorder by ascending, then descending price |
| TC-08 | Add item to bag | Bag is empty | Add `Lemon tahini bowl` | Bag count becomes 1 and subtotal is $14.50 |
| TC-09 | Calculate quantity and total | Bag is empty | Add `Lemon tahini bowl` twice | Quantity is 2; subtotal is $29.00; delivery is $2.50; total is $31.50 |
| TC-10 | Decrease quantity | Bag contains one or more items | Decrease an item's quantity | Quantity and totals update; decreasing the last unit removes the item |
| TC-11 | Remove item | Bag contains an item | Select Remove for that item | Item disappears and bag count and totals update |
| TC-12 | Checkout while signed out | Fresh page load; add at least one item | Open the bag and continue to checkout | Sign-in form opens before an order can be placed |
| TC-13 | Reject invalid name | Sign-in form is open; name has one character | Submit the form | Name validation message appears and checkout does not continue |
| TC-14 | Reject invalid email | Sign-in form is open; name is valid; email is malformed | Submit the form | Email validation message appears and checkout does not continue |
| TC-15 | Sign in and place order | Fresh page load; bag has an item; name and email are valid | Continue to checkout, enter customer details, then continue again | Confirmation shows a generated `GD-` order number and the bag is cleared |
| TC-16 | Responsive bag | Viewport is narrower than 720 pixels | Open the bag, then close it with the close button, backdrop, or Escape | Bag appears as a bottom sheet and closes using each listed action |

## Scope and Limitations

These are manual browser test cases for the client-side prototype. Payment, delivery tracking, persistent order history, address editing, and server-backed authentication are not implemented and are outside this test scope.