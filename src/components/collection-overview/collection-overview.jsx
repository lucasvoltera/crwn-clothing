import React from "react";
// import './collection-overview.scss'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview  } from "../../redux/shop/shop-selector";
import CollectionPreview from "../collection-preview/collection-preview";

import { CollectionsOverviewContainer } from './collection-overview-styles';

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
      {
        collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);