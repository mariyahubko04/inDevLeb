import React from 'react';

const Header = () => (
  <div class="header">
    <div class="header__order">
      <div class="header__top">
        <div class="header__title">your order</div>
        <div class="header__section-order">
          <div class="header__section-order--item">
            <span class="header__section-order--info">items</span>
            2 documents
        </div>
          <div class="header__section-order--item">
            <span class="header__section-order--info">details</span>
            2 languages
          </div>
          <div class="header__section-order--item">
            <span class="header__section-order--info">price</span>
            $696.06
            </div>
          <div class="header__section-order--item">
            <span class="header__section-order--info">delivery</span>
            48 hours*
              </div>
        </div>
      </div>

      <div class="header__button">
        <a href="#" class="header__button--place btn btn-primary btn-lg active" role="button" aria-disabled="true">place order</a>
        <a href="#" class="header__button--place btn btn-secondary btn-lg" role="button" aria-disabled="true">print a quote</a>
      </div>
    </div>

    <div class="header__info">
      <span class="header__info--title">Help center</span>
      <p>
        If you need assistance while placing your order, contact one of our beloved Project Manager by phone or email.
      </p>
    <div class="header__info--contacts">
        <span>+971(0)555 555</span>
        <span>help@qtest.com</span>
      </div>
    </div>
  </div>
)

export default Header;
