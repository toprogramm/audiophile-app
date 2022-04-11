import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thanks.module.scss';
import checkout from '../../assets/checkout/checkout.svg';
import markii from '../../assets/cart/image-xx99-mark-two-headphones.jpg';

const formText = {
  checkout: '../../assets/checkout/checkout.svg',
  thanks: 'Thank You For Your Order',
  emailConfirmation: 'You will receive an email confirmation shortly.',
  grandTotal: 'GRAND TOTAL',
  backToHome: 'BACK TO HOME',
  inDollars: '5,466',
  otherItems: 'and 2 other item(s)',
  model: 'XX99 MK II',
  cost: '2,999',
  qty: '1',
};
const variables = {
  buttonOrangeMod: 'button_orange button_orange_mod',
};

function ThanksIcon() {
  return <img className={styles.thanks__thanksIcon} src={checkout} />;
}
function ThanksForOrder() {
  return (
    <div className={styles.thanks__thanksForOrder}>
      <div className={styles.h3}>{formText.thanks}</div>
    </div>
  );
}
function EmailConfirmation() {
  return (
    <div className={styles.thanks__emailConfirmation}>
      {formText.emailConfirmation}
    </div>
  );
}

function Total() {
  function Left() {
    return (
      <div className={styles.thanks__left}>
        <div className={styles.thanks__productPlace}>
          <div className={styles.thanks__products}>
            <div className={styles.thanks__product}>
              <div className={styles.thanks__iconPlace}>
                <img className={styles.thanks__productIcon} src={markii} />
              </div>
              <div className={styles.thanks__aboutProduct}>
                <div className={styles.thanks__model}>{formText.model}</div>
                <div className={styles.thanks__cost}>$ {formText.cost}</div>
              </div>
              <div className={styles.thanks__qty}>x{formText.qty}</div>
            </div>
          </div>
        </div>
        <div src="#" className={styles.thanks__otherItems}>
          {formText.otherItems}
        </div>
      </div>
    );
  }
  function Right() {
    return (
      <div className={styles.thanks__right}>
        <div className={styles.thanks__grandTotal}>{formText.grandTotal}</div>
        <div className={styles.thanks__inDollars}>$ {formText.inDollars}</div>
      </div>
    );
  }

  return (
    <div className={styles.thanks__total}>
      <Left />
      <Right />
    </div>
  );
}
function Thanks() {
  return (
    <div className={styles.thanks}>
      <ThanksIcon />
      <ThanksForOrder />
      <EmailConfirmation />
      <Total />
      <div className={variables.buttonOrangeMod}>{formText.backToHome}</div>
    </div>
  );
}

export default Thanks;
