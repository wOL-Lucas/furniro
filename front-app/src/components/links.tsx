import styled from 'styled-components';
import Link from '../types/link';

const Items = styled.div<{ column?: boolean }>`
  display: flex;
  flex-direction: ${props => props.column ? 'column' : 'row'};
  justify-content: space-between;
  height: ${props => props.column ? '100%' : 'auto'};
  align-items: ${props => props.column ? 'start' : 'center'};
  width: auto;
  padding: 0;
  margin: 0;
  color: #000000;

  a {
    text-decoration: none;
    color: #000000;
    margin: 0 10px;
    padding: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    
    a {
      font-size: ${props => props.column ? '12px' : '18px'};
    }
  }
}
`

type LinksProps = {
  pages: Link[];
  column: boolean;
}

const Links: React.FC<LinksProps> = ( { pages, column } ) => {
 return (
    <Items column={column}>
      {pages.map((page, index) => (
        <a key={index} href={page.url}>
         {page.name}
        </a>
      ))}
    </Items>
  )
};


export default Links;
