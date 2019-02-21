<div class="breadcrumbs">
  <ol>
    <li><a href="/docs/core/contents">Contents</a></li>
    <li><a href="#">Form Validation</a></li>
  </ol>
</div>

# Form Validation

<div class="error-summary" role="alert" aria-label="error-summary-heading-example-1" tabindex="-1">
  <h2 class="heading-medium error-summary-heading" id="error-summary-heading-example-1">
    Message to alert the user to a problem goes here
  </h2>
  <p>
    Optional description of the errors and how to correct them
  </p>
  <ul class="error-summary-list">
    <li><a href="#">Descriptive link to the question with an error</a></li>
  </ul>
</div>
<form class="form">
  <div class="group form-group-error">
    <label for="name">Full name</label>
    <span class="form-hint">As shown on your birth certificate or passport</span>
    <span class="error-message">Error message goes here</span>
    <input class="form-control form-control-error" id="name" name="name" type="text">
  </div>
  <div class="group form-group-error">
    <label for="details">Label</label>
    <span class="form-hint">Form Hint message</span>
    <span class="error-message">Error message goes here</span>
    <textarea class="form-control form-control-error" id="details" name="detail" type="text"></textarea>
  </div>
  <div class="group form-group-error">
    <label for="sorting">Sort by</label>
    <span class="error-message">Error message goes here</span>
    <select class="form-control form-control-error" id="sorting" name="sorting">
      <option>Recently published</option>
      <option selected>Recently updated</option>
      <option>Most views</option>
      <option>Most comments</option>
    </select>
  </div>
  <input type="submit" class="button" value="Continue">
</form>