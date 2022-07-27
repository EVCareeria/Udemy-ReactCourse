import { useNavigate } from 'react-router-dom'

import {DirectoryItemContainer, BackGroundImage, Body} from './directory-item.styles.js'

const DirectoryItem = ({category}) => {
  const {imageUrl, title, route} = category
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return(
    <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackGroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop now</p>
        </Body>
    </DirectoryItemContainer>
  )
  
}

export default DirectoryItem
