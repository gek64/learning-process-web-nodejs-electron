# TODO
- https://developer.mozilla.org/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_todo_list_beginning
- https://developer.mozilla.org/zh-TW/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_item_component

# setup
```shell
# install angular
cmd
cd learning_angular
set http_proxy=http://192.168.1.2:1081
set https_proxy=http://192.168.1.2:1081
npm install @angular/cli

# use angular
cmd
cd learning_angular
set http_proxy=http://192.168.1.2:1081
set https_proxy=http://192.168.1.2:1081
set PATH=%PATH%;"%cd%\node_modules\.bin"

# use git
set PATH=%PATH%;"%USERPROFILE%\Documents\git\bin"
git config --global http.proxy http://192.168.1.2:1081
git config --global https.proxy http://192.168.1.2:1081 
git config --global --unset http.proxy
git config --global --get http.proxy
```