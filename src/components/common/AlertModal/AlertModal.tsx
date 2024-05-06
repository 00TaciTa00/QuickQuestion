import classNames from 'classnames/bind'
import styles from './AlertModal.module.scss'
import { useState } from 'react'
import Button from '../Button/Button'

const cx = classNames.bind(styles)

interface AlertModalProps {}

const AlertModal = ({}: AlertModalProps) => {
  return (
    <div className={cx(`alertModal`)}>
      <div className={cx('alertModal-textBox')}>
        <p>답변을 삭제하시겠습니까?</p>
      </div>
      <div className={cx(`alertModal-buttonBox`)}>
        <Button text="취소하기" size="md" type="button" variant="another" />
        <Button text="답변하기" size="md" type="button" />
      </div>
    </div>
  )
}

export default AlertModal
