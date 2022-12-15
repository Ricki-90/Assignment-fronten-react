interface props {
  icon: string
  link: string
}

export const ExternalLinkIcon: React.FC<props> = ({link, icon}) => {
  return (
    <a href={link} target="_blank">
        <i className={icon}></i>
    </a>
  )
}
