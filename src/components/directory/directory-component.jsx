import React from 'react';
import MenuItem from '../menu-items/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections: [
                    {
                      title: 'ตระกูลกะหล่ำ',
                      imageUrl: 'https://images.unsplash.com/photo-1486328228599-85db4443971f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                      id: 1,
                      linkUrl: 'shop/cabbages'
                    },
                    {
                      title: 'ตระกูลถั่ว',
                      imageUrl: 'https://images.unsplash.com/photo-1552585960-0e1069ce7405?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
                      id: 2,
                      linkUrl: 'shop/beans'
                    },
                    {
                      title: 'ตระกูลมะเขือ',
                      imageUrl: 'https://images.unsplash.com/photo-1518977822534-7049a61ee0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                      id: 3,
                      linkUrl: 'shop/tomatoes'
                    },
                    {
                      title: 'ตระกูลแตง',
                      imageUrl: 'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
                      size: 'large',
                      id: 4,
                      linkUrl: 'shop/cucumbers'
                    },
                    {
                      title: 'ตระกูลอื่นๆ',
                      imageUrl: 'https://images.unsplash.com/photo-1484848560771-c55afee65e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                      size: 'large',
                      id: 5,
                      linkUrl: 'shop/others'
                    }
                ]
        }


    }

    render(){
        return (
            <div className="directory-menu">
                { this.state.sections.map( ({ id, ...otherSectionProps}) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }


}

export default Directory;