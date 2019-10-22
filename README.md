# Author: Alexandre Fournier-Ahizoune (fournier.afa@gmail.com)
## Details

!Important! if a `build` folder does not exist at the root of the project, create one (`mkdir build`).

Install external dependencies by running `yarn install` or `npm install`.

To launch the web app, execute the following command `yarn run dev` or `npm run dev`.

## Decision making for packages used
In order to make the development for this tiny demo app as fast as possible I've decided not to use the following packages:
- styled-components
- prop-types

And proceeded instead to use webpack to do the scss bundling for me.

Also note that the use of redux in this tiny app is kind of overkill. If it weren't for it to be a requirement I would have use
React hooks to manipulate the "state" of a functional component instead.

Due to this being only a demo app, no unit tests were done.