type InfoBarProps = {
    variant?: string;
    content: string;

}


const InfoBar = ({variant = '', content=''}:InfoBarProps) => {
  return (

    <div className={`${variant}`}>
          {content}
      </div>


  )
}

export default InfoBar