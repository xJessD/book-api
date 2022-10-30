import style from './FlexBox.module.scss';

const FlexBox = ({children}) => {
  return (
    <div className={style.FlexBox}>
      {children}
    </div>
  )
};

export default FlexBox;