# Change Log

There are some key used within the changelog which are as following:

**NOTE: anything before `beta1` can be breaking without explicitly stating it**

* [BREAKING]: means there is a change that is known to break existing code

# IN PROGRESS

* fixed styling issue with main header
* now using webpack-dev-server for local server
* added lint-staged to precommit git hook
* added utility for checking children for specific count or range and throwing error if invalid
* added ability to set offset for popover container
* added some flip configuration to popover container
* added ability to get true position from popover container
* added component-playground for use as component live examples
* added normalize.css through yarn
* refactored styles of tab components
* refactored style of style guide header
* added flow setup (nto using yet)
* made each section of the example application responsible for its own routes #4
* did simple conversion to react-router 4.x (routes still defined centrally) #4
* added context menu example using the popover components #11
* added ability to hide example chrome #8

## 0.1.0

* initial commit which is a very heavily modified version of [nucleus-react](https://github.com/ryanzec/nucleus-react)
