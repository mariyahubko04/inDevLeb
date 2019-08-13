import React from 'react';

const SignInForm = () => (
  <div className="main__sign">
    <h2>
      <span className="main__upload--number">5</span>
      Sign up and choose a payment method
    </h2>
    <form className="main__sign--form" action="/" >
      <legend>Already have an account with us?
      <a href='#'>Sign in.</a>
      </legend>
      <div className="main__sign--user-section">
        <div class="name">
          <label for="name"> Name:
            <input
              className="form-control"
              id="name"
              name="name"
              type="text"
              minlength="3"
              maxlength="15"
              autocomplete="off"
              placeholder="Enter your name"
              required
            />
          </label>
        </div>
        <div class="user">
          <label for="emeil">e-mail adress
            <input
              className="form-control"
              id="emeil"
              name="emeil"
              type="email"
              placeholder="email@example.com"
              autocomplete="off"
              pattern="[A-Za-z0-9._-]+@[a-z]+\.[a-z]{2,4}$"
              data-qa="field-placeholder"
              required
            />
          </label>
          <label for="password">choose a password
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              autocomplete="off"
              minlength="8"
              maxlength="16"
              placeholder="Enter password"
              pattern="(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$)"
              required
            />
          </label>
        </div>
      </div>
      <div class="visa">
        <label for="number_card">card number
            <input
            className="form-control"
            id="number_card"
            name="number_card"
            type="text"
            minlength="16"
            data-qa="field-value"
            required
          />
        </label>
        <label for="expiry_date"> expiry date
            <input
            className="form-control"
            id="expiry_date"
            name="expiry_date"
            type="date"
            required
          />
        </label>
        <label for="cvv">code
            <input
            className="form-control"
            id="cvv"
            name="cvv"
            type="text"
            maxlength="3"
            data-qa="field-value"
            required
          />
        </label>
      </div>
      <div class="form-group__btn">
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" />
            <span className="form-check-text">I agree to the <a href='#' active>Terms & Conditions</a></span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">PLACE ORDER</button>
        <button type="submit" class="btn btn-secondary">PRINT A QUOTE</button>
      </div>
    </form>
  </div>
)

export default SignInForm;
