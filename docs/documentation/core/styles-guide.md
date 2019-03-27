<div class="breadcrumbs">
  <ol>
    <li><a href="/docs/core/contents">Contents</a></li>
    <li><a href="#">Styles guide</a></li>
  </ol>
</div>

<h1>Styles guide</h1>
<p>This begins to tackle showing the fundamentals of visual design and its use within the Essex Design System.</p>

<nav class="contents">
<div class="heading">
  <h2>Contents</h2>
</div>
  <ul>
    <li><a href="#colour">Colour</a></li>
    <li><a href="#typography">Typography</a></li>
    <li><a href="#layout">Layout</a></li>
  </ul>
</nav>

<h2 id="colour">Colour</h2>
<p>The colours used on essex.gov.uk are based on the ECC's colour palette. We've ensure the best use of Sass variables so any changes to the ECC colour palette can be quickly easily updated accross the whole wesbite.</p>
<h4>WCAG 2.1 contrast complience</h4>
<p>We should ensure colours are always AAA compliant especially when using background colours, e.g. $white used on darker colours and $text-colour used on lighter colours.</p>

<h3>Primary brand colour</h3>
<div class="table">
<table>
  <thead>
    <tr>
      <td>Colour</td>
      <td>WCAG 2.1 contrast complience</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#682558"></div></td>
      <td>AAA</td>
      <td>$brand</td>
      <td>#682558</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Text</h3>
<div class="table">
<table>
  <thead>
    <tr>
      <td>Colour</td>
      <td>WCAG 2.1 contrast complience</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#040103"></div></td>
      <td>AAA</td>
      <td>$text-colour</td>
      <td>#040103</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#1a191a"></div></td>
      <td>AAA</td>
      <td>$body-text-colour</td>
      <td>#1a191a</td>
    </tr>
    <tr>
      <td><div class="colour-swatch colour-swatch-border" style="background-color:#fff"></div></td>
      <td>AAA</td>
      <td>$white</td>
      <td>#fff</td>
    </tr>
  </tbody>
</table>
</div>


<h3>Link</h3>
<div class="table">
<table>
  <thead>
    <tr>
      <td>Colour</td>
      <td>WCAG 2.1 contrast complience</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#0043af"></div></td>
      <td>AAA</td>
      <td>$link</td>
      <td>#0043af</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#040103"></div></td>
      <td>AAA</td>
      <td>$hover</td>
      <td>#040103</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#86276e"></div></td>
      <td>AAA</td>
      <td>$visited</td>
      <td>#86276e</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Focus</h3>
<p>This colour is used to highlight which elements on a page users are interacting with. It can be seen when tabbing content with a keyboard.</p>
<div class="table">
<table>
  <thead>
    <tr>
      <td>Colour</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#fab500"></div></td>
      <td>$focus-colour</td>
      <td>#fab500</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Greyscale</h3>
<p></p>
<div class="table">
<table>
  <thead>
    <tr>
      <td>Colour</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#000"></div></td>
      <td>$very-black</td>
      <td>#000</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#040103"></div></td>
      <td>$black</td>
      <td>#040103<td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#444444"></div></td>
      <td>$grey-dark</td>
      <td>#444444</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#808080"></div></td>
      <td>$grey</td>
      <td>#808080</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#dee0e2"></div></td>
      <td>$grey-light</td>
      <td>#dee0e2</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#f5f5f5"></div></td>
      <td>$grey-lighter</td>
      <td>#f5f5f5</td>
    </tr>
  </tbody>
</table>
</div>

<h2 id="typography">Typography</h2>
  <h3>Font</h3>
  <p>Essex.gov.uk uses [Open Sans from Google Fonts](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans:300,400,600,700) in the following weights:</p>
  <p class="light">Light (300)</p>
  <p class="regular">Regular (400)</p>
  <p class="semi-bold">Semi-bold (600)</p>
  <p class="bold">Bold (700)</p>

<h3>Hierarchy</h3>
  <p>Headings should create a clear hierarchy for content and use appropriate semantic markup.</p>

<h1><span>h1/46px</span>Page heading</h1>
<h2><span>h2/32px</span>Content heading</h2>
<h3><span>h3/22px</span>Section heading</h3>
<h4><span>h4/18px</span>Sub-section heading</h4>

<p>The default size for body text is 16px.</p>

<p>We have an example with copy on our <a href="/docs/core/typography">unique Typograhy page</a></p>

<div class="content-break-sm"></div>

<h2 id="layout">Grid system</h2>
<p>Our main grid uses the divisions below with a gutter of 120px. This gutter is very wide.</p>
<div class="grid-row">
  <div class="column-full">
    <div class="demo-box">
    <h3>Full</h3>
    <p>960px</p>
    </div>
  </div>
</div>

<div class="grid-row">
  <div class="column-two-thirds">
    <div class="demo-box">
      <h3>Two thirds</h3>
      <p>630px</p>
    </div>
  </div>
  <div class="column-third">
    <div class="demo-box">
      <h3>Third</h3>
      <p>300px</p>
    </div>
  </div>
</div>

<div class="grid-row">
  <div class="column-half">
    <div class="demo-box">
      <h3>Half</h3>
      <p>465px</p>
    </div>
  </div>
  <div class="column-half">
    <div class="demo-box">
      <h3>Half</h3>
      <p>465px</p>
    </div>
  </div>
</div>

<!-- <div class="grid-row">
  <div class="column-third">
    <div class="demo-box">
      <h3>Third</h3>
      <p>300px</p>
    </div>
  </div>
  <div class="column-third">
    <div class="demo-box">
      <h3>Third</h3>
      <p>300px</p>
    </div>
  </div>
  <div class="column-third">
    <div class="demo-box">
      <h3>Third</h3>
      <p>300px</p>
    </div>
  </div>
</div> -->
