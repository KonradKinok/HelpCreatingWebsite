'use strict';
import * as mainMethods from '../functions.mjs';

//section1 article1
mainMethods.htmlTagViewExample('div#example-theory-s1a1', 'div#example-practice-s1a1');

// $(window)
//   .on('load resize ', function () {
//     var scrollWidth = $('.tbl-content').width() - $('.tbl-content table').width();
//     $('.tbl-header').css({ 'padding-right': scrollWidth });
//   })
//   .resize();

function adjustTableHeaderPadding() {
  const tblContent = document.querySelector('.tbl-content');
  const tblContentTable = tblContent.querySelector('table');
  const tblHeader = document.querySelector('.tbl-header');

  const scrollWidth = tblContent.offsetWidth - tblContentTable.offsetWidth;
  tblHeader.style.paddingRight = `${scrollWidth}px`;
}

window.addEventListener('load', adjustTableHeaderPadding);
window.addEventListener('resize', adjustTableHeaderPadding);
