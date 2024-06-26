import classNames from 'classnames/bind'
import Button from '@/components/common/Button/Button'
import useChangeTagName from '@/hooks/useChangeTagName'
import styles from './QuestionContent.module.scss'
import useDate from '@/hooks/useDate'
import { useGetRecipientsRead } from '@/hooks/useRecipients'
import { useEffect, useState } from 'react'
import { useModal } from '@/contexts/ModalProvider'
import AlertModal from '@/components/common/AlertModal/AlertModal'
import FormModal from '@/components/common/FormModal/FormModal'
import { RecipientsDetailData } from '@/types/recipients'

const cx = classNames.bind(styles)

interface QuestionContentProps {
  id?: string
  userStatus: 'question' | 'answer'
  data: RecipientsDetailData
  isChecked: string | undefined
}

const QuestionContent = ({
  id,
  userStatus,
  data,
  isChecked
}: QuestionContentProps) => {
  if (id === undefined) {
    return <div>Invalid ID</div>
  }

  const getTagName = useChangeTagName()

  const tagName = getTagName(data.backgroundColor)
  const name = data.name
  const userName = name.split('/')[0]
  const questionText = name.split('/')[2]
  const date = useDate(data.createdAt)
  const image = data.backgroundImageURL

  const modalId = crypto.randomUUID()
  const { openModal, closeModal } = useModal()

  const handleAnswerModal = () => {
    openModal(
      <FormModal
        id={id}
        question={questionText}
        onClose={() => {
          closeModal(modalId)
        }}
      />,
      modalId
    )
  }

  return (
    <div className={cx('questionContent')}>
      <div className={cx('questionInformation')}>
        <div className={cx('questionHeader')}>
          <i className={cx('questionHeader-icon')}>Q</i>
          <span className={cx('questionHeader-category')}>{tagName}</span>
        </div>
        <div className={cx('questionDetails')}>
          <span className={cx('questionDetails-author')}>{userName}</span>
          <span className={cx('questionDetails-date')}>{date}</span>
        </div>
        <div className={cx('questionText')}>{questionText}</div>
        {image && (
          <img
            className={cx('questionImage')}
            src={image}
            alt="질문 첨부 사진"
          />
        )}
      </div>
      {userStatus === 'answer' && !isChecked && (
        <div className={cx('questionBtn')}>
          <Button
            text="답변하기"
            size="lg"
            type="button"
            onClick={handleAnswerModal}
          />
        </div>
      )}
    </div>
  )
}

export default QuestionContent
