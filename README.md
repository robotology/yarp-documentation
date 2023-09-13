# yarp-documentation
Documentation for YARP

This repo generates the documentation that is displayed on the web page https://yarp.it
It works in the following way:

- This [github action](https://github.com/robotology/yarp-documentation/blob/master/.github/workflows/gh-pages.yml) is periodically executed from the `master` branch.
- The action checks for all yarp releases (tags) published on [yarp](https://github.com/robotology/yarp). If a new one is found, then the action runs doxygen on it to generate the new documentation. Otherwise, it skips it. 
   The github action also checks for auxiliary repos found in the [robotology](https://github.com/robotology) organization, which have the prefix `yarp-devices-` or `yarp-device-`.
   These repos are cloned into the folder `yarp/opt-modules` which is scanned by Doxygen to generate the documentation for these plugins.
- The output of the Doxygen is committed to the branch `yarp_it_pages`.
- The branch `yarp-it-pages` is periodically published onto https://yarp.it (not from this github action)
