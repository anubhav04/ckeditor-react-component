Ckeditor For ReactJs
====================

This module exposes component for CKEditor 5 for react:
* Pass `uploadUrl` to unable use of images within editor. uploadUrl is required in CKEditor 5 to unable use of images.

* Soon a fully customisable version will be available.


## Installation
    npm install --save ckeditor-react-component
    yarn add ckeditor-react-component

## Fully Customisable
* It is fully customisable, you can customise the wrapper, just edit CkeditorReact.js file according to you need

## Usage
```es6
import React, { Component } from 'react';
import CkeditorReact from 'ckeditor-react';

class ckeditor extends Component{
  onChange = (event, editor) => {
    console.log( { event, editor } );
  }
  render(){
    return(
      <CkeditorReact
      onChange={this.onChange} // function to get content
      style={{height: '100px'}} // your custom styles
      className="test" // your custom className
      uploadUrl="/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json" // your media upload url, required to use image upload in contentToolbar
      data={data} // data you want to pass as default content
      />
    );
  }
};
```

## License MIT
* MIT License

Copyright (c) 2018 anubhav04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
