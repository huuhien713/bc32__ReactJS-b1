import React, { Component } from 'react'

import Item from './Item.jsx'
class Body extends Component {
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            <Item 
                icon={'bi bi-collection'}
                title={'Fresh new layout'} 
                content={'With Bootstrap 5, we ve created a fresh new layout for this template!'}
            />                                            
            <Item 
                icon={'bi bi-cloud-download'}
                title={'Free to download'} 
                content={'As always, Start Bootstrap has a powerful collectin of free templates.'}
            />
            <Item 
                icon={'bi bi-card-heading'}
                title={'Jumbotron hero header'} 
                content={'The heroic part of this template is the jumbotron hero header!'}
            />
            <Item 
                icon={'bi bi-bootstrap'}
                title={'Feature boxes'} 
                content={'We ve created some custom feature boxes using Bootstrap icons!'}
            />
            <Item 
                icon={'bi bi-code'}
                title={'Simple clean code'} 
                content={'We keep our dependencies up to date and squash bugs as they come!'}
            />
            <Item 
                icon={'bi bi-patch-check'}
                title={'A name you trust'} 
                content={'Start Bootstrap has been the leader in free Bootstrap templates since 2013!'}
            />
          </div>
        </div>
      </section>
    )
  }
}

export default Body