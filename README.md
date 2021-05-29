# Assigment Repo

In this problem, I fetch the data for he API using the axios package.
And Display the cards of the Users data I get form the api.

### Step 1:
I had created the navbar which contains the company name or laog as you wish you can put their by replacing the text I write in the code. And Navbar also have a button `Fetch Button` which calls a fucntion to fetch the data from API.

### Step 2:
After you click on the fetch button. Its calls the `fetch function` (this is a arrow fucntion). Insite a fucntion I had call the axios library/package which fetches the data and store it in the local variable `data`.

### Step 3:
After the data fetched and stored in the varibale the it will display the information of the fetched users data in the form of card, which contains, their name, there email and their avatar/img.


## CSS
I used custom css to design the page.
Card are designed using `flex` property which will make the card conatiner responsive for all devices.

## Loading Animation
Loading animation is build using the `@keyframe` and `animation` property of the css.
You see the animation when you open the page and until the all the data is not fetched form the api.
