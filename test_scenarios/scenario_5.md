# Check cart count input element

### Summary
If a user has any item in cart, the item in the cart also has an item counter element.
This element has to only accept positive non-zero numerical input.
However, if the count goes to zero, the application asks if user wants to remove the item from cart.

### Prerequisites
1. Use any web browser supported by the web page,
2. Have an item added in a cart.

## Steps
| Step                                                                   | Data                                                                         | Expected result                                                                                                                       |
|------------------------------------------------------------------------|------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| Open the web page                                                      | https://www.alza.cz/                                                         | Site is loaded                                                                                                                        |
| Open the website's cart                                                | Right upper corner of the website there is a cart icon with price next to it | Cart is opened                                                                                                                        |
| Notice the cart's total price                                          |                                                                              | Cart total price is _**TOTAL_CART_PRICE**_                                                                                            |
| With the counter input of the item, try to insert non-numerical symbol | Special symbols, space or letters                                            | Cannot insert anything else than numbers. Dialog box is opened warning us the input is not correct.                                   |
| With the item in the cart, try to **increase the count**               | Go from count _x_ to _x+1_                                                   | Item count increased to _x+1_                                                                                                         |
| Notice the cart's total price                                          |                                                                              | Cart total price is _**TOTAL_CART_PRICE + price_of_added_item**_                                                                      |
| With the item in the cart, try to **decrease the count**               | Go from count _x_ to _x-1_, but not to 0                                     | Item count decreased to _x-1_                                                                                                         |
| Notice the cart's total price                                          |                                                                              | Cart total price is _**TOTAL_CART_PRICE**_ (same as in step #3)                                                                       |
| With the item in the cart, try to **set the count to zero**            | Set the count of the item to 0                                               | Item count decreased to 0. Dialog box is opened asking if you want to remove the item from the cart.                                  |
| Confirm the message in the dialog box                                  |                                                                              | Dialog box is confirmed                                                                                                               |
| Notice the cart's total price                                          |                                                                              | Cart total price is _**TOTAL_CART_PRICE - price_of_removed_item**_ (in case of one item in the cart, _**TOTAL_CART_PRICE**_ is now 0) |
