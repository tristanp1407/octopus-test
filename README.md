# Octopus Code Test - Tristan Plet

Just a quick note - I have really enjoyed doing this test! I learned so much in the process, mainly around GraphQL and testing, which are areas I was really keen to get more comfortable with. This was definitely good for my development. Thanks 😄

# Instructions for setup

You'll need to have [Python3](https://www.python.org/downloads/) installed.

### First we need to go to the server folder, install our dependencies and spin up the backend

Create a folder and clome this repo using the command

`git clone git@github.com:tristanp1407/octopus-test.git`

Then go to the server folder `cd octopus-test/octopus/server`

Create and activate the virtual environment with commands

`python3 -m venv env`

`source env/bin/activate`

Now we can install our dependencies:

```
pip install -r requirements.txt
```

To add some data to your database do the following:

```
./manage.py migrate
# Load some example data
./manage.py loaddata products
```

Now you should be ready to start the server:

```
./manage.py runserver 8000
```

Then follow this link to get started - [link](<http://127.0.0.1:8000/graphql#operationName=getProductById&query=query%20getProductById%20%7B%0A%20%20product(productId%3A%201)%20%7B%0A%20%20%20%20id%0A%20%20%20%20name%0A%20%20%20%20power%0A%20%20%20%20description%0A%20%20%20%20price%0A%20%20%20%20quantity%0A%20%20%20%20brand%0A%20%20%20%20weight%0A%20%20%20%20height%0A%20%20%20%20width%0A%20%20%20%20length%0A%20%20%20%20modelCode%0A%20%20%20%20colour%0A%20%20%20%20imgUrl%0A%20%20%7D%0A%7D%0A>)

### Now let's serve the app!

Go to the client folder

`cd ../../octopus/client`

Run to install the packages

` npm i`

Install serve if needed

`npm install -g serve`

Serve the app

` serve -s build`

Happy shopping!

To run the tests, run

` npm run test`

then press `a` to run all tests

# The Journey

I started by planning excalty what I wanted to achieve during the test:

- Back up the project on a private github repo
- Start mobile first
- Acheive cart functionality
- Learn how basic tests works
- Learn about the basics of GraphQL
- Use apollo-boost if time allows it

This code test has been my first code test for any industry role/work. I was nervous and very excited, but I have to say I honestly really enjoyed it and definitely learn quite a bit!

#### Organising Files

I set up the files as though this product was one of many, and the the app was ready to recieve more components. The fetch request is setup to use a different product id if one were to be added.

#### Querying the data

This was my first experience working with GraphQL and I really enjoyed learning more about it! I'm really excited to start using it in my own personal projects. I started setting up apollo-boost, but ended up using a fetch request in the interest of time. But I already feel like I have learned tons online and am definietly onbaord with GraphQL now!

#### Testing

I have wanted to learn more about testing for a while, and this was a great introduction. I took an extra hour to learn about it and am really glad I did so, as I feel like a more complete developper now. At first I ran into errors, as I also query the data on the landing page so needed to make the test code asynchronous.
Unfortunately I ran into a second error, which I couldn't resolve on time. The second time the `<App/>` component was rendered, it wouldn't take me back to the landing page, so couldn't find the right elements. However if the first test was commented out, the second would pass just fine. I have seen similar issues online cause by react-router-dom , and am confident that I could resolve it with more time 🙂

---

I am really looking forward to hearing your feedback!

Thanks, Tristan
