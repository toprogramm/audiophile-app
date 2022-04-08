import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Thanks.module.scss';
import checkout from '../../assets/checkout/checkout.svg';
const formText = {
  checkout: '../../assets/checkout/checkout.svg',
  thanks: 'Thank You For Your Order',
  emailConfirmation: 'You will receive an email confirmation shortly.',
  grandTotal: 'GRAND TOTAL',
  backToHome: 'BACK TO HOME',
};
const variables = {
  buttonOrangeMod: 'button_orange button_orange_mod',
};
function Thanks() {
  return (
    <div className={styles.thanks}>
      <img className={styles.thanks__thanksIcon} src={checkout} />
      <div className={styles.thanks__thanksForOrder}>
        <div className={styles.h3}>{formText.thanks}</div>
      </div>
      <div className={styles.thanks__emailConfirmation}>
        {formText.emailConfirmation}
      </div>
      <div className={styles.thanks__total}>
        <div className={styles.thanks__left}>Headphones</div>
        <div className={styles.thanks__right}>{formText.grandTotal}</div>
      </div>
      <div className={variables.buttonOrangeMod}>{formText.backToHome}</div>
    </div>
  );
}

export default Thanks;
