# Alza bug report

### Description
If a user wants to input larger than 4-digit number into an item's counter in basket and then decrease it to a 3-digit number manually, the item count goes to zero.
This happens as soon as the user inputs 4-digit number and focuses some other element on the page or clicks somewhere else than the item counter.
The 4-digit number gets edited into a "more readable" format and thousands get separated by a space.
Then, if a user decreases the number to 999 by the minus button, the count goes to zero instead of 999.

Note: This is an actual bug which I have found while completing this task.

## Steps
1. Add any item from the e-shop to the cart (which is not limited by count),
2. Go to the cart,
3. Set the item counter to number 1000 with a keyboard,
4. Click somewhere else to change the focus from the input element,
5. Try to change the number by the minus button next to the input element to 999.

### Expected
The number in the input element is decreased from 1000 to 999.

### Actual result
The webpage either reports an error to the user that the number has been input in incorrect format or changes the number to zero and asks if user wants to remove the item from the cart.
This is due to the added space delimiter between thousands after inputting number 1000 in the item counter.

### Test data
**Browser used:** Brave; Version 1.41.100 Chromium: 103.0.5060.134 (Official Build) (64-bit) </br>
**Item used:** https://www.alza.cz/beauty/headshoulders-citrus?dq=5551572 </br>
**Product item number:** 8001841409818  </br>
**Screenshot (GIF) evidence:** </br> ![Alza bug GIF](../img/alza_bug.gif)