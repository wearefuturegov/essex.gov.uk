<h1>Design System styles guide</h1>
<p>Some text in here about styles</p>

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
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#e40037"></div></td>
      <td>$brand</td>
      <td>#e40037</td>
    </tr>
  </tbody>
</table>
</div>

<h3>Text</h3>
<div class="table">
<table>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#0b0c0c"></div></td>
      <td>$text-colour</td>
      <td>#0b0c0c</td>
    </tr>
    <tr>
      <td><div class="colour-swatch colour-swatch-border" style="background-color:#fff"></div></td>
      <td>$white</td>
      <td>#fff</td>
    </tr>
  </tbody>
</table>
</div>


<h3>Link</h3>
<div class="table">
<table>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#004899"></div></td>
      <td>$link</td>
      <td>#004899</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#2a7ab0"></div></td>
      <td>$hover</td>
      <td>#2a7ab0</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#682558"></div></td>
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
<p>Greyscale colours are AAA compliant when used with the contrasting text colours. $white should be used on the darker colours and $text-colour should be used on the lighter colours.</p>
<p></p>
<div class="table">
<table>
  <tbody>
    <tr>
      <td><div class="colour-swatch" style="background-color:#000"></div></td>
      <td>$black</td>
      <td>#000</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#323232"></div></td>
      <td>$grey-dark</td>
      <td>#323232</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#bfc1c3"></div></td>
      <td>$grey</td>
      <td>#bfc1c3</td>
    </tr>
    <tr>
      <td><div class="colour-swatch" style="background-color:#f8f8f8"></div></td>
      <td>$grey-light</td>
      <td>#f8f8f8</td>
    </tr>
  </tbody>
</table>
</div>


<div class="content-break-sm"></div>

<h2 id="typography">Typography</h2>
  <h3>Font</h3>
  <p>Essex.gov.uk uses Arial.</p>

<h3>Headings</h3>
  <p>Headings should create a clear hierarchy for content and use appropriate semantic markup.</p>

<div class="demo-box">
  <h1>Page heading - h1 (48px)</h1>
  <h2>Content heading - h2 (36px)</h2>
  <h3>Section heading - h3 (24px)</h3>
  <h4>Sub-section heading - h4 (19px)</h4>
</div>

<h3>Paragraphs</h3>
  <p>The default size for body text is 19px.</p>

<div class="content-break-sm"></div>

<h2 id="layout">Layout</h2>
<p>Our grid currently only uses the divisions below with a gutter of 30px.</p>
<div class="grid-row">
  <div class="column-full">
    <div class="demo-box">
    <h3>column-full</h3>
    <p>960px</p>
    </div>
  </div>
</div>

<div class="grid-row">
  <div class="column-two-thirds">
    <div class="demo-box">
      <h3>column-two-thirds</h3>
      <p>630px</p>
    </div>
  </div>
  <div class="column-third">
    <div class="demo-box">
      <h3>column-third</h3>
      <p>300px</p>
    </div>
  </div>
</div>

<div class="grid-row">
  <div class="column-half">
    <div class="demo-box">
      <h3>column-half</h3>
      <p>465px</p>
    </div>
  </div>
  <div class="column-half">
    <div class="demo-box">
      <h3>column-half</h3>
      <p>465px</p>
    </div>
  </div>
</div>

<div class="grid-row">
  <div class="column-third">
    <div class="demo-box">
      <h3>column-third</h3>
      <p>300px</p>
    </div>
  </div>
  <div class="column-third">
    <div class="demo-box">
      <h3>column-third</h3>
      <p>300px</p>
    </div>
  </div>
  <div class="column-third">
    <div class="demo-box">
      <h3>column-third</h3>
      <p>300px</p>
    </div>
  </div>
</div>


<h3>Screen sizes</h3>
