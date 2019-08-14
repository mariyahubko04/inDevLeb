import React from 'react';

const Header = () => (
  <div className="header">

    <div className="header__order">

      <div className="header__top">
        <div className="header__title">your order</div>

        <div className="header__section-order">

          <div className="header__section-order--item">
            <span className="header__section-order--info">items</span>
            2 documents
          </div>
          <div className="header__section-order--item">
            <span className="header__section-order--info">details</span>
            2 languages
          </div>
          <div className="header__section-order--item">
            <span className="header__section-order--info">price</span>
            $696.06
          </div>
          <div className="header__section-order--item">
            <span className="header__section-order--info">delivery</span>
            48 hours*
          </div>

        </div>
      </div>

      <div className="header__button">
        <a
          href="#"
          className="header__button--place btn btn-primary btn-lg active"
          role="button"
          aria-disabled="true"
        >
          place order
        </a>
        <a
          href="#"
          className="header__button--place btn btn-secondary btn-lg"
          role="button"
          aria-disabled="true"
        >
          print a quote
        </a>
      </div>

    </div>

    <div className="header__info">
      <span className="header__info--title">Help center</span>
      <p>
        If you need assistance while placing your order, contact one of our beloved Project Manager by phone or email.
      </p>
      <div className="header__info--contacts">
        <span>+971(0)555 555</span>
        <span>help@qtest.com</span>
      </div>
    </div>

  </div>
)

export default Header;
