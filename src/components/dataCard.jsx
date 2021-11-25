import * as React from "react";
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardTitle,
  DocumentCardDetails,
  DocumentCardImage,
} from "@fluentui/react/lib/DocumentCard";

import { ImageFit } from "@fluentui/react/lib/Image";

const people = [
  { name: "Annie Lindqvist", profileImageSrc: "https://img.src/ge" },
  { name: "Roko Kolar", profileImageSrc: "", initials: "RK" },
  { name: "Aaron Reid", profileImageSrc: "https://img.src/ge" },
  { name: "Christian Bergqvist", profileImageSrc: "", initials: "CB" },
];

const oneNoteIconProps = {
  iconName: "OneNoteLogo",
  styles: {
    root: {
      color: "#813a7c",
      fontSize: "120px",
      width: "120px",
      height: "120px",
    },
  },
};
export default function DataCard() {
  const cardStyles = {
    root: {
      display: "inline-block",
      marginRight: 20,
      marginBottom: 20,
      width: 320,
    },
  };
  return React.createElement(
    "div",
    null,
    React.createElement(
      DocumentCard,
      {
        "aria-label":
          "Document Card with image. How to make a good design. " +
          "Last modified by Annie Lindqvist and 2 others in March 13, 2018.",
        styles: cardStyles,
        onClickHref: "http://bing.com",
      },
      React.createElement(DocumentCardImage, {
        height: 150,
        imageFit: ImageFit.cover,
        imageSrc: "https://img.src/ge",
      }),
      React.createElement(
        DocumentCardDetails,
        null,
        React.createElement(DocumentCardTitle, {
          title: "How to make a good design",
          shouldTruncate: true,
        })
      ),
      React.createElement(DocumentCardActivity, {
        activity: "Modified March 13, 2018",
        people: people.slice(0, 3),
      })
    ),
    React.createElement(
      DocumentCard,
      {
        "aria-label":
          "Document Card with icon. How to make a good design. " +
          "Last modified by Christian Bergqvist in January 1, 2019.",
        styles: cardStyles,
        onClickHref: "http://bing.com",
      },
      React.createElement(DocumentCardImage, {
        height: 150,
        imageFit: ImageFit.cover,
        iconProps: oneNoteIconProps,
      }),
      React.createElement(
        DocumentCardDetails,
        null,
        React.createElement(DocumentCardTitle, {
          title: "How to make a good design",
          shouldTruncate: true,
        })
      ),
      React.createElement(DocumentCardActivity, {
        activity: "Modified January 1, 2019",
        people: [people[3]],
      })
    )
  );
}
