## Stream Trailers

#### Summary:

An application to simulate a stream videos interface. 
I am using the [The Movie Database API](developers.themoviedb.org) to receive film data.
Also using Shaka Player to play the trailers.

## Project Status
That is a study project. A few improvements yet to be donne:

- [ ] Cover 40% of the project with tests
- [ ] Add api call and id in details page so people can share the - first
- [ ] Add animation to move items next to hover items
- [ ] Play actual trailers intead of hard coded video

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`

## Reflection

A nice project to apply basic concepts of front end development.

Api calls to a third party API provide good material to data treatment and data flow inside the project, where to use api calls and where to pass data trough props.
In this case I tried to do least API calls as possible avoiding bandwidth consume. Data that already exists in the project is reused. In a larger application maybe
a library to control state management, like react-redux or even the Context API could be necessary.

Testing api calls is not always easy and sometimes you do not test the expected element of code. I added an example of testing the render result of the api call on
ItemsCarousel. Something that I intend to improve applying the knowledge I'm getting from Kent C.Dodds course [TestingJavascript](https://testingjavascript.com/).

The design of the application is basic and could use some improvements, right now it follows good practices of UX but could do a more charming UI. I added a animation
on hover for selected movies/series similar to what happens on netflix or primevideo web applications. Also used [react-multi-carousel](https://github.com/YIZHUANG/react-multi-carousel)
for a better and more familiar experience than other similar components. I'm improving my design skills with design classes on [Alura](https://www.alura.com.br/).

Integration with Shaka Player was easier than expected, using [shaka-player-react](https://github.com/matvp91/shaka-player-react).

