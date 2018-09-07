# Agm-Direction

[![npm version](https://badge.fury.io/js/agm-direction.svg)](https://badge.fury.io/js/agm-direction)
[![npm](https://img.shields.io/npm/dm/localeval.svg)](https://github.com/explooosion/Agm-Direction)
[![Dependency Status](https://david-dm.org/explooosion/Agm-Direction.svg?theme=shields.io)](https://david-dm.org/explooosion/Agm-Direction)
[![Build Status](https://travis-ci.org/explooosion/Agm-Direction.svg?branch=master)](https://travis-ci.org/explooosion/Agm-Direction)
[![GitHub license](https://img.shields.io/github/license/explooosion/Agm-Direction.svg)](https://github.com/explooosion/Agm-Direction)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)


[Agm-Direction](https://github.com/explooosion/Agm-Direction) is the directive for [@agm/core](https://github.com/SebastianM/angular-google-maps) (not official)

- Angular 2+
- Google Map API
- [Playground](https://stackblitz.com/edit/agm-direction-demo)  

How to use?  
👉 [Start Reading](https://robby570.tw/Agm-Direction-Docs/)

![Agm-Direction](https://i.imgur.com/DCIoXqS.jpg)

## Installation

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

+ Install @agm/core
  ```bash
  npm install --save @agm/core
  ```

+ Install agm-direction
  ```bash
  npm install --save agm-direction
  ```

## Importing Modules

📦 [@agm/core](https://www.npmjs.com/package/@agm/core)  
📦 [agm-direction](https://www.npmjs.com/package/agm-direction)  

```typescript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component'

import { AgmCoreModule } from '@agm/core'            // @agm/core
import { AgmDirectionModule } from 'agm-direction'   // agm-direction

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({ // @agm/core
      apiKey: 'your key',
    }),
    AgmDirectionModule,     // agm-direction
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

HTML

```html
<agm-map [latitude]="lat" [longitude]="lng">
  <agm-direction [origin]="origin" [destination]="destination">
  </agm-direction>
</agm-map>
```

CSS

```css
agm-map {
    height: 400px;
}
```

TS

```typescript
public lat: Number = 24.799448
public lng: Number = 120.979021

public origin: any
public destination: any

ngOnInit() {
  this.getDirection()
}

getDirection() {
  this.origin = { lat: 24.799448, lng: 120.979021 }
  this.destination = { lat: 24.799524, lng: 120.975017 }

  // this.origin = 'Taipei Main Station'
  // this.destination = 'Taiwan Presidential Office'
}
```

## Document
- Document [Agm-Direction-Docs](https://robby570.tw/Agm-Direction-Docs/)
- Less useful [AgmDirectionModule](https://robby570.tw/Agm-Direction/)

## Development

👉 [Playground](https://github.com/explooosion/Agm-Direction/tree/master/playground)

```bash
git clone https://github.com/explooosion/Agm-Direction.git
```

```bash
cd playground
```

## Generator 
This library generated by [angular-library-starter](https://github.com/robisim74/angular-library-starter).

## License

[MIT](http://opensource.org/licenses/MIT)
