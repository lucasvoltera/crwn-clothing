import shopData from './shop-data';
import React
 from 'react';
class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            collections: shopData
        };

    }

    render() {
        return(
            <div>SHOP PAGE</div>
        )
    }
}

export default ShopPage;