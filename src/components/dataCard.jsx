import React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
} from '@fluentui/react/lib/DocumentCard';
import PropTypes from 'prop-types';
import { ImageFit } from '@fluentui/react/lib/Image';

export default function DataCard({ openData }) {
  const cardStyles = {
    root: {
      display: 'inline-block',
      marginRight: 20,
      marginBottom: 20,
      width: 320,
    },
  };

  return (
    <div>
      <DocumentCard
        aria-label={'Open role Card with image. '}
        styles={cardStyles}
        onClickHref="/"
      >
        <DocumentCardImage
          height={150}
          imageFit={ImageFit.cover}
          imageSrc={openData.imgSrc}
        />
        <DocumentCardDetails>
          <DocumentCardTitle title={openData.title} shouldTruncate={true} />
        </DocumentCardDetails>
        <DocumentCardActivity
          activity={openData.activity}
          people={openData.people}
        />
      </DocumentCard>
    </div>
  );
}
DataCard.propTypes = {
  openData: PropTypes.object,
};
