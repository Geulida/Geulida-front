import React, { useEffect } from 'react';
import { ReactComponent as PhotoPlus } from 'assets/PhotoPlus.svg';
import styles from './gallerySaveBtn.module.scss';

function GallerySaveBtn() {
  return (
    <div>
      <div className={styles.gallerySaveBtn}>
        <PhotoPlus />
      </div>
    </div>
  );
}

export default GallerySaveBtn;
