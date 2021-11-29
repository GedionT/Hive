import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
} from '@fluentui/react/lib/DocumentCard';
import PropTypes from 'prop-types';

import { ImageFit } from '@fluentui/react/lib/Image';

const people = [
  {
    name: 'Gedion Teshome',
    profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
  },
  {
    name: 'Henok Fisseha',
    profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
    initials: 'HFT',
  },
  {
    name: 'Fasika Zewdie',
    profileImageSrc: 'https://avatars.githubusercontent.com/u/26666155?v=4',
  },
  { name: 'Getachew Muhabaw', profileImageSrc: '', initials: 'GM' },
];

const oneNoteIconProps = {
  iconName: 'OneNoteLogo',
  styles: {
    root: {
      color: '#813a7c',
      fontSize: '120px',
      width: '120px',
      height: '120px',
    },
  },
};
export default function DataCard() {
  const cardStyles = {
    root: {
      display: 'inline-block',
      marginRight: 20,
      marginBottom: 20,
      width: 320,
    },
  };
  return React.createElement(
    'div',
    null,
    React.createElement(
      DocumentCard,
      {
        'aria-label':
          'Document Card with image. How to make a good design. ' +
          'Last modified by Annie Lindqvist and 2 others in March 13, 2018.',
        styles: cardStyles,
        onClickHref: 'http://github.com/gediont',
      },
      React.createElement(DocumentCardImage, {
        height: 150,
        imageFit: ImageFit.cover,
        imageSrc:
          'https://www.saintjohnscancer.org/blog/wp-content/uploads/sites/11/2020/09/iStock-1175329868-1024x630-1.jpg',
      }),
      React.createElement(
        DocumentCardDetails,
        null,
        React.createElement(DocumentCardTitle, {
          title: 'Campaign for Breast Cancer Awareness',
          shouldTruncate: true,
        })
      ),
      React.createElement(DocumentCardActivity, {
        activity: 'Modified March 13, 2021',
        people: people.slice(0, 3),
      })
    ),
    React.createElement(
      DocumentCard,
      {
        'aria-label':
          'Document Card with icon. How to make a good design. ' +
          'Last modified by Christian Bergqvist in January 1, 2019.',
        styles: cardStyles,
        onClickHref: 'http://github.com/gediont',
      },
      React.createElement(DocumentCardImage, {
        height: 150,
        imageFit: ImageFit.cover,
        imageSrc:
          'https://media.istockphoto.com/photos/pensive-school-boy-thinking-about-homework-project-writing-essay-picture-id962478086?k=20&m=962478086&s=612x612&w=0&h=PjHlmSAYIdBmhSNha5KF8BCt8KxntIRJL-VeR6NtaGI=',
        iconProps: oneNoteIconProps,
      }),
      React.createElement(
        DocumentCardDetails,
        null,
        React.createElement(DocumentCardTitle, {
          title: 'Teach an ADHD affected student a skill',
          shouldTruncate: true,
        })
      ),
      React.createElement(DocumentCardActivity, {
        activity: 'Modified January 1, 2022',
        people: [people[3]],
      })
    )
  );
}

DataCard.propTypes = {
  people: PropTypes.arrayOf(people),
  oneNoteIconProps: PropTypes.object,
};
