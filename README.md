# Developer programming problem –  Martian Robots.

A [Redux](http://redux.js.org/) implemenation of the [Martian Robots problem](https://github.com/rpullinger/martian-robots/blob/master/problem.md).

## To run 

```bash
git clone https://github.com/rpullinger/martian-robots.git
npm install
npm start
```

## To update the input
Currently the input is hardcoded. To update it change [the `input` variable](https://github.com/rpullinger/martian-robots/blob/master/src/app.js#L9:L17) and re-run `npm start`.

## Tests
There are a tests for the actions, reducers and input parser. To run `npm test`.

## TODO

* [ ] Validate input before parsing
* [ ] Add 100 instruction limit
* [ ] Add tests for scents reducer
* [ ] Add tests for explore and follow instructions actions
* [ ] Read input from file
* [ ] Add react visualization
