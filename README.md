# ionicSeed

## PREREQUISITES ##

* Ionic
* Bower
* ios-sim

## UPDATE NPM ##

```sh
$ npm install
```

## UPDATE IONIC ##

```sh
$ ionic state restore
```

## ADD NEW PLATFORM ##

[iOS]

```sh
$ ionic platform add ios
$ ionic build ios
```

[Android]

```sh
$ ionic platform add android
$ ionic build android
```

## EMULATE / RUN PLATFORM ##

[Browser]
```sh
$ ionic serve
```

[iOS]

```sh
$ ionic emulate ios
```

[Android]

```sh
$ ionic emulate android
```