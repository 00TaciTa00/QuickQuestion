import classNames from 'classnames/bind'
import styles from './Tags.module.scss'
import React from 'react'

const cx = classNames.bind(styles)

interface TagsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isAll?: boolean
}

type TagKey = '전체' | '학문' | '연예' | '게임' | '기타'
const tagList = {
  전체: 'all',
  학문: 'beige',
  연예: 'purple',
  게임: 'blue',
  기타: 'green'
}

const Tags = React.forwardRef<HTMLInputElement, TagsProps>(
  ({ isAll = false, ...props }, ref) => {
    const filteredTagList = isAll
      ? Object.keys(tagList)
      : Object.keys(tagList).slice(1)

    return (
      <div className={cx('tags')}>
        {filteredTagList.map((tag, index) => (
          <div key={tag} className={cx('tag')}>
            <input
              id={tag}
              type="radio"
              value={tagList[tag as TagKey]}
              className={cx('radio')}
              defaultChecked={index === 0} // 첫번째 tag가 기본 선택
              ref={ref}
              {...props}
            />
            <label htmlFor={tag} className={cx('label')}>
              {tag}
            </label>
          </div>
        ))}
      </div>
    )
  }
)

export default Tags
