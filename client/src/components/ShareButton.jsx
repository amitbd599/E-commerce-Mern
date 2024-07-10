import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const ShareButton = ({ shareUrl }) => {
  const title = "Check out this awesome website!";
  return (
    <ul className="share__icon list-unstyled share-list d-flex align-items-center mb-1 flex-wrap">
      <li className="share-item">
        <FacebookShareButton url={shareUrl} quote={title} hashtag="#example">
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </li>
      <li className="share-item">
        <TwitterShareButton
          url={shareUrl}
          title={title}
          hashtags={["example", "react"]}
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </li>
      <li className="share-item">
        <LinkedinShareButton
          url={shareUrl}
          title={title}
          summary="This is an example summary"
          source="ExampleSource"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </li>
      <li className="share-item">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          summary="This is an example summary"
          source="ExampleSource"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </li>
    </ul>
  );
};

export default ShareButton;
