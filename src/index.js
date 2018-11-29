import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import Font from '@ckeditor/ckeditor5-font/src/font';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';

class CkeditorReact extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const { uploadUrl } = this.props;
    return(
      <div className={this.props.className} style={this.props.style}>
          <CKEditor
            onChange={ ( event, editor ) => this.props.onChange( { event, editor } ) }
            config={ {
                plugins: [ CKFinderUploadAdapter, Highlight, MediaEmbed, Font, Table, TableToolbar,Essentials, Paragraph, Bold, Italic, Heading, Alignment, List, Link, Image, ImageUpload, ImageToolbar, ImageStyle, ImageCaption, UploadAdapter, Autoformat, BlockQuote, BlockToolbar, ParagraphButtonUI, HeadingButtonsUI ],
                toolbar: [ 'heading', '|', 'bold', 'italic', 'alignment' , 'highlight','bulletedList', 'numberedList', ,'|', 'undo', 'redo', 'link','insertTable', '|' ,'fontSize', 'fontFamily', '|', 'mediaEmbed', '|', 'imageUpload', 'imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side' ],
                table: {
                    contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
                },
                blockToolbar: [
                    'paragraph', 'heading1', 'heading2', 'heading3',
                    '|',
                    'bulletedList', 'numberedList',
                    '|',
                    'blockQuote', 'imageUpload'
                ],
                ckfinder: {
                    uploadUrl: uploadUrl,
                    image: ImageUpload
                }
            } }
            editor={ ClassicEditor }
            data={this.props.data ? this.props.data : ''}
          />
      </div>
    )
  }
}

export default CkeditorReact;
