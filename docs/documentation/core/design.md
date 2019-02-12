<h1>Design System styles guide</h1>
<p>Some text in here about styles</p>

<div class="heading">
  <strong>Contents</strong>
</div>
<ul>
  <li><a href="#colour">Colour</a></li>
  <li><a href="#typography">Typography</a></li>
  <li><a href="#layout">Layout</a></li>
</ul>
<div class="content-break-sm"></div>

<h2 id="colour">Colour</h2>
<p>The colours used on essex.gov.uk are part of ECC's colour palette.</p>
<p>We've used Sass variables so any changes to the ECC colour palette can be
  easily updated.</p>

<h3>Primary brand colour</h3>
<div class="table">
<table>
  <thead>
    <tr>
      <td>Colour</td>
      <td>WCAG 2.0 contrast complience</td>
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
      <td>WCAG 2.0 contrast complience</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#190119"></div></td>
      <td>AAA</td>
      <td>$text-colour</td>
      <td>#190119</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#444444"></div></td>
      <td>AAA</td>
      <td>$body-text-colour</td>
      <td>#444444</td>
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
      <td>WCAG 2.0 contrast complience</td>
      <td>Variable</td>
      <td>Hex</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#192A66"></div></td>
      <td>AAA</td>
      <td>$link</td>
      <td>#192A66</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#92006D"></div></td>
      <td>AAA</td>
      <td>$hover</td>
      <td>#92006D</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#682558"></div></td>
      <td>AAA</td>
      <td>$visited</td>
      <td>#682558</td>
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
<p>We should ensure greyscale colours are always AAA compliant when used with the contrasting text colours, e.g. $white used on darker colours and $text-colour used on lighter colours.</p>
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
      <td><div class="colour-swatch" style="background-color:#111111"></div></td>
      <td>$grey-darker</td>
      <td>#111111</td>
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

<h1>Page heading - h1 (46px)</h1>
<h2>Content heading - h2 (36px)</h2>
<h3>Section heading - h3 (28px)</h3>
<h4>Sub-section heading - h4 (22px)</h4>

<p>The default size for body text is 16px.</p>

<div class="content-break-sm"></div>

<h2 id="layout">Layout</h2>
<p>Our main grid uses the divisions below with a gutter of 60px.</p>
<p>We also use a wider gutter of 120px for displaying Essex County Council Services on the home page.</p>
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

<div class="grid-row">
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
</div>
