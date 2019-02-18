<div class="breadcrumbs">
  <ol>
    <li><a href="/docs/core/contents">Contents</a></li>
    <li><a href="#">Form</a></li>
  </ol>
</div>

# Form

<form class="form">
  <div class="group">
    <label for="name">Full name</label>
    <span class="form-hint">As shown on your birth certificate or passport</span>
    <input class="form-control" id="name" name="name" type="text">
  </div>
  <div class="group">
    <fieldset>
      <legend>
        <span class="form-hint">
          What is your date of birth?
        </span>
        <span class="form-hint">
          For example, 31 3 1980
        </span>
      </legend>
      <div class="group day">
        <label for="day">Day</label>
        <input class="form-control" id="day" name="day" type="number">
      </div>
      <div class="group month">
        <label for="month">Month</label>
        <input class="form-control" id="month" name="month" type="number">
      </div>
      <div class="group year">
        <label for="year">Year</label>
        <input class="form-control" id="year" name="year" type="number">
      </div>
    </fieldset>
  </div>
  <input type="submit" class="button" value="Continue">
</form>

    <form class="form">
      <div class="group">
        <label for="name">Full name</label>
        <span class="form-hint">As shown on your birth certificate or passport</span>
        <input class="form-control" id="name" name="name" type="text">
      </div>
      <div class="group">
        <fieldset>
          <legend>
            <span class="form-hint">
              What is your date of birth?
            </span>
            <span class="form-hint">
              For example, 31 3 1980
            </span>
          </legend>
          <div class="group day">
            <label for="day">Day</label>
            <input class="form-control" id="day" name="day" type="number">
          </div>
          <div class="group month">
            <label for="month">Month</label>
            <input class="form-control" id="month" name="month" type="number">
          </div>
          <div class="group year">
            <label for="year">Year</label>
            <input class="form-control" id="year" name="year" type="number">
          </div>
        </fieldset>
      </div>
      <input type="submit" class="button" value="Continue">
    </form>

*Note: Be sure to update all label and input attributes with the correct details i.e.*
    
    <label for=""></label>
    <input id="">
    <input type="">
    <input name="">